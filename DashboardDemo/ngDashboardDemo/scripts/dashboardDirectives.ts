namespace DashboardDemo {
    function citRecap(): ng.IDirective {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/citrecap.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        }

    }
    angular.module('DashboardDemo').directive('citRecap', citRecap);


    function vehArRecap(): ng.IDirective {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/vehArRecap.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        }

    }
    angular.module('DashboardDemo').directive('vehArRecap', vehArRecap);

    function newModelsInv(): ng.IDirective {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/newModelsInv.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        }

    }
    angular.module('DashboardDemo').directive('newModelsInv', newModelsInv);

    function usedModelsInv(): ng.IDirective {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/usedModelsInv.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        }

    }
    angular.module('DashboardDemo').directive('usedModelsInv', usedModelsInv);



    function dealRecap(): ng.IDirective {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/dealRecap.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        }

    }
    angular.module('DashboardDemo').directive('dealRecap', dealRecap);


    function vehicleInv(): ng.IDirective {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/vehicleInv.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        }

    }
    angular.module('DashboardDemo').directive('vehicleInv', vehicleInv);


    function acctTrend(): ng.IDirective {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/acctngTrend.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        }

    }
    angular.module('DashboardDemo').directive('acctTrend', acctTrend);

    function partsInv(): ng.IDirective {
        return {
            templateUrl: 'ngDashboardDemo/Views/Directives/partsinv.html',
            restrict: 'AE',
            replace: true,
            controller: DashboardDemo.DashboardController,
            controllerAs: 'dc',
            link: function (scope, elem, attrs) {
            }
        }

    }
    angular.module('DashboardDemo').directive('partsInv', partsInv);

}

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