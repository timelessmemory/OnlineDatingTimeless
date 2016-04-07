var PASSWORD_REGEXP = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,}$/;

define(['app'], function(app) {
    app.directive("passwordFormat", function() {
        return {
            require: '?ngModel',
            restrict: 'A',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (!viewValue || PASSWORD_REGEXP.test(viewValue)) {
                        ctrl.$setValidity('password', true);
                    } else {
                        ctrl.$setValidity('password', false);
                    }
                    return viewValue;
                });
            }
        };
    });
})