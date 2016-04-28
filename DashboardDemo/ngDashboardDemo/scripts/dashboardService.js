var DashboardDemo;
(function (DashboardDemo) {
    var DashboardService = (function () {
        function DashboardService($resource, $http) {
            this.$http = $http;
            this.citResource = $resource('/api/citrecaps/:id');
            this.vehicleArResource = $resource('/api/vehiclear/:id');
            this.acctgResource = $resource('/api/acctalls/:id');
            this.dealRecapResource = $resource('/api/dealrecaps/:id');
            this.newModelsResource = $resource('/api/newmodelsonhands/:id');
            this.vehicleInvResource = $resource('/api/vehicleinventory/:id');
            this.warrantyARResource = $resource('/api/warrantyar/:id');
            this.partsinventoryResource = $resource('/api/partsInv/:id');
            this.partsinventorySoldResource = $resource('/api/partsInvSold/:id');
        }
        //$Resource commands for Vehicle AR
        DashboardService.prototype.listVAR = function () {
            return this.vehicleArResource.query();
        };
        DashboardService.prototype.getV_AR = function (id) {
            return this.vehicleArResource.get({ id: id });
        };
        //$Resource commands for CIT
        DashboardService.prototype.listCits = function () {
            return this.citResource.query();
        };
        DashboardService.prototype.getCit = function (id) {
            return this.citResource.get({ id: id });
        };
        //$resource commands for accounting info
        DashboardService.prototype.listAcctAll = function () {
            return this.acctgResource.query();
        };
        DashboardService.prototype.getAcctrecord = function (id) {
            return this.acctgResource.get({ id: id });
        };
        //$resource commands for deal recaps
        DashboardService.prototype.listdeals = function () {
            return this.dealRecapResource.query();
        };
        DashboardService.prototype.getdeal = function (id) {
            return this.dealRecapResource.get({ id: id });
        };
        //$resource commands for newModels API
        DashboardService.prototype.listNewModels = function () {
            return this.newModelsResource.query();
        };
        DashboardService.prototype.getNewModel = function (id) {
            return this.newModelsResource.get({ id: id });
        };
        //$resource commands for vehicle inventory
        DashboardService.prototype.listVehicles = function () {
            return this.vehicleInvResource.query();
        };
        DashboardService.prototype.getVehicle = function (id) {
            return this.vehicleInvResource.get({ id: id });
        };
        //$resource commands for warranty AR
        DashboardService.prototype.listWarrantyAR = function () {
            return this.warrantyARResource.query();
        };
        DashboardService.prototype.getWarrantyAR = function (id) {
            return this.warrantyARResource.get({ id: id });
        };
        DashboardService.prototype.listPartsInv = function () {
            return this.partsinventoryResource.query();
        };
        DashboardService.prototype.getPart = function (id) {
            return this.partsinventoryResource.get({ id: id });
        };
        DashboardService.prototype.listPartsBySold = function () {
            return this.partsinventorySoldResource.query();
        };
        DashboardService.prototype.getPartBySold = function (id) {
            return this.partsinventorySoldResource.get({ id: id });
        };
        return DashboardService;
    })();
    DashboardDemo.DashboardService = DashboardService;
    angular.module('DashboardDemo').service('dashboardService', DashboardService);
})(DashboardDemo || (DashboardDemo = {}));
//# sourceMappingURL=dashboardService.js.map