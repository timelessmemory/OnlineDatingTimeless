var NUMBER_FORMAT = /^\d{1,3}$/;
define(['app'], function(app) {
	app.directive('weightFormat', function() {
        return {
            restrict : 'A',
            require : '?ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (!viewValue || (NUMBER_FORMAT.test(viewValue) && viewValue > 50 && viewValue < 500)) {
                        ctrl.$setValidity('weight', true);
                    } else {
                        ctrl.$setValidity('weight', false);
                    }
                    return viewValue;
                });
            }
        }
    });
})