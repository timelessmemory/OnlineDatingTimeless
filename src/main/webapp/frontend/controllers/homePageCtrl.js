define(['app'], function(app) {
	app.controller('homePageCtrl', ['$scope', '$http', function($scope, $http) {
		  $scope.formData = {
            'birthFrom' : '',
            'birthTo' : '',
            'country' : '',
            'province' : '',
            'city' : '',
            'gender' : 'woman',
            'fromStature' : '',
            'toStature' : '',
            'education' : '',
            'salaryRange' : ''
          }

          $scope.myInterval = 5000;
          $scope.slides = [
            {
              image : 'frontend/images/1.jpg',
              text : '幸福就是和你手牵手，一起度过未来的每一天',
              active : true
            },
            {
              image : 'frontend/images/2.jpg',
              text : '我只想要保护我最珍惜的人',
            },
            {
              image : 'frontend/images/3.jpg',
              text : '我喜欢你，我比地球上任何一个人都喜欢你'
            },
            {
              image : 'frontend/images/4.jpg',
              text : '我不知什么是爱，只是当你牵起我的手的时候，我的世界，开始温暖'
            },
            {
              image : 'frontend/images/5.jpg',
              text : '我能想到的最幸福的事就是与你一起变老'
            },
            {
              image : 'frontend/images/6.jpg',
              text : '这世上，除了你我别无所求。'
            }
          ];

          $scope.select = function() {
            console.log('select')
          };

          $scope.submitForm = function() {
            console.log($scope.formData)
          }

          $http.get("frontend/config/location.json").success(function(data) {
            $scope.countryList = data.country;
          });

          $scope.cp = {
            country : '',
            province : ''
          }

          $scope.changeCountry = function() {
            $scope.formData.province = '';
            $scope.formData.city = '';
          }

          $scope.changeProvince = function () {
            $scope.formData.city = '';
          }

          $scope.changeCity = function() {
            $scope.formData.country = $scope.cp.country.name;
            $scope.formData.province = $scope.cp.province.name;
          }

          $scope.fbs = [];
          $scope.tbs = [];
          for (var i = 18; i <= 80; i++) {
            $scope.fbs.push(i);
            $scope.tbs.push(i);
          }

          $scope.$watch('formData.birthFrom', function(newValue) {
            if (newValue) {
              $scope.tbs = [];
              for (var i = newValue; i <= 80; i++) {
                $scope.tbs.push(i);
              }
              if (newValue > $scope.formData.birthTo) {
                $scope.formData.birthTo = '';
              }
            }
          })

          $scope.fs = [];
          $scope.ts = [];
          for (var i = 150; i <= 200; i++) {
            $scope.fs.push(i);
            $scope.ts.push(i);
          }

          $scope.$watch('formData.fromStature', function(newValue) {
            if (newValue) {
              $scope.ts = [];
              for (var i = newValue; i <= 200; i++) {
                $scope.ts.push(i);
              }
              if (newValue > $scope.formData.toStature) {
                $scope.formData.toStature = '';
              }
            }
          })

          $scope.isVIP = false;

          $scope.members = [
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '博士及以上',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            },
            {
              profile : {
                photo : 'frontend/images/photo.jpg',
                nickname : 'timeless',
                age : 20,
                province : '江苏',
                city : '常州',
                education : '本科',
                salary : 6500
              }
            }
          ];

          $scope.maxSize = 4;
          $scope.bigTotalItems = 175;
          $scope.bigCurrentPage = 1;
          $scope.$watch('bigCurrentPage', function(newValue) {
            console.log(newValue)
          })

          $(document).bind('keyup', function(e) {
            if (e.keyCode === 13 && $scope.search.nickname) {
              $scope.search();
            }
          });

          $scope.search = {
            nickname : ''
          }

          $scope.search = function() {
            console.log($scope.search.nickname)
          }
	}])
})