define(['app'], function(app) {
	app.factory('interceptor', ['$rootScope', function($rootScope) {
		return {
            request : function (config) {
               $rootScope.loading = true;
               return config;
            },
            response : function (response) {
               $rootScope.loading = false;
               return response;
            }
         };
	}]);
});