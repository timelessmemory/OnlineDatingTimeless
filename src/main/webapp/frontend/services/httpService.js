define(['app'], function(app) {
	app.factory('httpService', ['$http', function($http) {
      return {
        post : function(url, data) {
          return $http({
            method : 'POST',
            url : url,
            data : data,
            params : {
              'accessToken' : window.sessionStorage ? window.sessionStorage.getItem('accessToken') : '',
            }
          })
        },
        delete : function(url) {
          return $http({
            method : 'POST',
            url : url,
            params : {
              '_method' : 'DELETE'
            }
          })
        },
        put : function(url, data) {
          return $http({
            method : 'POST',
            url : url,
            params : {
              '_method' : 'PUT',
              'accessToken' : window.sessionStorage ? window.sessionStorage.getItem('accessToken') : '',
            },
            data : data,
          })
        },
        get : function(url) {
          return $http({
            method : 'GET',
            url : url,
          })
        },
        getWithParam : function(url, data) {
          if (data) {
            data.accessToken = window.sessionStorage ? window.sessionStorage.getItem('accessToken') : '';
          }
          return $http({
            method : 'GET',
            url : url,
            params : data
          })
        },
        postSimple : function(url, data) {
          return $http({
            method : 'POST',
            url : url,
            data : data,
            params : {
              'accessToken' : window.sessionStorage ? window.sessionStorage.getItem('accessToken') : '',
            },
            headers : {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            transformRequest : function(data) {
              return $.param(data);
            }
          })
        },
        deleteSimple : function(url, ids) {
          return $http({
            method : 'POST',
            url : url,
            params : {
              '_method' : 'DELETE'
            },
            data : ids,
            headers : {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            transformRequest : function(data) {
              return $.param(data);
            }
          })
        }
      }
    }])
});
