define(['app'], function(app) {
    app.directive("custDate", function() {
      return {
        restrict : 'A',
        replace : true,
        scope : {
          ngModel : '=',
          attributeName : '@'
        },
        templateUrl: 'frontend/tmpls/custDate.html',
        link: function(scope, elem, attrs) {
          var limitYear = new Date().getFullYear();
          scope.years = [];
          for (var y = limitYear - 100; y <= limitYear; y++) {
              scope.years.unshift(y);
          }

          scope.months = [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
          ];

          scope.days = [];

          function getDays(year, month) {
              if (!year || !month) {
                  return;
              }
              var dayCount = 0;
              if (month != 2) {  
                  switch (parseInt(month)) {  
                      case 1:  
                      case 3:  
                      case 5:  
                      case 7:  
                      case 8:  
                      case 10:  
                      case 12:
                          dayCount = 31;  
                          break;  
                      case 4:  
                      case 6:  
                      case 9:  
                      case 11:  
                          dayCount = 30;
                          break;
                      default : 
                          break;
                  }  
              } else {   
                  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)  
                      dayCount = 29;  
                  else  
                      dayCount = 28;
              }
              var arr = [];
              for (var i = 1; i <= dayCount; i++) {
                  arr.push(i);
              }
              scope.days = arr;
          }

          scope.changeYear = scope.changeMonth = function() {
            getDays(scope.ngModel.year, scope.ngModel.month);
          }

          getDays(scope.ngModel.year, scope.ngModel.month);
        }
      };
    });
})