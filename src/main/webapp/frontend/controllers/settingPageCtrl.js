define(['app', 'md5'], function(app, md5) {
	app.controller('settingPageCtrl', ['$scope', 'httpService', 'notificationService', function($scope, httpService, notificationService) {
        $scope.user = {
          originPassord : '',
          newPassord : '',
        }

        $scope.ms = {
          mobile : '',
        }

        httpService.getWithParam('user/queryIsShow', {
          id : window.sessionStorage.id
        })
        .success(function(data) {
          if (data.statusCode == undefined) {
            $scope.status = data.show;
          }
        })
        .error(function() {
            
        })

        $scope.send = function(newValue) {
          httpService.postSimple('user/changeIsShowState', {
            isShow : newValue,
            id : window.sessionStorage.id
          })
          .success(function(data) {
            if (data.statusCode == 200) {
              notificationService.info('状态修改成功')
            } else {
              notificationService.info('状态修改失败')
            }
          })
          .error(function() {
            notificationService.warning('修改状态失败')
          })
        }

        $scope.submitPasswordForm = function() {
          httpService.postSimple('user/changePassword', {
            originPassord : md5($scope.user.originPassord),
            newPassord : md5($scope.user.newPassord),
            id : window.sessionStorage.id
          })
          .success(function(data) {
            if (data.statusCode == 200) {
              $scope.user.originPassord = ''
              $scope.user.newPassord = ''
              $scope.user.retypePassword = ''
              notificationService.info('密码修改成功')
            } else {
              notificationService.info('密码修改失败')
            }
          })
          .error(function() {
            notificationService.warning('修改状态失败')
          })
        }

        $scope.submitMobileForm = function() {

        }

        $scope.crumbPrivate = [
          {"href": "javascript:void(0);", "title" : "设置"},
          {"href": "", "title" : "隐私设置"}
        ];

        $scope.crumbPassword = [
          {"href": "javascript:void(0);", "title" : "设置"},
          {"href": "", "title" : "修改密码"}
        ];

         $scope.crumbMobile = [
          {"href": "javascript:void(0);", "title" : "设置"},
          {"href": "", "title" : "更改手机号"}
        ];
	}])
})