define(['app'], function(app) {
    app.directive("custSwitch", function() {
        return {
            restrict : 'A',
            scope: {
              model: '=ngModel',
              switchFunction: '&',
              isDisabled : '@'
            },
            templateUrl: 'frontend/tmpls/custSwitch.html',
            link : function(scope, elem, attrs) {
              scope.click = function() {
                scope.model = !scope.model;
                scope.switchFunction({newValue:scope.model});
              };
            }
        };
    });
})