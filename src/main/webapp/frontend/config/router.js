define(['app'], function(app) {
	app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
        .state('homePage', {
            url: '/homePage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/homePage.html',
                    controller : 'homePageCtrl'
                },
                'navigationBarView' : {
                    templateUrl: 'frontend/partials/navigationBar.html',
                    controller : 'navigationBarCtrl'
                }
            }
        })
        .state('profilePage', {
            url: '/profilePage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/profilePage.html',
                    controller : 'profilePageCtrl'
                },
                'navigationBarView' : {
                    templateUrl: 'frontend/partials/navigationBar.html',
                    controller : 'navigationBarCtrl'
                }
            }
        })
        .state('profilePage.showMemberProfile', {
            url: '/showProfile/{id}',
            templateUrl: 'frontend/partials/profileShowFragment.html',
        })
        .state('profilePage.showProfile', {
            url: '/showProfile',
            templateUrl: 'frontend/partials/profileShowFragment.html',
        })
        .state('profilePage.modifyProfile', {
            url: '/modifyProfile',
            templateUrl: 'frontend/partials/profileModifyFragment.html',
        })

        .state('profilePage.modifyProfile.selfState', {
            url: '/selfState',
            templateUrl: 'frontend/partials/form-selfState.html',
        })
        .state('profilePage.modifyProfile.detailProfile', {
            url: '/detailProfile',
            templateUrl: 'frontend/partials/form-detailProfile.html',
        })
        .state('profilePage.modifyProfile.wantHalf', {
            url: '/wantHalf',
            templateUrl: 'frontend/partials/form-wantHalf.html',
        })
        .state('albumPage', {
            url: '/albumPage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/albumPage.html',
                    controller : 'albumPageCtrl'
                },
                'navigationBarView' : {
                    templateUrl: 'frontend/partials/navigationBar.html',
                    controller : 'navigationBarCtrl'
                }
            }
        })
        .state('settingPage', {
            url: '/settingPage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/settingPage.html',
                    controller : 'settingPageCtrl'
                },
                'navigationBarView' : {
                    templateUrl: 'frontend/partials/navigationBar.html',
                    controller : 'navigationBarCtrl'
                }
            }
        })
        .state('loginPage', {
            url: '/loginPage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/loginPage.html',
                    controller : 'loginPageCtrl'
                },
                'navigationBarView' : {
                    templateUrl: 'frontend/partials/navigationBar.html',
                    controller : 'navigationBarCtrl'
                }
            }
        }).state('registerPage', {
            url: '/registerPage',
            views : {
                'indexView' : {
                    templateUrl: 'frontend/partials/registerPage.html',
                    controller : 'registerPageCtrl'
                },
                'navigationBarView' : {
                    templateUrl: 'frontend/partials/navigationBar.html',
                    controller : 'navigationBarCtrl'
                }
            }
        });

        $urlRouterProvider.otherwise('/homePage');

        $httpProvider.interceptors.push('interceptor');
    }]);
})