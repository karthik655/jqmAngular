define(
    ['../../app',
    'text!app/Controllers/todo-detail.html',
    ] , function (mainApp, todoTmpl) {
        mainApp.controller('ContactCtrl' , ['$scope', '$compile', 'RouteResolver', '$controller', function ($scope, $compile, RouteResolver, $controller) {
            var BaseViewCtrl = $controller("BaseViewCtrl", {$scope: $scope});
            var ContactCtrl = {
                $el: BaseViewCtrl.getBaseElement(),
                initialize: function() {
                    var footerTemplateHTML = angular.element("<jqm-custom-footer title='Custom Header' customStyle='true' button='true'></jqm-custom-footer>");
                    var headerTemplateHTML = angular.element("<jqm-custom-header></jqm-custom-header>");
                    $(window).on("footerButtonSelected", this.selectTodo);
                    this.$el.find("div[data-role=header]").append($compile(headerTemplateHTML)($scope));
                    this.$el.find("div[data-role=content]").append($compile(todoTmpl)($scope));
                    this.$el.find("div[data-role=footer]").append($compile(footerTemplateHTML)($scope));
                    $scope.footer = 'scope test from contact us controller!!!';
                    try {
                        $scope.$apply();
                    } catch(e) {
                        console.log(e);
                    }
                },
                selectTodo: function() {
                    alert("from contact us controller!!")
                    BaseViewCtrl.render();
                    RouteResolver.navigate("home");
                },
                dispose: function() {
                    $(window).off("footerButtonSelected", this.selectTodo);
                }
            };
            return ContactCtrl;
        }]);
    });