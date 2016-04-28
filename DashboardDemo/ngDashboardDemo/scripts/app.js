var DashboardDemo;
(function (DashboardDemo) {
    angular.module('DashboardDemo', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate', 'ngAria', 'ngMaterial', 'chart.js', 'ngCookies']).config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'ngDashboardDemo/Views/main.html',
            controller: DashboardDemo.DashboardController
        })
            .otherwise('/');
    });
})(DashboardDemo || (DashboardDemo = {}));
//# sourceMappingURL=app.js.map