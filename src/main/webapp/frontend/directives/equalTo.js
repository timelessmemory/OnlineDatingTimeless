define(['app'], function(app) {
    app.directive("equalTo", function() {
        return {
            require: '?ngModel',
            restrict: 'A',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (!viewValue || viewValue === $('#' + attrs.equalTo).val()) {
                        ctrl.$setValidity('equal', true);
                    } else {
                        ctrl.$setValidity('equal', false);
                    }
                    return viewValue;
                });
            }
        };
    });
})