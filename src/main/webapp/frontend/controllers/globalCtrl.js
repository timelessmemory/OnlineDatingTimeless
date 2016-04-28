define(['app'], function(app) {
	app.controller('globalCtrl', ['$scope', '$state', '$timeout', '$rootScope', 'notificationService', function($scope, $state, $timeout, $rootScope, notificationService) {
		
		$rootScope.msg = notificationService;

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			// console.log('from ==' + fromState.name)
			// console.log('toState ==' + toState.name)
			if (fromState.name != '' && toState.name == 'homePage') {
				window.sessionStorage.removeItem('currentPage')
			}

			if (fromState.name != '' && toState.name == 'albumPage') {
				window.sessionStorage.removeItem('currentPageAlbum')
			}

        	if (toState.name == 'loginPage' || toState.name == 'homePage' || toState.name == 'registerPage') return;

	        if (window.sessionStorage && window.sessionStorage.getItem('accessToken') == null) {
	        	event.preventDefault();
	        	notificationService.info('尚未登录，请登录!');
	        	$timeout(function() {
	            	$state.go("loginPage");
	        	}, 3000);
	        }
        });
	}])
})