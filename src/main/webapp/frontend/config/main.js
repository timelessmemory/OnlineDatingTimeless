require.config({
    baseUrl : 'frontend',
    paths : {
        //一些库文件
        'jquery': 'libs/jquery.min',
        'angular': 'libs/angular',
        'ui-router': 'libs/angular-ui-router',
        'angular-animate' : 'libs/angular-animate',
        'bootstrap-min' : 'libs/bootstrap.min',
        'ui-bootstrap-tpls' : 'libs/ui-bootstrap-tpls-0.14.3',
        'angular-file-upload' : 'libs/angular-file-upload.min',

        //自定义js文件
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
        'ui-router' : {
            deps : ['angular'],
            exports : 'angular'
        },
        'angular-animate' : {
            deps : ['angular'],
            exports : 'angular'
        },
        'bootstrap-min' : {
            deps : ['jquery'],
        },
        'ui-bootstrap-tpls' : {
            deps : ['angular'],
        },
        'angular-file-upload' : {
            deps : ['angular'],
        }
    },
    deps : ['bootstrap'],
    urlArgs : "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});