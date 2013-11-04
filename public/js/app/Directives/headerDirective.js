define(['../../app', 'text!app/Directives/templates/customHeaderTmpl.html'] , function (mainApp, customHeaderTemplate) {
    mainApp.directive('jqmCustomHeader', ['$compile', function ($compile) {
        var linker = function(scope, element, attrs) {
            $("div[data-role=header]").trigger("create");
        }

        return {
            restrict: 'E',
            scope: {
                post:'='
            },
            replace: true,
            template: customHeaderTemplate,
            link: linker
        }; 
    }]);
});