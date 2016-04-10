define(['app'], function(app) {
	app.controller('loginPageCtrl', ['$scope', function($scope) {

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
				console.log(input.toLowerCase())
				console.log(getCookie('vcode').toLowerCase())
				if (input.toLowerCase() !== getCookie('vcode').toLowerCase()) {
					$scope.isShowError = true;
				} else {
					$scope.isShowError = false;
				}
			} else {
				$scope.isShowError = false;
			}
		}

		$scope.submitForm = function() {
			console.log($scope.user)
		}

		function getCookie(name) 
		{ 
		    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		
		    if (arr = document.cookie.match(reg)) {
		        return unescape(arr[2]);
		    } else {
		        return null;
		    }
		}

	}])
})