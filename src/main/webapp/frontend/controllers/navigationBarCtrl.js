define(['app'], function(app) {
	app.controller('navigationBarCtrl', ['$rootScope', '$state', '$scope', 'cookieService', function($rootScope, $state, $scope, cookieService) {
      
      if (window.sessionStorage) {
        $rootScope.isLogin = window.sessionStorage.getItem('isLogin');
      } else {
        alert("浏览暂不支持sessionStorage");
      }

      $scope.goLogin = function()　{
        $state.go('loginPage');
      };

      $scope.goRegister = function()　{
        $state.go('registerPage');
      };

      $scope.goLogout = function() {
        $rootScope.modalTitle = '注销';
        $rootScope.modalBody = '确定登出吗';
        $rootScope.confirm = function()　{
          cookieService.delCookie('accessToken');
          window.sessionStorage.clear();
          $('#modal').modal('hide');
          $state.go('loginPage');
        }
        $('#modal').modal('show');
      }

      $scope.goHomePage = function() {
        $state.go('homePage');
      }

       //navigationbar
      $("#menubar li a").wrapInner('<span class="out"></span>');
          
      $("#menubar li a").each(function() {
          $('<span class="over">' +  $(this).children().html() + '</span>').appendTo($(this));
      });

      $("#menubar li a").hover(function() {
          // move down - hide
          $(".out", this).stop().animate({'top' : '48px'}, 300);

          // move down - show
          $(".over", this).stop().animate({'top' : '0px'}, 300); 
      }, function() {
          // move up - show
          $(".out", this).stop().animate({'top' : '0px'}, 300); 

          // move up - hide
          $(".over", this).stop().animate({'top' : '-48px'}, 300); 
      });
	}])
})