define(['../../app', 'text!app/Directives/templates/customHeaderTmpl.html'] , function (mainApp, customHeaderTemplate) {
    mainApp.directive('jqmCustomHeader', ['$compile', '$http', '$templateCache', function ($compile, $http, $templateCache) {
        var getTemplate = function() {
            var templateLoader,
            baseUrl = 'public/js/app/Directives/templates/',
            templateMap = {
                text: 'customHeaderTmpl.html'
            };

            var templateUrl = baseUrl + templateMap['text'];
            templateLoader = $http.get(templateUrl, {
                cache: $templateCache
            });

            return templateLoader;

        }
        var linker = function(scope, element, attrs) {

            var loader = getTemplate();

            var promise = loader.success(function(html) {
                element.html(html);
                $("div").trigger("create");
            }).then(function (response) {
                element.replaceWith($compile(element.html())(scope));
                $("div").trigger("create");
            });
        }

        return {
            restrict: 'E',
            scope: {
                post:'='
            },
            link: linker
        }; 
    }]);
});