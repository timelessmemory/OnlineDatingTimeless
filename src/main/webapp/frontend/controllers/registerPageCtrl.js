define(['app'], function(app) {
	app.controller('registerPageCtrl', ['$scope', 'dateService', function($scope, dateService) {
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

		$scope.submitForm = function() {
			if (!$scope.registerForm.$invalid && !$scope.isShowError) {
            	console.log($scope.user)
			}
        };
	}])
})