define(['app'], function(app) {
    app.directive("custBreadcrumb", function() {
        return {
          restrict: 'E',
          replace: true,
          scope: {
            options:'@'
          },
          link: function(scope, elem, attrs) {
            var parentNode = elem.parent();
            var crumbString = '<ol class="breadcrumb">';

            angular.forEach(scope.$eval(scope.options), function(item) {
              if (item["href"] != "") {
                var tempString = '<li><a href="' + item["href"] + '">' + item["title"] + '</a></li>'; 
                crumbString += tempString;
              } else {
                var tempString = '<li class="active">' + item["title"] + '</li>'; 
                crumbString += tempString;
              }
            });

            crumbString += "</ol>";
            parentNode.append(crumbString);
          }
        };
    });
})