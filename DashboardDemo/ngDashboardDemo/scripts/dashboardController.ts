namespace DashboardDemo {
    export class DashboardController {

        public storeCookie = "6152617337";
        public selectedStore;


        public stores = [
                { "storeNum": "6152617337", "label": "Motor City Motors" },
                { "storeNum": "6628426428", "label": "Carlock Toyota of Tupelo" }
            

        ]

        public currentYear = new Date().getFullYear().valueOf();
        public lastYear = this.currentYear - 1;

        //Cit Variables
        public citDays: number;
        public citRecaps;
        public citTotal;
        public citAvg = 0;
        public citCount = 0;
        public vAge = 10;
        public recapsSort = [];
        public topCitList = [];
        public topCitListCount = 0;
        public topCitListMoney = 0

        //Vehicle AR variables
        public vehArDays: number;
        public vehicleARs;
        public amountDue = 0;
        public numberDue = 0;
        public ARavg = 0;
        public ageAve = 0;

        //Accounting Variables
        public acctngDays: number;
        public acctgItems;
        public thisYrsAcctg = [];
        public lstYrsAcct = [];
        public thisYrsGross = 0;
        public lstYrsGross = 0;
        public thsYrsExpns = 0;
        public lstYrsExpns = 0;
        public thsYrsAdds = 0;
        public lstYrsAdds = 0;
        public thsYrsNet = 0;
        public lstYrsNet = 0;
        


        //New Model Variables
        public newModelDays: number;
        public newModels;
        public currntYrCars = [];
        public lstYrCars = [];
        public priorYrCars = [];
        public crrntYrCarsTtl;
        public priorYrCarsTtl;
        public lstYrCarsTtl;
        public totalNewModels;

        //Deal Recap Variables
        public dealDays: number;
        public deals;
        public todaysDeals = [];
        public yestDeals = [];
        public todayDealsTtl;
        public yestDealsTtl;

        //Inventory Variables
        public inventoryDays: number;
        public vehicleInventory;
        public newInventory = [];
        public usedInventory = [];
        public crrntYrNewInv = [];
        public crrntYrUsedInv = [];
        public lstYrNewInv = [];
        public lstYrUsedInv = [];
        public priorYrNewInv = [];
        public priorYrUsedInv = [];
        public priorYrNewCount;
        public priorYrUsedCount;
        public crrntYrNewCount;
        public crrntYrUsedCount;

        public lstYrNewCount;
        public lstYrUsedCount;

        public lstYrVlu = 0;
        public crrntYrVlu = 0;
        public ttlNewCarCount;
        public ttlUsedCarCount
        public ttlCarVlu = 0;
        public topTenOldstNew = [];
        public topTenOldstUsed = [];
        public agedLessThirtyOne = [];
        public agedThirtyOneSixty = [];
        public agedGreaterSixty = [];
        
    //PartsInv variables
        public partDays: number;
        public partsinv;
        public partsInvBySold;
        






//Chart Data

        public vehicleData = [];
        public vehicleLabels = ["New Inventory", "Used Inventory"];

        public acctgChartData = [];
        public acctgChartLabels = [];
        public acctgChartSeries

        public invData = [];
        public invLabels = ['0-3 Months', '4-6 Months', '7-9 Months', '10-12 Months', '13-24 Months', '25+ Months'];

        
        public displayPartsInv(inventory = []) {
            let zeroToThree = 0;
            let fourtoSix = 0;
            let sevenToNine = 0
            let tenToTwlve = 0;
            let thrteenToTwntyfr = 0;
            let twntyFiveGrtr = 0;
            let totalInvBalance = 0;
            this.invData = [];
            for (let i = 0; i < inventory.length; i++) {
                zeroToThree += inventory[i].mnrz0to3;
                fourtoSix += inventory[i].mnrz4to6;
                sevenToNine += inventory[i].mnrz7to9;
                tenToTwlve += inventory[i].mnrz10to12;
                thrteenToTwntyfr += inventory[i].mnrz12to24;
                twntyFiveGrtr == inventory[i].mnrz25plus;
            }
            this.invData.push(Math.round(zeroToThree*10)/10, Math.round(fourtoSix*10)/10, Math.round(sevenToNine*10)/10, Math.round(tenToTwlve*10)/10, Math.round(thrteenToTwntyfr*10)/10, Math.round(twntyFiveGrtr*10)/10);
        };



//Dashboard Modals
        //
        public chartConfig(ChartJsProvider) {
            ChartJsProvider.defaults.global.responsive = true;

        }

        public invDialog(inv = []) {
            this.$mdDialog.show({
                controller: InvModalController,
                controllerAs: 'invdialog',
                templateUrl: 'ngDashboardDemo/Views/topten.html',
                clickOutsideToClose: true,
                locals: {inv: inv}
            })
        }

        public closeDialog() {
            this.$mdDialog.hide();
        }
        public showCitModal() {
            this.$mdDialog.show({
                controller: CITModalController,
                controllerAs: 'citdialog',
                templateUrl: '/ngDashboardDemo/Views/citreport.html',
                clickOutsideToClose: true

            })

        }
        public showMonthDealModal() {
            this.$mdDialog.show({
                controller: MonthDealModalController,
                controllerAs: 'dialog',
                templateUrl: '/ngDashboardDemo/Views/DealRecapReport.html',
                clickOutsideToClose: true,
                locals: {}

            })

        }
        public showVehInvDialog(vehicleInventory = []) {
            this.$mdDialog.show({
                controller: VehicleInvDetailsController,
                controllerAs: 'dialog',
                templateUrl: '/ngDashboardDemo/Views/VehInvDetails.html',
                clickOutsideToClose: true,
                cancel: 'Close',
                locals: {
                    vehicleInventory: this.newInventory.concat(this.usedInventory)
                }
                
            })
            
        }
        public showAcctDialog(year: number) {
            this.$mdDialog.show({
                controller: AcctDetailsController,
                controllerAs: 'acctdialog',
                templateUrl: '/ngDashboardDemo/Views/AcctgDetails.html',
                clickOutsideToClose: true,                
                locals: { year: year }
                
            })
        }

        public showAcctCompDialog(year: number) {
            this.$mdDialog.show({
                controller: AcctCompsController,
                controllerAs: 'acctdialog',
                templateUrl: '/ngDashboardDemo/Views/AcctgComps.html',
                clickOutsideToClose: true,
                locals: { year: year }

            })
        }

        public showDayDeals(day:string, today = [], yest = []) {
            this.$mdDialog.show({
                controller: DayDealsController,
                controllerAs: 'daydialog',
                templateUrl: '/ngDashboardDemo/Views/daydeals.html',
                clickOutsideToClose: true,
                locals: { day: day, today: this.todaysDeals, yest: this.yestDeals },                
            })
            this.$mdDialog.alert().ariaLabel("Days Deals").title("Days Deals")           
        }
        public saveInCookies() {            
            this.$cookies.put(this.storeCookie, this.selectedStore.storeNum);
            var currentPageTemplate = this.$route.current.templateUrl.toString();
            this.$templateCache.remove(currentPageTemplate);
            debugger;
            this.$route.reload();
        }
        

        constructor(private dashboardService: DashboardDemo.DashboardService, private $location: ng.ILocationService, private $mdDialog: angular.material.IDialogService, private $cookies: ng.cookies.ICookiesService, private $route: ng.route.IRouteService, private $routeParams: ng.route.IRouteParamsService, private $templateCache: ng.ITemplateCacheService) {
            this.$cookies.put('useraccess', "6152617337");
            //Get cookie value of current user
            let storesString = this.$cookies.get('useraccess')
            let storesStringArray = storesString.split(",");
            this.$cookies.put('userStore', storesStringArray[0]);


            //this.$cookies.put('userStore', this.storeCookie);

            //Get the CIT values and populate the associated variables with their values
            this.citRecaps = dashboardService.listCits().$promise.then((results) => {
                let tempsum = 0;
                for (let i = 0; i < results.length; i++) {
                    this.recapsSort.push(results[i]);
                    this.citCount++;
                    tempsum += results[i].transactionAmount;
                }
                this.recapsSort.sort((a, b) => { return a.age - b.age })
                this.citAvg = tempsum / this.citCount;
                this.citTotal = tempsum;
                for (let i = 0; i < this.recapsSort.length; i++) {
                    if (this.recapsSort[i].age >= this.vAge) {
                        this.topCitList.push(this.recapsSort[i]);
                        this.topCitListMoney += this.recapsSort[i].transactionAmount;
                    }
                }
                this.topCitListCount = this.topCitList.length;
            })
            

            //Get the vehicle ARs and populate the variables with their values
            this.vehicleARs = dashboardService.listVAR().$promise.then((results) => {
                let tempsum = 0;
                let tempAge = 0;
                for (let i = 0; i < results.length; i++) {
                    this.numberDue++;
                    tempsum += results[i].transactionAmount;
                    tempAge += results[i].age;
                }
                this.ARavg = tempsum / this.numberDue;
                this.amountDue = tempsum;
                this.ageAve = Math.round(tempAge / this.numberDue);
            })

            //populate newModel variables
            this.newModels = dashboardService.listNewModels().$promise.then((results) => {
                let carArray = [];
                for (let i = 0; i < results.length; i++) {
                    if (results[i].yr == this.currentYear) {
                        this.currntYrCars.push(results[i])
                    }
                    else if (results[i].yr == this.lastYear) {
                        this.lstYrCars.push(results[i]);
                    }
                    else {
                        this.priorYrCars.push(results[i]);
                    }
                }
                this.crrntYrCarsTtl = this.currntYrCars.length;
                this.lstYrCarsTtl = this.lstYrCars.length;
                this.priorYrCarsTtl = (this.priorYrCars.length);
                this.totalNewModels = this.crrntYrCarsTtl + this.lstYrCarsTtl + this.priorYrCarsTtl;
            });
            //populate Deal Variables
            this.deals = this.dashboardService.listdeals().$promise.then((results) => {
                for (let i = 0; i < results.length; i++) {
                    //Javascript date time object kept returning yesterdays date for 'dealTime' variable, break result.dealDate into array and create new Date
                    let timeArray = results[i].dealDate.split("-");
                    let dyear = timeArray[0];
                    let dmonth = (Number(timeArray[1]) - 1);
                    let dayTime = timeArray[2].split('T');
                    let day = dayTime[0];

                    let dealTime = new Date(dyear, dmonth, day)
                    let today = new Date();
                    results[i].totalgross = (results[i].zback + results[i].zfront);
                    if (dealTime.getDate() == today.getDate()) {
                        this.todaysDeals.push(results[i]);
                    }
                    else if (dealTime.getDate() == (today.getDate() - 1)) {
                        this.yestDeals.push(results[i]);
                    }
                }
                this.todayDealsTtl = this.todaysDeals.length;
                this.yestDealsTtl = this.yestDeals.length;
            });
            
            //Populate Accounting Variables
             
            this.acctgItems = this.dashboardService.listAcctAll().$promise.then((results) => {
                for (let i = 0; i < results.length; i++) {
                    if (results[i].yr == this.currentYear) {
                        this.thisYrsAcctg.push(results[i]);
                        if (~results[i].incomE_STMT_CLASS.indexOf('EXPENSE')) {
                            this.thsYrsExpns -= results[i].zfixedexp;
                        }
                        else if (~results[i].incomE_STMT_FAMILY.indexOf('INCOME')) {
                            this.thsYrsAdds -= results[i].znetadds;
                        }
                        else {
                            this.thisYrsGross -= results[i].zgross;
                        }
                    }
                    else {
                        this.lstYrsAcct.push(results[i]);
                        if (~results[i].incomE_STMT_CLASS.indexOf('EXPENSE')) {
                            this.lstYrsExpns -= results[i].zfixedexp;
                        }
                        else if (~results[i].incomE_STMT_FAMILY.indexOf('INCOME')) {
                            this.lstYrsAdds -= results[i].znetadds;
                        }
                        else {
                            this.lstYrsGross -= results[i].zgross;
                        }
                    }
                }
                this.thsYrsNet = this.thisYrsGross + this.thsYrsExpns + this.thsYrsAdds;
                this.lstYrsNet = this.lstYrsGross + this.lstYrsExpns + this.lstYrsAdds;
            });
            //Populate Vehicle Inventory Variables

            this.vehicleInventory = this.dashboardService.listVehicles().$promise.then((results) => {
                for (let i = 0; i < results.length; i++) {
                    let carYear = parseInt(results[i].yr);
                    if (carYear == this.currentYear) {
                        if (results[i].zznewused == "NEW") {
                            this.crrntYrNewInv.push(results[i]);
                            this.newInventory.push(results[i]);
                        }
                        else {
                            this.crrntYrUsedInv.push(results[i]);
                            this.usedInventory.push(results[i]);
                            if (results[i].zdaysold <= 30) {
                                this.agedLessThirtyOne.push(results[i]);
                            }
                            else if (results[i].zdaysold > 60) {
                                this.agedGreaterSixty.push(results[i]);
                            }
                            else {
                                this.agedThirtyOneSixty.push(results[i]);
                            }
                        }
                    }
                    else if (carYear == this.lastYear) {
                        if (results[i].zznewused == "NEW") {
                            this.lstYrNewInv.push(results[i]);
                            this.newInventory.push(results[i]);
                        }
                        else {
                            this.lstYrUsedInv.push(results[i]);
                            this.usedInventory.push(results[i]);
                            if (results[i].zdaysold <= 30) {
                                this.agedLessThirtyOne.push(results[i]);
                            }
                            else if (results[i].zdaysold > 60) {
                                this.agedGreaterSixty.push(results[i]);
                            }
                            else {
                                this.agedThirtyOneSixty.push(results[i]);
                            }
                        }
                    }
                    else {
                        if (results[i].zznewused == "NEW") {
                            this.priorYrNewInv.push(results[i]);
                            this.newInventory.push(results[i]);
                        }
                        else {
                            this.priorYrUsedInv.push(results[i]);
                            this.usedInventory.push(results[i]);
                            if (results[i].zdaysold <= 30) {
                                this.agedLessThirtyOne.push(results[i]);
                            }
                            else if (results[i].zdaysold > 60) {
                                this.agedGreaterSixty.push(results[i]);
                            }
                            else {
                                this.agedThirtyOneSixty.push(results[i]);
                            }
                        }
                    }
                }

                this.newInventory.sort(function (a, b) { return b.zdaysold - a.zdaysold });
                this.usedInventory.sort(function (a, b) { return b.zdaysold - a.zdaysold });
                this.agedLessThirtyOne.sort(function (a, b) { return b.zdaysold - a.zdaysold });
                this.agedGreaterSixty.sort(function (a, b) { return b.zdaysold - a.zdaysold });
                this.agedLessThirtyOne.sort(function (a, b) { return b.zdaysold - a.zdaysold });
                for (let i = 0; i < 10; i++) {
                    this.topTenOldstNew.push(this.newInventory[i]);
                }
                for (let i = 0; i < 10; i++) {
                    this.topTenOldstUsed.push(this.usedInventory[i]);
                }

                this.crrntYrNewCount = this.crrntYrNewInv.length;
                this.lstYrNewCount = this.lstYrNewInv.length;
                this.crrntYrUsedCount = this.crrntYrUsedInv.length;
                this.lstYrUsedCount = this.lstYrUsedInv.length;
                this.priorYrNewCount = this.priorYrNewInv.length
                this.priorYrUsedCount = this.priorYrUsedInv.length;
                this.ttlNewCarCount = this.crrntYrNewCount + this.lstYrNewCount + this.priorYrNewCount;
                this.ttlUsedCarCount = this.crrntYrUsedCount + this.lstYrUsedCount + this.priorYrUsedCount;
                this.vehicleData = [this.newInventory.length, this.usedInventory.length];
            });

            this.partsinv = this.dashboardService.listPartsInv();
            this.partsInvBySold = this.dashboardService.listPartsBySold();
        }
    }
    angular.module('DashboardDemo').controller('dashboardController', DashboardController);
    export class VehicleInvDetailsController {
        public closeDialog() {
            this.$mdDialog.hide();
        }
        constructor(private $mdDialog: angular.material.IDialogService, public vehicleInventory = []) {
         
        } 
    }

    angular.module('DashboardDemo').controller('VehicleInvDetailsController', VehicleInvDetailsController)


    export class AcctDetailsController {
        public thisYrsAcctg = [];
        public janAccts = [];
        public febAccts = [];
        public marAccts = [];
        public aprAccts = [];
        public mayAccts = [];
        public junAccts = [];
        public julAccts = [];
        public augAccts = [];
        public sepAccts = [];
        public octAccts = [];
        public novAccts = [];
        public decAccts = [];

        public months = [];
        public closeDialog() {
            this.$mdDialog.hide();
        }
        
              
        constructor(private $mdDialog: angular.material.IDialogService, public year: number, private dashboardService: DashboardDemo.DashboardService) {
            this.dashboardService.listAcctAll().$promise.then((results) => {

                for (let i = 0; i < results.length; i++) {
                    if (results[i].yr == this.year) {
                        if (results[i].mos == 1) {
                            this.janAccts.push(results[i])
                        }
                        else if (results[i].mos == 2) {
                            this.febAccts.push(results[i])
                        }
                        else if (results[i].mos == 3) {
                            this.marAccts.push(results[i])
                        }
                        else if (results[i].mos == 4) {
                            this.aprAccts.push(results[i])
                        }
                        else if (results[i].mos == 5) {
                            this.mayAccts.push(results[i])
                        }
                        else if (results[i].mos == 6) {
                            this.junAccts.push(results[i])
                        }
                        else if (results[i].mos == 7) {
                            this.julAccts.push(results[i])
                        }
                        else if (results[i].mos == 8) {
                            this.augAccts.push(results[i])
                        }
                        else if (results[i].mos == 9) {
                            this.sepAccts.push(results[i])
                        }
                        else if (results[i].mos == 10) {
                            this.octAccts.push(results[i])
                        }
                        else if (results[i].mos == 11) {
                            this.novAccts.push(results[i])
                        }
                        else if (results[i].mos == 12) {
                            this.decAccts.push(results[i])
                        }
                    }
                }
                class month {
                    public name;
                    public gross=0;
                    public adds=0;
                    public expenses = 0;
                    public net = 0;

                    constructor(public monthacct = [], name:string) {
                        this.name = name;
                        for (let i = 0; i < this.monthacct.length; i++) {
                            if (~this.monthacct[i].incomE_STMT_CLASS.indexOf('EXPENSE')) {
                                this.expenses -= monthacct[i].zfixedexp;
                            }
                            else if (~this.monthacct[i].incomE_STMT_FAMILY.indexOf('INCOME')) {
                                this.adds -= this.monthacct[i].znetadds;
                            }
                            else {
                                this.gross -= this.monthacct[i].zgross;
                            }
                        }
                            this.net= this.gross+this.adds+this.expenses
                    }
                }
                let january = new month(this.janAccts, "January");
                let febraury = new month(this.febAccts, "February");
                let march = new month(this.marAccts, "March");
                let april = new month(this.aprAccts, "April");
                let may = new month(this.mayAccts, "May");
                let june = new month(this.junAccts, "June");
                let july = new month(this.julAccts, "July");
                let august = new month(this.augAccts, "August");
                let sept = new month(this.sepAccts, "September");
                let octo = new month(this.octAccts, "October");
                let novem = new month(this.novAccts, "November");
                let decem = new month(this.decAccts, "December");

                
                this.months.push(january, febraury, march, april, may, june, july, august, sept, octo, novem, decem);
            });
        }
    }
    angular.module('DashboardDemo').controller('AcctDetailsController', AcctDetailsController)

    export class AcctCompsController {
        public thisYrsAcctg = [];
        public janAccts = [];
        public febAccts = [];
        public marAccts = [];
        public aprAccts = [];
        public mayAccts = [];
        public junAccts = [];
        public julAccts = [];
        public augAccts = [];
        public sepAccts = [];
        public octAccts = [];
        public novAccts = [];
        public decAccts = [];
        public lstJanAccts = [];
        public lstFebAccts = [];
        public lstMarAccts = [];
        public lstAprAccts = [];
        public lstMayAccts = [];
        public lstJunAccts = [];
        public lstJulAccts = [];
        public lstAugAccts = [];
        public lstSepAccts = [];
        public lstOctAccts = [];
        public lstNovAccts = [];
        public lstDecAccts = [];

        public calendar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        public months = [];
        public oldMonths = [];
        public labels = [];
        public series = ['2016', '2015'];

        public data = [];

        public closeDialog() {
            this.$mdDialog.hide();
        }


        constructor(private $mdDialog: angular.material.IDialogService, public year: number, private dashboardService: DashboardDemo.DashboardService) {
            this.dashboardService.listAcctAll().$promise.then((results) => {
                for (let i = 0; i < results.length; i++) {
                    if (results[i].yr == this.year) {
                        if (results[i].mos == 1) {
                            this.janAccts.push(results[i])
                        }
                        else if (results[i].mos == 2) {
                            this.febAccts.push(results[i])
                        }
                        else if (results[i].mos == 3) {
                            this.marAccts.push(results[i])
                        }
                        else if (results[i].mos == 4) {
                            this.aprAccts.push(results[i])
                        }
                        else if (results[i].mos == 5) {
                            this.mayAccts.push(results[i])
                        }
                        else if (results[i].mos == 6) {
                            this.junAccts.push(results[i])
                        }
                        else if (results[i].mos == 7) {
                            this.julAccts.push(results[i])
                        }
                        else if (results[i].mos == 8) {
                            this.augAccts.push(results[i])
                        }
                        else if (results[i].mos == 9) {
                            this.sepAccts.push(results[i])
                        }
                        else if (results[i].mos == 10) {
                            this.octAccts.push(results[i])
                        }
                        else if (results[i].mos == 11) {
                            this.novAccts.push(results[i])
                        }
                        else if (results[i].mos == 12) {
                            this.decAccts.push(results[i])
                        }
                    }
                    if (results[i].yr == (this.year - 1)) {
                        if (results[i].mos == 1) {
                            this.lstJanAccts.push(results[i])
                        }
                        else if (results[i].mos == 2) {
                            this.lstFebAccts.push(results[i])
                        }
                        else if (results[i].mos == 3) {
                            this.lstMarAccts.push(results[i])
                        }
                        else if (results[i].mos == 4) {
                            this.lstAprAccts.push(results[i])
                        }
                        else if (results[i].mos == 5) {
                            this.mayAccts.push(results[i])
                        }
                        else if (results[i].mos == 6) {
                            this.lstJunAccts.push(results[i])
                        }
                        else if (results[i].mos == 7) {
                            this.lstJulAccts.push(results[i])
                        }
                        else if (results[i].mos == 8) {
                            this.lstAugAccts.push(results[i])
                        }
                        else if (results[i].mos == 9) {
                            this.lstSepAccts.push(results[i])
                        }
                        else if (results[i].mos == 10) {
                            this.lstOctAccts.push(results[i])
                        }
                        else if (results[i].mos == 11) {
                            this.lstNovAccts.push(results[i])
                        }
                        else if (results[i].mos == 12) {
                            this.lstDecAccts.push(results[i])
                        }
                    }
                }
                class month {
                    public name;
                    public gross = 0;
                    public adds = 0;
                    public expenses = 0;
                    public net = 0;

                    constructor(public monthacct = [], name: string) {
                        this.name = name;
                        for (let i = 0; i < this.monthacct.length; i++) {
                            if (~this.monthacct[i].incomE_STMT_CLASS.indexOf('EXPENSE')) {
                                this.expenses -= monthacct[i].zfixedexp;
                            }
                            else if (~this.monthacct[i].incomE_STMT_FAMILY.indexOf('INCOME')) {
                                this.adds -= this.monthacct[i].znetadds;
                            }
                            else {
                                this.gross -= this.monthacct[i].zgross;
                            }
                        }
                        this.net = this.gross + this.adds + this.expenses
                    }
                }

                let january = new month(this.janAccts, "January");
                let febraury = new month(this.febAccts, "February");
                let march = new month(this.marAccts, "March");
                let april = new month(this.aprAccts, "April");
                let may = new month(this.mayAccts, "May");
                let june = new month(this.junAccts, "June");
                let july = new month(this.julAccts, "July");
                let august = new month(this.augAccts, "August");
                let sept = new month(this.sepAccts, "September");
                let octo = new month(this.octAccts, "October");
                let novem = new month(this.novAccts, "November");
                let decem = new month(this.decAccts, "December");




                this.months.push(january, febraury, march, april, may, june, july, august, sept, octo, novem, decem);

                january = new month(this.lstJanAccts, "January");
                febraury = new month(this.lstFebAccts, "February");
                march = new month(this.lstMarAccts, "March");
                april = new month(this.lstAprAccts, "April");
                may = new month(this.lstMayAccts, "May");
                june = new month(this.lstJunAccts, "June");
                july = new month(this.lstJulAccts, "July");
                august = new month(this.lstAugAccts, "August");
                sept = new month(this.lstSepAccts, "September");
                octo = new month(this.lstOctAccts, "October");
                novem = new month(this.lstNovAccts, "November");
                decem = new month(this.lstDecAccts, "December");
                this.oldMonths.push(january, febraury, march, april, may, june, july, august, sept, octo, novem, decem);


                let tempA = [];
                let tempB = [];
                for (let i = 0; i < this.months.length; i++) {
                    tempA.push(this.months[i].net);
                    tempB.push(this.oldMonths[i].net);
                    this.labels.push(this.months[i].name);
                }
                this.data.push(tempA);
                this.data.push(tempB);

                debugger;
            });
        }
    }
    angular.module('DashboardDemo').controller('AcctCompsController', AcctCompsController)

    export class DayDealsController {
        public deals = [];

        public closeDialog() {
            this.$mdDialog.hide();
        }
        public cancelDialog() {
            this.$mdDialog.cancel();
        }
        public answerDialog(answer) {
            this.$mdDialog.hide(answer);
        }
        constructor(private $mdDialog: angular.material.IDialogService, public day:string, public today = [], public yest = [] ) {
            let temp = [];
            if (this.day == 'today') {
                
                this.deals = temp.concat(this.today);
            }
            else if (this.day = 'yest'){
                this.deals = temp.concat(this.yest);
            }
        }
    }
    angular.module('DashboardDemo').controller('DayDealsController', DayDealsController)
    export class CITModalController {
        public closeDialog() {
            this.$mdDialog.hide();
        }
        constructor( private $mdDialog: angular.material.IDialogService) { }
    }
    angular.module('DashboardDemo').controller('CITModalController', CITModalController)


    export class MonthDealModalController {
        public closeDialog() {
            this.$mdDialog.hide();
        }
        constructor(private $mdDialog: angular.material.IDialogService) { }
    }
    angular.module('DashboardDemo').controller('MonthDealModalController', MonthDealModalController)

    export class InvModalController {
        public closeDialog() {
            this.$mdDialog.hide();
        }
        constructor(private $mdDialog: angular.material.IDialogService, public inv = []) {
            
        }
    }
}