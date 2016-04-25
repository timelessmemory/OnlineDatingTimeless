define(['app'], function(app) {
	app.factory('interceptor', ['$rootScope', '$timeout', '$location', 'cookieService', 'notificationService', function($rootScope, $timeout, $location, cookieService, notificationService) {
		return {
            request : function (config) {
               $rootScope.loading = true;
               return config;
            },
            response : function (response) {
               // console.log(response.config.url)

               // 过滤frontend目录下的静态资源，只有请求api时重置token
               if (response.config.url.indexOf('frontend') == -1 && response.config.url.indexOf('.html') == -1) {
                  var accessToken = cookieService.getCookie('accessToken');
                  if (accessToken && window.sessionStorage) {
                     window.sessionStorage.setItem('accessToken', accessToken);
                  }

                  // console.log(response.config.url)

                  if (response && response.data.statusCode && (response.data.statusCode == 100 || response.data.statusCode == 120) ) {
                      window.sessionStorage.clear();
                      cookieService.delCookie('accessToken');
                      notificationService.info("登陆超时, 请重新登录");
                      $timeout(function() {
                          $location.url('/loginPage');
                      }, 3000)
                  }

                  if (response && response.data.statusCode && (response.data.statusCode == 500)) {
                      notificationService.warning("发生未知错误，code[500]");
                  }
               }
               
               $rootScope.loading = false;
               return response;
            }
         };
	}]);
});