define(['app'], function(app) {
	app.factory('service1', function() {
		return {
			getData : function() {
				return 'service1';
			}
		}
	})
});