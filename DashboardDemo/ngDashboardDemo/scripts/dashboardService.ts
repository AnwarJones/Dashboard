namespace DashboardDemo {

    export class DashboardService {
        private citResource;
        public vehicleArResource;
        public warrantyARResource;
        public vehicleInvResource;
        public dealRecapResource;
        public acctgResource;
        public newModelsResource;
        public partsinventoryResource;
        public partsinventorySoldResource;


        //$Resource commands for Vehicle AR
        public listVAR() {
            return this.vehicleArResource.query();
        }

        public getV_AR(id) {
            return this.vehicleArResource.get({ id: id });
        }

        //$Resource commands for CIT

        public listCits() {
            return this.citResource.query();
        }

        public getCit(id) {
            return this.citResource.get({ id: id });
        }

        //$resource commands for accounting info
        public listAcctAll() {
            return this.acctgResource.query()
        }
        public getAcctrecord(id) {
            return this.acctgResource.get({ id: id });
        }

        //$resource commands for deal recaps
        public listdeals() {
            return this.dealRecapResource.query()
        }
        public getdeal(id) {
            return this.dealRecapResource.get({ id: id });
        }
        //$resource commands for newModels API
        public listNewModels() {
            return this.newModelsResource.query();
        }
        public getNewModel(id) {
            return this.newModelsResource.get({ id: id });
        }

        //$resource commands for vehicle inventory
        public listVehicles() {
            return this.vehicleInvResource.query();
        }
        public getVehicle(id) {
            return this.vehicleInvResource.get({ id: id })
        }

        //$resource commands for warranty AR
        public listWarrantyAR() {
            return this.warrantyARResource.query();
        }
        public getWarrantyAR(id) {
            return this.warrantyARResource.get({ id: id });
        }

        public listPartsInv(){
            return this.partsinventoryResource.query();
        }
        public getPart(id) {
            return this.partsinventoryResource.get({ id: id });
        }

        public listPartsBySold() {
            return this.partsinventorySoldResource.query();
        }
        public getPartBySold(id) {
            return this.partsinventorySoldResource.get({ id: id });
        }
       
        constructor($resource: ng.resource.IResourceService, private $http: ng.IHttpService) {
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
    

    }
    angular.module('DashboardDemo').service('dashboardService', DashboardService);
    
}