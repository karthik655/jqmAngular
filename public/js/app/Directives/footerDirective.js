define(['../../app', 'text!app/Directives/templates/customFooterTmpl.html'] , function (mainApp, customFooterTemplate) {
    mainApp.directive('jqmCustomFooter', ['$compile', '$rootScope', function ($compile) {
        var linker = function(scope, element, attrs) {
            console.log(attrs);
            scope.selectTodo = function() {
                $(window).trigger("footerButtonSelected");
            }
            $("div[data-role=footer]").trigger("create");
        }
        return {
            restrict: 'E',
            scope: {
                post:'='
            },
            replace: true,
            template: customFooterTemplate,
            link: linker
        }; 
    }]);
});
