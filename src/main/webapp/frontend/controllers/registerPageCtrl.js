define(['app', 'md5'], function(app, md5) {
	app.controller('registerPageCtrl', ['$scope', '$state', '$timeout', 'dateService', 'httpService', 'notificationService', function($scope, $state, $timeout, dateService, httpService, notificationService) {
		$scope.user = {
			gender : '男',
			birthday : {
	            year : new Date().getFullYear(),
	            month : 1,
	            day : 1
            },
			nickname : '',
			mobile : '',
			password : '',
			retypePassword : ''
		};

		$scope.isShowError = false;
        $scope.hasNickname = false;
        $scope.hasMobile = false;
        $scope.isAgree = true;

        var birthdayChange = function(newValue) {
            if (dateService.isFullDate($scope.user.birthday)) {
               $scope.isShowError = false;
            } else {
               $scope.isShowError = true;
            }
        }

        $scope.$watch('user.birthday.year', birthdayChange)
        $scope.$watch('user.birthday.month', birthdayChange)
        $scope.$watch('user.birthday.day', birthdayChange)

        $scope.checkNickname = function() {
            if ($scope.user.nickname) {
                httpService.getWithParam('user/checkNickname', {
                    nickname : $scope.user.nickname
                })
                .success(function(data) {
                    if (data.statusCode == 20) {
                        $scope.hasNickname = false;
                    } else {
                        $scope.hasNickname = true;
                    }
                })
                .error(function() {
                    $scope.hasNickname = true;
                    notificationService.warning("发生未知错误");
                })
            }
        }

        $scope.checkMobile = function() {
            if ($scope.user.mobile) {
                httpService.getWithParam('user/checkMobile', {
                    mobile : $scope.user.mobile
                })
                .success(function(data) {
                    if (data.statusCode == 60) {
                        $scope.hasMobile = false;
                    } else {
                        $scope.hasMobile = true;
                    }
                })
                .error(function() {
                    $scope.hasMobile = true;
                    notificationService.warning("发生未知错误");
                })
            }
        }

		$scope.submitForm = function() {
			if (!$scope.registerForm.$invalid && !$scope.isShowError && !$scope.hasNickname && !$scope.hasMobile) {
            	$scope.user.age = new Date().getFullYear() - $scope.user.birthday.year;
            	$scope.user.password = md5($scope.user.password);
            	httpService.post("user/register", $scope.user)
            	.success(function(data) {
                    if (data.statusCode == 200) {
                        notificationService.success("注册成功, 即将进入登录界面..");
                        $timeout(function() {
                            $state.go('loginPage');
                        }, 3000)
                    }
            	})
            	.error(function() {
            		notificationService.warning("注册失败, 请重试");
            	});
			}
        };
	}])
})