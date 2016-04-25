define(['app'], function(app) {
	app.controller('profilePageCtrl', ['$scope', '$http', '$state', '$stateParams', 'notificationService', 'httpService', function($scope, $http, $state, $stateParams, notificationService, httpService) {
	    
      if ($state.params.id) {

        //访客模式
        $scope.setting = {
          isVisit : true,
        }

        httpService.getWithParam('user/querySomeoneProfile', {
          id : $state.params.id
        })
        .success(function(data) {
          // console.log(data)

          if (data == '') {
            notificationService.info('不存在该用户');
            $state.go('homePage')
            return;
          }

          if (data.statusCode == undefined) {
            if (data.id != null) {
              $scope.profile = data
              $scope.tmpAvatar = $scope.profile.avatar
            } else {
              notificationService.info('该用户资料仅对自己可见')
              $state.go('homePage')
            }
          }
        })
        .error(function() {
          notificationService.warning('获取资料失败')
          $scope.profile = {};
        })

      } else {

        //自身访问
        $scope.setting = {
          isVisit : false,
          isFinish : 'false'
        }

        $scope.cp = {
          country : '',
          province : ''
        }

        $scope.cpw = {
          country : '',
          province : ''
        }

        $scope.fbs = [];
        $scope.tbs = [];

        for (var i = 18; i <= 80; i++) {
          $scope.fbs.push(i);
          $scope.tbs.push(i);
        }

        $scope.changeCountry = function() {
          $scope.profile.country = $scope.cp.country ? $scope.cp.country.name : '';
          $scope.profile.province = '';
          $scope.profile.city = '';
        }

        $scope.changeProvince = function () {
          $scope.profile.country = $scope.cp.country.name;
          $scope.profile.province = $scope.cp.province ? $scope.cp.province.name : '';
          $scope.profile.city = '';
        }

        $scope.changeCity = function() {
          $scope.profile.country = $scope.cp.country.name;
          $scope.profile.province = $scope.cp.province.name;
        }

        $scope.changeWantCountry = function() {
          $scope.profile.wantCountry = $scope.cpw.country ? $scope.cpw.country.name : '';
          $scope.profile.wantProvince = '';
          $scope.profile.wantCity = '';
        }

        $scope.changeWantProvince = function () {
          $scope.profile.wantCountry = $scope.cpw.country.name;
          $scope.profile.wantProvince = $scope.cpw.province ? $scope.cpw.province.name : '';
          $scope.profile.wantCity = '';
        }

        $scope.changeWantCity = function() {
          $scope.profile.wantCountry = $scope.cpw.country.name;
          $scope.profile.wantProvince = $scope.cpw.province.name;
        }

        httpService.getWithParam('user/getProfile', {
          id : window.sessionStorage.getItem('id')
        })
        .success(function(data) {
          if (data.statusCode == undefined) {
            $scope.profile = data;
            $scope.tmpAvatar = $scope.profile.avatar;
            prepareData();
          }
        })
        .error(function() {
          notificationService.warning('获取个人资料失败')
          $scope.profile = {};
        })

        //do this after get profile
        function prepareData() {
          $http.get("frontend/config/location.json").success(function(data) {
            $scope.countryList = data.country;
            var pros = [];
            var prosw = [];
            for (var i in $scope.countryList) {
              if ($scope.countryList[i].name == $scope.profile.country) {
                $scope.cp.country = $scope.countryList[i];
                pros = $scope.countryList[i].province;
                break;
              }
            }

            for (var i in $scope.countryList) {
              if ($scope.countryList[i].name == $scope.profile.wantCountry) {
                $scope.cpw.country = $scope.countryList[i];
                prosw = $scope.countryList[i].province;
                break;
              }
            }

            for (var j in pros) {
              if (pros[j].name == $scope.profile.province) {
                $scope.cp.province = pros[j];
                break;
              }
            }

            for (var j in prosw) {
              if (prosw[j]['name'] == $scope.profile.wantProvince) {
                $scope.cpw.province = prosw[j];
                break;
              }
            }
          });
        }

        $scope.cancel = function() {
            $state.go('profilePage.showProfile');
        }

        $scope.submitForm = function() {
          httpService.put('user/updateProfile', $scope.profile)
          .success(function(data) {
            if (data.statusCode == 200) {
              notificationService.success('更新成功');
            } else {
              notificationService.success('更新失败');
            }
            $state.go('profilePage.showProfile');
          })
          .error(function() {
            notificationService.success('更新失败');
          });
        }

        $scope.cancelUpload = function() {
          $scope.setting.isFinish = 'false';
          $('#photoModal').modal('hide')
        }

        $scope.confirmUpload = function() {
          //submit photo
          httpService.postSimple('user/updateAvatar', {
            avatar : $scope.profile.avatar,
            id : $scope.profile.id
          })
          .success(function(data) {
            if (data.statusCode == 200) {
              notificationService.success('上传成功');
              $scope.tmpAvatar = $scope.profile.avatar;
            } else {
              notificationService.success('上传失败，请稍候重试');
            }
          })
          .error(function() {
            notificationService.success('上传失败，请稍候重试');
          })

          $('#photoModal').modal('hide')
          $scope.setting.isFinish = 'false';
        }

      }

      // $scope.profile = {
      //  avatar : 'frontend/images/default.jpg',
      //   nickname : 'timeless',
      //   realName : 'lj',
      //   country : '中国',
      //   province : '江苏',
      //   city : '常州市',
      //   age : 20,
      //   salary : '6000',
      //   education : '本科',
      //   introduction : '每到一个地方，就爱带回些当地拾的花草碎石，天物所能传递的信息和能量，在我看来是对那里最深切的回味.生活就是用简单的方式来享受，是好好去拥有每一件而不是拥有更多，希望和他过专注宁静的生活，当我们和自然同在，我们会充满希望。',
      //   gender : '男',
      //   weight : '60',
      //   isNeedChild : '是',
      //   wantType : '落落大方',
      //   marriage : '未婚',
      //   stature : 172,
      //   job : '',
      //   house : '租房',
      //   isAcceptDf : '接受',
      //   isWillingTl : '愿意',
      //   wantCountry : '中国',
      //   wantProvince : '江苏',
      //   wantCity : '南通市',
      //   wantStature : 160,
      //   wantSalary : '4000',
      //   wantAgeFrom : 20,
      //   wantAgeTo : 25,
      //   wantEducation : '本科'
      // }

	}])
})