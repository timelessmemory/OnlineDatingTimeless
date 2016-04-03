define(['app'], function(app) {
	app.directive('b', function() {
		return {
			restrict : 'E',
			replace : true,
			template : '<label>directive2</label>'
		}
	});
})