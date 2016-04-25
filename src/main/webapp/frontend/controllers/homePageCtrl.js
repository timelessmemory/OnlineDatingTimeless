define(['app'], function(app) {
	app.controller('homePageCtrl', ['$scope', '$http', '$state', 'httpService', 'notificationService', function($scope, $http, $state, httpService, notificationService) {
		      $scope.formData = {
            'birthFrom' : '',
            'birthTo' : '',
            'country' : '',
            'province' : '',
            'city' : '',
            'gender' : '男',
            'fromStature' : '',
            'toStature' : '',
            'education' : '',
            'salaryRange' : '',
            'pageSize' : 18,
            'id' : window.sessionStorage.getItem('id') ? window.sessionStorage.getItem('id') : ''
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

          $scope.submitForm = function() {
            $scope.bigCurrentPage = 1;
            getUserList(1);
          }

          $http.get("frontend/config/location.json").success(function(data) {
            $scope.countryList = data.country;
          });

          $scope.cp = {
            country : '',
            province : ''
          }

          $scope.changeCountry = function() {
            $scope.formData.country = $scope.cp.country ? $scope.cp.country.name : '';
            $scope.formData.province = '';
            $scope.formData.city = '';
          }

          $scope.changeProvince = function () {
            $scope.formData.country = $scope.cp.country.name;
            $scope.formData.province = $scope.cp.province ? $scope.cp.province.name : '';
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

          for (var i = 120; i <= 200; i++) {
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

          if (window.sessionStorage.getItem('id')) {
              httpService.getWithParam('user/getVipProp', {
                  id : window.sessionStorage.getItem('id')
              })
              .success(function(data) {
                if (data.vip) {
                  $scope.isVIP = data.vip;
                } else {
                  $scope.isVIP = false;
                }
              })
              .error(function() {
                  $scope.isVIP = false;
              })
          } else {
              $scope.isVIP = false;
          }

          $scope.maxSize = 4;

          var curpage = window.sessionStorage.getItem("currentPage");
          $scope.bigCurrentPage = curpage ? curpage : 1;
          
          var getUserList = function(currentPage) {
              httpService.post('user/queryMemberCount', $scope.formData)
              .success(function(data) {
                  if (data.statusCode == 200) {
                      // console.log(data.explanation)
                      $scope.bigTotalItems = parseInt(data.explanation);

                      $scope.formData.currentPage = currentPage;

                      httpService.post('user/queryMember', $scope.formData)
                      .success(function(data) {
                          // console.log(data)
                          if (data.statusCode == undefined) {
                            $scope.members = []
                            for (var i = 0; i < data.length; i++) {
                              var item = {
                                'profile' : data[i]
                              };
                              $scope.members.push(item);
                            }
                          }
                      })
                      .error(function() {
                        notificationService.danger('发生未知错误')
                        $scope.members = []
                      })
                  }
              })
              .error(function() {
                  notificationService.danger('发生未知错误')
                  $scope.members = []
              })
          }

          $scope.$watch('bigCurrentPage', function(newValue) {
             //prevent http delay and reset currentPage
             $scope.bigTotalItems = 1000000;
             getUserList(newValue);
             window.sessionStorage.setItem("currentPage", newValue);
          })

          $(document).bind('keyup', function(e) {
            if (e.keyCode === 13 && $scope.search.nickname && $scope.isVIP) {
              $scope.search();
            }
          });

          $scope.search = {
            nickname : ''
          }

          $scope.goTo = function(id) {
            if ($scope.isVIP) {
              $state.go('profilePage.showMemberProfile', {id : id})
            } else {
              notificationService.info('您不是VIP，无法查看他人信息')
            }
          }

          $scope.search = function() {
            httpService.postSimple('user/querySomeone', {
              nickname : $scope.search.nickname
            })
            .success(function(data) {
                console.log(data)
                if (data.statusCode == undefined) {
                  $scope.search.nickname = '';
                  $scope.bigCurrentPage = 1;
                  $scope.bigTotalItems = 1;
                  $scope.members = [];
                  $scope.members.push({'profile' : data});
                }
            })
            .error(function() {
              notificationService.danger('发生未知错误')
              $scope.members = []
            })
          }
	}])
})