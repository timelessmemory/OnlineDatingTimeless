define(['app'], function(app) {
	app.factory('service2', function() {
		return {
			getData : function() {
				return 'service2';
			}
		}
	})
});