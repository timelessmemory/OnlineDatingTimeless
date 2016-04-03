require.config({
    baseUrl : 'frontend',
    paths : {
        //一些库文件
        'jquery': 'libs/jquery.min',
        'angular': 'libs/angular',
        'ui-router': 'libs/angular-ui-router',
        //js文件
        'bootstrap': "bootstrap",
        'app': "app",
        'router' : "config/router",
        'Controller' : 'controllers/Controller',
        'Directive' : 'directives/Directive',
        'Service' : 'services/Service'
    },
    shim : {
        'angular' : {
            exports : 'angular'
        },
        'ui-router': {
            deps : ['angular'],
            exports : 'angular'
        }
    },
    deps : ['bootstrap'],
    urlArgs : "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});