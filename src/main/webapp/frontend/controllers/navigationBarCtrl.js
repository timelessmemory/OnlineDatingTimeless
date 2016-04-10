define(['app'], function(app) {
	app.controller('navigationBarCtrl', ['$rootScope', '$state', '$scope', function($rootScope, $state, $scope) {
      $rootScope.isLogin = false;

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
          $('#modal').modal('hide');
        }
        $('#modal').modal('show');
      }

      $scope.goHomePage = function() {
        $state.go('homePage');
      }

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        // if(toState.name=='login')return;// 如果是进入登录界面则允许
        // // 如果用户不存在
        // if(!$rootScope.user || !$rootScope.user.token){
        //   event.preventDefault();// 取消默认跳转行为
        //   $state.go("login",{from:fromState.name,w:'notLogin'});//跳转到登录界面
        // }
      });

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