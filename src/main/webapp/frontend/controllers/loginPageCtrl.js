define(['app', 'md5'], function(app, md5) {
	app.controller('loginPageCtrl', ['$scope', '$timeout', '$state', 'httpService', 'notificationService', 'cookieService', function($scope, $timeout, $state, httpService, notificationService, cookieService) {

		$scope.user = {
			mobile : '',
			password : '',
		}

		var timer;
		$scope.refresh = function() {
			$("#svc").get(0).src = 'validateCode/get?bust=' + (new Date()).getTime()
			$scope.verifyCode = '';
		}

		$scope.isShowError = false;
		$scope.$watch('verifyCode', function(newValue) {
			validateCodeCheck(newValue);
		})

		function validateCodeCheck(input) {
			if (input) {
				if (input.toLowerCase() !== cookieService.getCookie('vcode').toLowerCase()) {
					$scope.isShowError = true;
				} else {
					$scope.isShowError = false;
				}
			} else {
				$scope.isShowError = false;
			}
		}

		$scope.submitForm = function() {
			$scope.user.password = md5($scope.user.password);
			httpService.postSimple('user/login', $scope.user)
			.success(function(data) {
				if (data.statusCode == 200) {

					if (window.sessionStorage) {
						window.sessionStorage.setItem('accessToken', data.explanation);
						window.sessionStorage.setItem('isLogin', true);
			        } else {
			        	alert("浏览暂不支持sessionStorage");
			        }

			        window.sessionStorage.setItem('id', data.extraMessage);
					
					notificationService.success('登录成功, 即将进入主页..');
					$timeout(function() {
						$state.go('profilePage.showProfile');
					}, 3000);
				} else {
					notificationService.info("用户名或者密码不正确")
					$scope.refresh();
				}
			})
			.error(function() {
			})
		}
	}])
})