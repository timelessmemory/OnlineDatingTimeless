define(['app', 'config'], function(app, config) {
	  app.factory("uploadService", ['$upload', '$q', '$http', function($upload, $q, $http) {
          var rand = function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
          };

          var guid = function() {
            return rand() + rand() + rand() + rand() + rand() + rand();
          };

          var upFiles = function(outerDeferred, files, uploadDomain, domain, token) {
              var tmp, _fn, _i;
              var promises = [];

              _fn = function(file) {
                  var deferred = $q.defer();
                  var fileName = guid() + file.name.slice(file.name.lastIndexOf('.'));
                  $upload.upload({
                    url: uploadDomain,
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    },
                    data: {
                      key: fileName,
                      token: token
                    },
                    method: "POST",
                    file: file
                  })
                  .progress(function(evt) {
                    deferred.notify(parseInt(100.0 * evt.loaded / evt.total));
                  })
                  .success(function(data, status, headers, config) {
                    deferred.resolve(domain + '/' + fileName);
                  })
                  .error(function() {
                    deferred.reject("Fail to upload " + fileName + " to qiniu.");
                  });
                  return promises.push(deferred.promise);
              };

              for (_i = 0; _i < files.length; _i++) {
                tmp = files[_i];
                _fn(tmp);
              }

              return $q.all(promises).then(
                function(urls) {
                  return outerDeferred.resolve(urls);
                },
                function(rejects) {
                  return outerDeferred.reject(rejects);
                },
                function(notifiation) {
                  return outerDeferred.notify(notifiation);
                }
              );
          };

          var upload = {};

          upload.qiniuUpload = function(files) {
            var deferred = $q.defer();

            if (!files) {
              return deferred.promise;
            }

            if (!files.length) {
              return deferred.promise;
            }

            if (!angular.isArray(files)) {
              files = [files];
            }

            //http://developer.qiniu.com/docs/v6/sdk/java-sdk.html
            //参考api实现后台返回token
            console.log(config.uploadUrl)
            $http({
              url : config.uploadUrl,
              method : 'GET',
              params : {
                'accessToken' : window.sessionStorage ? window.sessionStorage.getItem('accessToken') : '',
              },
            })
            .success(function(data) {
              var token = data.token;
              var domain = data.domain;
              var uploadDomain = data.uploadDomain;
              if (token && domain && uploadDomain) {
                upFiles(deferred, files, uploadDomain, domain, token);
              }
            });
            return deferred.promise;
          };
          return upload;
    }]);
});