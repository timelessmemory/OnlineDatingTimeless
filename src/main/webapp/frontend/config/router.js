define(['app'], function(app) {
	app.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('ab', {
            url: '/ab',
            views : {
                'a' : {
                    templateUrl: 'frontend/partials/a.html',
                    controller : 'controller1'
                },
                'b' : {
                    templateUrl: 'frontend/partials/b.html',
                    controller : 'controller2'
                }
            }
        });
    }]);
})