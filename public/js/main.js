// Require JS  Config File

require.config({
    enforceDefine: false,

    waitSeconds: 1000,
    paths : {
        'jquery':           'lib/jquery/jquery-1.8.3.min',
        'jqueryMobile':     'lib/jquery/jquery.mobile-1.2.1',
        'angular' : 'lib/angular/angular',
        'angularAdapter' : 'lib/angular/angular-resource',
        'underscore': 'lib/utils/underscore-min',
        'text' : 'lib/text'
    },
    shim : {
        angular  :{
            deps:['jquery'],
            exports:'angular'
        },
        jqueryMobile: {
            exports: "jquery.mobile",
            deps: ['jquery']
        },
        angularAdapter :{
            exports: "angularAdapter",
            deps: ['jquery.mobile', 'angular']
        },
        'underscore': {
            exports: '_'
        }
    },
    baseUrl: 'public/js/'
});


require(
[
    'jquery',
    'angular',
    'underscore',
    'app',
    'app/router/appRouter',
    'app/Controllers/BaseViewCtrl',
    "app/Directives/footerDirective",
    "app/Directives/headerDirective",
], function($, angular,_, mainApp, AppRouter, BaseViewCtrl, HeaderDirective, FooterDirective) {
    $(function () { // using jQuery because it will run this even if DOM load already happened
        $(document).on("pagebeforeshow", function() {
            console.log("show");
        });
        $(document).on("pagebeforehide", function() {
            console.log("hide");
        });
        var $injector = angular.bootstrap(document , ['app']);
        var RouteResolver = $injector.get("RouteResolver");
        RouteResolver.initialize();
    });
});
