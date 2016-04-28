var DashboardDemo;
(function (DashboardDemo) {
    function citRecap() {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/citrecap.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        };
    }
    angular.module('DashboardDemo').directive('citRecap', citRecap);
    function vehArRecap() {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/vehArRecap.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        };
    }
    angular.module('DashboardDemo').directive('vehArRecap', vehArRecap);
    function newModelsInv() {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/newModelsInv.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        };
    }
    angular.module('DashboardDemo').directive('newModelsInv', newModelsInv);
    function usedModelsInv() {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/usedModelsInv.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        };
    }
    angular.module('DashboardDemo').directive('usedModelsInv', usedModelsInv);
    function dealRecap() {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/dealRecap.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        };
    }
    angular.module('DashboardDemo').directive('dealRecap', dealRecap);
    function vehicleInv() {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/vehicleInv.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        };
    }
    angular.module('DashboardDemo').directive('vehicleInv', vehicleInv);
    function acctTrend() {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/acctngTrend.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        };
    }
    angular.module('DashboardDemo').directive('acctTrend', acctTrend);
    function partsInv() {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/partsinv.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        };
    }
    angular.module('DashboardDemo').directive('partsInv', partsInv);
})(DashboardDemo || (DashboardDemo = {}));
//export class citRecap implements ng.IDirective {
//    public restrict: string;
//    public require: string;
//    public templateUrl: string
//    public replace: boolean
//    //public createDirective() {
//    //    return {
//    //        restrict: 'E',
//    //        templateUrl: '~/ngDashboardDemo/Views/Directives/citrecap.html'
//    //    }
//    //}
//    constructor() {
//        this.restrict = 'AECM';
//        this.require = 'ngModel';
//        this.templateUrl = '~/ngDashboardDemo/Views/Directives/citrecap.html';
//        this.replace = true;
//    }
//    public link($scope: ng.IScope, element: JQuery, attributes: ng.IAttributes) {
//    }
//    static instance(): ng.IDirective {
//        return new citRecap;
//    }
//} 
//# sourceMappingURL=dashboardDirectives.js.map