define(['app'], function(app) {
	app.factory("dateService", function() {
        return {
            isFullDate : function(obj) {
                var flag = true;
                for(var i in obj) {
                    if (obj[i] == '' || obj[i] == null) {
                      flag = false;
                      break;
                    }
                }
                if (obj == '') {
                   flag = false;
                }
                return flag;
            }
        }
    });
});