define(['app'], function(app) {
    app.directive("custImg", ['httpService', 'notificationService', function(httpService, notificationService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
              albumArray : '=',
              id : '=',
              url : '=',
              vm : '=',
              description : '=',
              isManageMode : '=',
              paramTags : '=',
              tagAll : '=',
              refresh : '&'
            },
            templateUrl : 'frontend/tmpls/custImg.html',
            link: function(scope, elem, attrs) {
              scope.vm = {
                tag : false,
                des :　scope.description,
                isEdit : false,
              };

              scope.select = function() {
                var index = $.inArray(scope.id, scope.paramTags);
                
                if (scope.vm.tag) {
                  if (index == -1) {
                    scope.paramTags.push(scope.id)
                  }
                } else {
                  if (index != -1) {
                    scope.paramTags.splice(index, 1);
                  }
                }

                if (scope.paramTags.length == scope.albumArray.length) {
                  scope.tagAll = true;
                } else {
                  scope.tagAll = false;
                }
              }

              scope.selectas = function() {
                scope.vm.tag = !scope.vm.tag;
                scope.select();
              }

              scope.edit = function() {
                scope.vm.isEdit = true;
                scope.vm.des = scope.description;
              }

              scope.cancel = function() {
                scope.vm.isEdit = false;
              }

              scope.modify = function() {
                httpService.postSimple('album/modifyPhotoInfo', {
                  userId : window.sessionStorage.getItem('id'),
                  photoId : scope.id,
                  description : scope.vm.des
                })
                .success(function(data) {
                  if (data.statusCode == 200) {
                    notificationService.info('修改照片信息成功')
                  } else {
                    notificationService.info('修改照片信息失败')
                  }
                  scope.vm.isEdit = false;
                  scope.refresh()
                })
                .error(function() {
                  scope.refresh()
                })
              }

              var s = {
                  overlay: true,
                  // overlayColor: '#2e9dbd',
                  overlayOpacity: 0.7,
                  zoom: 50,
                  speed: 300
              };

              return elem.each(function() {
              
                  var hz = elem; //a
                  var image = $('img', hz); //img

                  image.load(function() {
                      if(s.overlay === true) {
                          $(this).parent().append('<div class="zoomOverlay" />');
                          $(this).parent().find('.zoomOverlay').css({
                              opacity: 0, 
                              display: 'block', 
                              backgroundColor: s.overlayColor
                          }); 
                      }
                  
                      $(this).fadeIn(1000, function() {
                          $(this).parent().css('background-image', 'none');

                          var width = image.width();
                          var height = image.height();

                          hz.hover(function() {
                              $('img', this).stop().animate({
                                  height: height + s.zoom,
                                  width : width + s.zoom,
                                  marginLeft: -(s.zoom/2),
                                  marginTop: -(s.zoom/2),
                              }, s.speed);
                              if(s.overlay === true) {
                                  $(this).find('.zoomOverlay').stop().animate({
                                      opacity: s.overlayOpacity
                                  }, s.speed);
                              }
                          }, function() {
                              $('img', this).stop().animate({
                                  height: height,
                                  width : width,
                                  marginLeft: 0,
                                  marginTop: 0,
                              }, s.speed);
                              if(s.overlay === true) {
                                  $(this).find('.zoomOverlay').stop().animate({
                                      opacity: 0
                                  }, s.speed);
                              }
                          });   
                      });
                  }); 
              });
            }
        };
    }]);
})