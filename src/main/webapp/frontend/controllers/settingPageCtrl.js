define(['app'], function(app) {
	app.controller('settingPageCtrl', ['$scope', function($scope) {
		$scope.status = true;
        $scope.send = function(newValue) {
          console.log("send: " + newValue)
        }

        $scope.crumbPrivate = [
          {"href": "javascript:void(0);", "title" : "设置"},
          {"href": "", "title" : "隐私设置"}
        ];

        $scope.crumbPassword = [
          {"href": "javascript:void(0);", "title" : "设置"},
          {"href": "", "title" : "修改密码"}
        ];
	}])
})