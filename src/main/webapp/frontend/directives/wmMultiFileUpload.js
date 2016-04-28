define(['app'], function(app) {
	app.directive('wmMultiFileUpload', ['uploadService', 'notificationService', 'GuidService', function(uploadService, notificationService, GuidService) {
      return {
        restrict: 'A',
        scope: {
          ngModel: '=',
          processBar: '@',
          maxSize: '@',
          isFinish: '='
        },
        transclude: true,
        templateUrl: 'frontend/tmpls/multipleUpload.html',
        link: function(scope, elem, attrs) {
          scope.acceptType = 'image/jpg, image/png, image/jpeg, image/pjpeg, image/x-png, image/gif';

          scope.onFileSelect = function(files) {
            var file, size, types, values, _i;

            if (files.length !== 0) {
              types = scope.acceptType.split(', ');
              //KB
              size = scope.maxSize ? parseInt(scope.maxSize) : 300;

              for (_i = 0; _i < files.length; _i++) {
                file = files[_i];

                if ($.inArray(file.type, types) === -1) {
                  notificationService.danger('图片格式不正确!')
                  return;
                }

                if (file.size > size * 2000) {
                  notificationService.danger('图片尺寸过大!')
                  return;
                }
              }

              uploadService.qiniuUpload(files).then(
                function(urls) {
                  var rs = [];

                  for (var i in urls) {
                    var obj = {
                      url : 'http://' + urls[i],
                      description : '',
                      photoId : GuidService.guid()
                    }
                    rs[i] = obj;
                  }
                  scope.isFinish = 'true';
                  scope.ngModel = rs;
                },
                null,
                function(progress) {
                }
              );
            }
          };
        }
      };
    }]);
})