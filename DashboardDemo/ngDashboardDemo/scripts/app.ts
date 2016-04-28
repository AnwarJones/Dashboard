namespace DashboardDemo {
    angular.module('DashboardDemo', ['ngRoute', 'ngResource', 'ui.bootstrap','ngAnimate', 'ngAria', 'ngMaterial', 'chart.js', 'ngCookies']).config(
        ($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/', {
                    templateUrl: 'ngDashboardDemo/Views/main.html',
                    controller: DashboardController
                })
                .otherwise('/');
        }

);



    
}