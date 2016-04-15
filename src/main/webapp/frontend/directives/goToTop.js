define(['app'], function(app) {
    app.directive("goToTop", function() {
      return {
        restrict: 'E',
        replace: true,
        scope:{
          minHeight : '@'
        },
        templateUrl : 'frontend/tmpls/goToTop.html',
        link: function(scope, elem, attrs) {
          elem.click(function() {
            jQuery('html,body').animate({scrollTop:0}, 700);
          })
          .hover(function() {
            jQuery(this).addClass("hover");
          }, function() {
            jQuery(this).removeClass("hover");
          });

          scope.minHeight = scope.minHeight ? scope.minHeight : 600;
          jQuery(window).scroll(function() {
              var s = jQuery(window).scrollTop();
              if( s > scope.minHeight) {
                  jQuery("#gotoTop").fadeIn(100);
              } else {
                  jQuery("#gotoTop").fadeOut(200);
              };
          });
        }
      };
    });
})