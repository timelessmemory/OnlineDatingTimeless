define(['app'], function(app) {
	app.directive('msgBox', function() {
        return {
            restrict : 'EA',
            scope : {
                content: '@',
                type: '@',
            },
            templateUrl : 'frontend/tmpls/msgBox.html',
            link : function(scope, elem, attrs) {
                scope.close = function() {
                    scope.content = '';
                };
            }
        };
    });
})