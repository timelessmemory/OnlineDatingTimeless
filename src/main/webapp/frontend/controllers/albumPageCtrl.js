define(['app'], function(app) {
	app.controller('albumPageCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.albumArray = [
          {
            id : 1,
            url : 'frontend/images/2.jpg',
            description : 'cartoon'
          },
          {
            id : 2,
            url : 'frontend/images/photo.jpg',
            description : 'cartoon'
          },
          {
            id : 3,
            url : 'frontend/images/2.jpg',
            description : 'cartoon'
          },
          {
            id : 4,
            url : 'frontend/images/2.jpg',
            description : 'cartoon'
          },
          {
            id : 5,
            url : 'frontend/images/2.jpg',
            description : 'cartoon'
          },
          {
            id : 6,
            url : 'frontend/images/2.jpg',
            description : 'cartoon'
          }
        ]

        $scope.tag = {
          all : false
        }

        $scope.paramTags = []

        $scope.setting = {
          isManageMode : false,
          isFinish : 'false'
        }

        $scope.changeMode = function() {
          $scope.setting.isManageMode = true;
        }

        $scope.finishManage = function() {
          console.log($scope.albumArray)
          if ($scope.albumArray.length > 0) {
            for (var i in $scope.albumArray) {
              $scope.albumArray[i].vm.tag = false;
              $scope.albumArray[i].vm.isEdit = false;
            }
          }
          
          $scope.setting.isManageMode = false;
        }

        $scope.selectAll = function() {
          var items = [];
          if ($scope.tag.all) {
            angular.forEach($scope.albumArray, function(item) {
              items.push(item.id);
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
            console.log($scope.paramTags)
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

          console.log($scope.vm.albums)
          $scope.vm.albums = [];
        }
	}])
})