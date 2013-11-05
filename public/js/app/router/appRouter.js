define([
    'angular',
    '../../app',
    '../Controllers/HomeCtrl',
    '../Controllers/ContactusCtrl',
    ] , function (angular, mainApp, HomeCtrl, ContactCtrl) {
        mainApp.provider("RouteResolver", [function () {
            this.routes = {
                home: "HomeCtrl",
                contact: "ContactCtrl"
            },
            this.lastViewObj = false,
            this.stateLessRoutes = [],
            this.$get = function($controller) {
                this.controllerObj = $controller;
                this.scope = angular.element('body').scope();
                return this;
            },
            
            this.initialize = function(){
                $(document).off("pagebeforechange").on("pagebeforechange", _.bind(this.beforePageChangeHandler, this))
                this.navigate("home");
            },
            
            this.navigate= function(route, scope){
                if(!this.routes[route]) {
                    alert("No Route Definition Found!!");
                    return false;
                }
                if(this.fromPage) {
                    this.fromPage.dispose();
                }
                var toPage = this.controllerObj(this.routes[route], {
                    $scope: scope || this.scope
                });
                
                if(toPage.initialize)
                    toPage.initialize(this.scope);
                else
                    alert("Unable to initialize "+route+"Ctrl controller");
                
                $("body").prepend(this.fromPage ? this.fromPage.$el : $("div[data-role=page]"), toPage.$el);
                $.mobile.changePage(toPage.$el, {
                    changeHash : true,
                    customRoute: true
                });
                if(this.fromPage) {
                    this.fromPage.$el.remove();
                } else {
                    $("div[data-role=page]").first().remove();
                }
//                $("div[data-role=page]").css("display", "block");
                $("div[data-role=page]").trigger("create").trigger("resize");
                $("div[data-role=content]").css("padding-top", $("div[data-role=header]").height());
                $("div[data-role=content]").css("padding-bottom", $("div[data-role=footer]").height());
                this.fromPage = toPage;
            },
            
            this.beforePageChangeHandler = function(e, data) {
                if(data.options.customRoute) {
                    e.preventDefault();
                }
            }
        }]);
    });    