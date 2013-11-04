define(
    ['../../app',
    'text!app/Controllers/todo-detail.html'
    ] , function (mainApp, todoTmpl) {
        mainApp.controller('BaseViewCtrl' , ['$rootScope', '$compile', '$controller', 'RouteResolver', function ($scope, $compile, $controller, RouteResolver) {
            
            var BaseViewCtrl = {
                $el: false,
                initialize: function() {
                    alert("fired initita from base view!!")
                },
                selectTodo: function() {
                    RouteResolver.navigate("test");
                },
                render: function() {
                    console.log("fired render from base view!!")
                },
                getBaseElement: function() {
                    var $el = $($("div[data-role=page]").clone()[0]);//$("<div data-role='page' id='customPageElement' class='ui-page-active'></div>");
//                    $("div[data-role=header]").empty();
//                    $("div[data-role=content]").empty();
//                    $("div[data-role=footer]").empty();
//                    $el.append($("div[data-role=header]").clone()[0]);
//                    $el.append($("div[data-role=content]").clone()[0]);
//                    $el.append($("div[data-role=footer]").clone()[0]);
                    $el.find("div[data-role=header]").empty();
                    $el.find("div[data-role=content]").empty();
                    $el.find("div[data-role=footer]").empty();
                    return $el;
                },
                dispose: function() {
                    $(window).off("footerButtonSelected", this.selectTodo);
                }
            };
            return BaseViewCtrl;
//            
//          var selectTodo = function() {
//                var templateHTML = angular.element(todoTmpl);
//                $controller("TestCtrl", {$scope: $scope});
//                var clonedTemplate = $compile(templateHTML)($scope, function(clonedElt, $scope) {
//                    $("div[data-role=content]").append(clonedElt);
//                    $("div[data-role=content]").trigger("create");
////                    $.mobile.changePage(clonedElt, {
////                        pageContainer: $("div[data-role=page]"), 
////                        transition: "slideup",
////                        reverse: false,
////                        changeHash : false,
////                        allowSamePageTransition : true
////                    });
//                });
//            }
//            
//            var test = function() {
//                alert("working fine");
//            }
        }]);
    });