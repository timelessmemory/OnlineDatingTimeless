define(['app'], function(app) {
	app.directive('a1', function() {
		return {
			restrict : 'E',
			replace : true,
			template : '<label>directive1</label>'
		}
	});
})