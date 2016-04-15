define(['app'], function(app) {
	app.controller('globalCtrl', ['$scope', '$rootScope', 'notificationService', function($scope, $rootScope, notificationService) {
		$rootScope.msg = notificationService;

		if (window.sessionStorage) {
			
		} else {
			alert("浏览暂不支持sessionStorage");
			return;
		}
	}])
})