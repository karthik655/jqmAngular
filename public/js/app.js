define(
    ["jquery",
    "jqueryMobile",
    "angular"
    ],

    function($, jqueryMobile, angular){
        var baseModule = angular.module('app' , [], function($locationProvider) {
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
        });        
        return baseModule;
    });