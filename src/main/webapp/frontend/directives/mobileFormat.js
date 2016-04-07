var MOBILE_REGEXP_MOBILE = /^1(3[0-9]|5[0-35-9]|8[025-9])\d{8}$/;
var MOBILE_REGEXP_UNICOM = /^1(34[0-8]|(3[5-9]|5[017-9]|8[278])\d)\d{7}$/;
var MOBILE_REGEXP_TELECOM = /^1(3[0-2]|5[256]|8[56])\d{8}$/;

define(['app'], function(app) {
    app.directive("mobileFormat", function() {
        return {
            require: '?ngModel',
            restrict: 'A',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (!viewValue || MOBILE_REGEXP_MOBILE.test(viewValue) 
                        || MOBILE_REGEXP_UNICOM.test(viewValue) 
                        || MOBILE_REGEXP_TELECOM.test(viewValue)) {
                        ctrl.$setValidity('mobile', true);
                    } else {
                        ctrl.$setValidity('mobile', false);
                    }
                    return viewValue;
                });
            }
        };
    });
})