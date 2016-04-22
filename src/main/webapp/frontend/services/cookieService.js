define(['app'], function(app) {
	app.factory("cookieService", function() {
        return {
            getCookie : function(name) 
            { 
                var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            
                if (arr = document.cookie.match(reg)) {
                    return unescape(arr[2]);
                } else {
                    return null;
                }
            },
            delCookie : function(name) {
                var exp = new Date();
                exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
                document.cookie = name + "=;expires=" + exp.toGMTString() + ";path=/";
            }
        }
    });
});