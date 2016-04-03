define(['app'], function(app) {
	app.controller('controller1', ['$scope', 'service1', function($scope, service1) {
		$scope.pageA = service1.getData();
	}])
})