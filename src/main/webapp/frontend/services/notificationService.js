define(['app'], function(app) {
	app.factory("notificationService", ['$timeout', function($timeout) {
        return {
            content : '',
            type : '',
            success : function(content) {
                this.tmpl(content, 'success')
            },
            info : function(content) {
                this.tmpl(content, 'info')
            },
            warning : function(content) {
                this.tmpl(content, 'warning')
            },
            danger : function(content) {
                this.tmpl(content, 'danger')
            },
            tmpl : function(content, type) {
                this.content = content;
                this.type = type;
                var _self = this;
                $timeout(function() {
                    _self.clear();
                }, 3000);
            },
            clear : function() {
                this.content = '';
                this.type = '';
            }
        };
    }]);
});