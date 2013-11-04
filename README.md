jqmAngular
==========

A sample/POC project, integrated jquery mobile with angular js.
Integration between jquery moble and angular js. I've tried the angular js and jquery mobile adapter but that is not
working in the way that i've expected.
As this is in POC stage we still need to work around on this project


Directory structure:
-------------------
:<br>
:--public-<br>
:---------|-css<br>
:---------|-js-<br>
:-------------|-app.js<br>
:-------------|-main.js<br>
:-------------|-app<br>
:-----------------|-Controllers<br>
:-----------------|-Directives<br>
:-----------------|-Router<br>
:-----------------|-Services<br>
:-----------------|-Views<br>
:-------------|-lib<br>
:-----------------|-angular<br>
:-----------------|-jquery<br>
:-----------------|-utils<br>
:-----------------|-require.js<br>
:-----------------|-text.js<br>
:--index.html<br>
:<br>

Used-libraries:
---------------

anglar.js
jqueryMobile
underscore.js
require.js


Getting-Started:
---------------

App.js contains the application initialization logic.
We are not using angular js routing mechanism and writted a custom routing module.
the following code explains, how Main.js initializes the router with a default route of the application

var RouteResolver = $injector.get("RouteResolver");
RouteResolver.initialize();

This code initializes the router and loads the application default route configured in router.
As a first step in AppRouter, configure the routes with controllers.


this.routes = {
    home: "HomeCtrl",
    contact: "ContactCtrl"
}

In the way when we try to navigate to "home route" then AppRouter loads the "HomeCtrl".


this.navigate= function(route, scope){
                ................................................................................
}

Page navigations will be handled in the Approuter's navigate method. So, call the navigate method to 
navigate to a specific module.
                
HTML Anchor tag navigations are also handled in the same but that is still in progress.

As the "AppRouter" initializes a controller by calling the initialize method in a controller, Every controller
must implement an initialize method.
