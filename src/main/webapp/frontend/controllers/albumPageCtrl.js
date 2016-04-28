define(['app'], function(app) {
	app.controller('albumPageCtrl', ['$scope', '$rootScope', '$http', 'httpService', 'notificationService', function($scope, $rootScope, $http, httpService, notificationService) {
        $scope.formData = {
          pageSize : 8,
          userId : window.sessionStorage.getItem('id')
        }

        $scope.maxSize = 4;

        var curpage = window.sessionStorage.getItem("currentPageAlbum");

        $scope.s = {
          bigCurrentPage : curpage ? curpage : 1
        }

        var getData = function() {

          httpService.postSimple('album/getPhotosCount', {
            userId : window.sessionStorage.getItem('id')
          })
          .success(function(data) {
              if (data.statusCode == 200) {

                  $scope.bigTotalItems = parseInt(data.explanation);

                  $scope.formData.currentPage = $scope.s.bigCurrentPage
                  httpService.post('album/getPhotos', $scope.formData)
                  .success(function(data) {
                      // console.log(data)
                      if (data.statusCode == undefined) {
                        $scope.albumArray = data
                      }
                  })
                  .error(function() {
                    notificationService.danger('发生未知错误')
                    $scope.albumArray = []
                  })
              }
          })
          .error(function() {
              notificationService.danger('发生未知错误')
              $scope.albumArray = []
          })
        }

        $scope.$watch('s.bigCurrentPage', function(newValue) {
           //prevent http delay and reset currentPage
           $scope.bigTotalItems = 1000000;
           getData();
           window.sessionStorage.setItem("currentPageAlbum", newValue);
        })

        $scope.tag = {
          all : false
        }

        $scope.paramTags = []

        $scope.setting = {
          isManageMode : false,
          isFinish : 'false'
        }

        $scope.refresh = function() {
          getData()
        }

        $scope.changeMode = function() {
          $scope.setting.isManageMode = true;
        }

        $scope.finishManage = function() {
          if ($scope.albumArray.length > 0) {
            for (var i in $scope.albumArray) {
              $scope.albumArray[i].vm.tag = false;
              $scope.albumArray[i].vm.isEdit = false;
            }
          }
          $scope.paramTags = [];
          $scope.tag.all = false;
          $scope.setting.isManageMode = false;
        }

        $scope.selectAll = function() {
          var items = [];
          if ($scope.tag.all) {
            angular.forEach($scope.albumArray, function(item) {
              items.push(item.photoId);
              item.vm.tag = true;
            });
            $scope.paramTags = items
          } else {
            angular.forEach($scope.albumArray, function(item) {
              item.vm.tag = false;
            })
            $scope.paramTags = [];
          }
        }

        $scope.selectAs = function() {
          $scope.tag.all = !$scope.tag.all;
          $scope.selectAll();
        }

        $scope.deleteAll = function() {
          $rootScope.modalTitle = '删除';
          $rootScope.modalBody = '确定删除所选图片吗';
          $rootScope.confirm = function()　{
            var data = []
            for (var i = 0; i < $scope.paramTags.length; i++) {
              for (var j = 0; j < $scope.albumArray.length; j++) {
                if ($scope.paramTags[i] == $scope.albumArray[j].photoId) {
                  var tmp = {
                    photoId : $scope.albumArray[j].photoId,
                    url : $scope.albumArray[j].url,
                    description : $scope.albumArray[j].description
                  }
                  data.push(tmp)
                }
              }
            }
            
            $http({
              method : 'POST',
              url : 'album/deletPhotos',
              data : data,
              params : {
                'accessToken' : window.sessionStorage ? window.sessionStorage.getItem('accessToken') : '',
                'userId' : window.sessionStorage.getItem('id')
              }
            })
            .success(function(data) {
              if (data.statusCode == 200) {
                notificationService.info('删除成功')
                getData();
              } else {
                notificationService.info('删除失败')
              }
            })
            .error(function() {
            })

            $('#modal').modal('hide');
          }
          $('#modal').modal('show');
        }

        $scope.vm = {
          albums : []
        }

        $scope.cancelUpload = function() {
          $scope.vm.albums = [];
          $scope.setting.isFinish = "false";
        }

        $scope.confirmUpload = function() {
          $scope.setting.isFinish = "false";
          //send http
          $http({
            method : 'POST',
            url : 'album/multiUpload',
            data : $scope.vm.albums,
            params : {
              'accessToken' : window.sessionStorage ? window.sessionStorage.getItem('accessToken') : '',
              'userId' : window.sessionStorage.getItem('id')
            }
          })
          .success(function(data) {
            if (data.statusCode == 200) {
              notificationService.info('上传成功')
              getData();
            }
            $scope.vm.albums = [];
          })
          .error(function() {
            $scope.vm.albums = [];
          })
        }

        // $scope.albumArray = [
        //   {
        //     id : 1,
        //     url : 'frontend/images/2.jpg',
        //     description : 'cartoon'
        //   },
        //   {
        //     id : 2,
        //     url : 'frontend/images/photo.jpg',
        //     description : 'cartoon'
        //   },
        //   {
        //     id : 3,
        //     url : 'frontend/images/2.jpg',
        //     description : 'cartoon'
        //   },
        //   {
        //     id : 4,
        //     url : 'frontend/images/2.jpg',
        //     description : 'cartoon'
        //   },
        //   {
        //     id : 5,
        //     url : 'frontend/images/2.jpg',
        //     description : 'cartoon'
        //   },
        //   {
        //     id : 6,
        //     url : 'frontend/images/2.jpg',
        //     description : 'cartoon'
        //   }
        // ]
	}])
})