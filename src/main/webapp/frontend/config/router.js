define(['app'], function(app) {
	app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
        .state('homePage', {
            url: '/homePage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/homePage.html',
                    controller : 'homePageCtrl'
                }
            }
        })
        .state('profilePage', {
            url: '/profilePage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/profilePage.html',
                    controller : 'profilePageCtrl'
                }
            }
        })
        .state('albumPage', {
            url: '/albumPage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/albumPage.html',
                    controller : 'albumPageCtrl'
                }
            }
        })
        .state('settingPage', {
            url: '/settingPage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/settingPage.html',
                    controller : 'settingPageCtrl'
                }
            }
        })
        .state('loginPage', {
            url: '/loginPage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/loginPage.html',
                    controller : 'loginPageCtrl'
                }
            }
        }).state('registerPage', {
            url: '/registerPage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/registerPage.html',
                    controller : 'registerPageCtrl'
                }
            }
        });

        $urlRouterProvider.otherwise('/homePage');

        $httpProvider.interceptors.push('interceptor');
    }]);
})