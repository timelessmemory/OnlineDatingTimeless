var NUMBER_FORMAT = /^\d{1,3}$/;
define(['app'], function(app) {
	app.directive('statureFormat', function() {
        return {
            restrict : 'A',
            require : '?ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (!viewValue || (NUMBER_FORMAT.test(viewValue) && viewValue > 120 && viewValue < 200)) {
                        ctrl.$setValidity('stature', true);
                    } else {
                        ctrl.$setValidity('stature', false);
                    }
                    return viewValue;
                });
            }
        }
    });
})