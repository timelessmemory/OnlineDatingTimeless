define(['app'], function(app) {
	app.directive('modal', function() {
        return {
            resrtrict: 'AE',
            scope: {
                modalTitle: '@',
                modalBody: '@',
                confirm:'&',
            },
            templateUrl: 'frontend/tmpls/modal.html',
        }
    });
})