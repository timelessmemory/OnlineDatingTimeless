define(['app'], function(app) {
	app.controller('controller2', ['$scope', 'service2', function($scope, service2) {
		$scope.pageB = service2.getData();
	}])
})