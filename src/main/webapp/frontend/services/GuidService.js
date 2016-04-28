define(['app'], function(app) {
	app.factory("GuidService", function() {
        return {
            rand : function() {
	          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	        },
	        guid : function() {
	          return this.rand() + this.rand() + this.rand() + this.rand() + this.rand() + this.rand();
	        }
        }
    });
});