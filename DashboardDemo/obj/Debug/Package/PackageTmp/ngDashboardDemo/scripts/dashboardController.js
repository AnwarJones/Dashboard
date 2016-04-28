var DashboardDemo;
(function (DashboardDemo) {
    var DashboardController = (function () {
        function DashboardController(dashboardService, $location, $mdDialog /*private $uibModal: angular.ui.bootstrap.IModalService*/) {
            var _this = this;
            this.dashboardService = dashboardService;
            this.$location = $location;
            this.$mdDialog = $mdDialog;
            this.currentYear = new Date().getFullYear().valueOf();
            this.lastYear = this.currentYear - 1;
            this.citAvg = 0;
            this.citCount = 0;
            this.vAge = 10;
            this.recapsSort = [];
            this.topCitList = [];
            this.topCitListCount = 0;
            this.topCitListMoney = 0;
            this.amountDue = 0;
            this.numberDue = 0;
            this.ARavg = 0;
            this.ageAve = 0;
            this.thisYrsAcctg = [];
            this.lstYrsAcct = [];
            this.thisYrsGross = 0;
            this.lstYrsGross = 0;
            this.thsYrsExpns = 0;
            this.lstYrsExpns = 0;
            this.thsYrsAdds = 0;
            this.lstYrsAdds = 0;
            this.thsYrsNet = 0;
            this.lstYrsNet = 0;
            this.currntYrCars = [];
            this.lstYrCars = [];
            this.priorYrCars = [];
            this.todaysDeals = [];
            this.yestDeals = [];
            this.newInventory = [];
            this.usedInventory = [];
            this.crrntYrNewInv = [];
            this.crrntYrUsedInv = [];
            this.lstYrNewInv = [];
            this.lstYrUsedInv = [];
            this.priorYrNewInv = [];
            this.priorYrUsedInv = [];
            this.lstYrVlu = 0;
            this.crrntYrVlu = 0;
            this.ttlCarVlu = 0;
            this.topTenOldstNew = [];
            this.topTenOldstUsed = [];
            this.agedLessThirtyOne = [];
            this.agedThirtyOneSixty = [];
            this.agedGreaterSixty = [];
            //Chart Data
            this.vehicleData = [];
            this.vehicleLabels = ["New Inventory", "Used Inventory"];
            this.acctgChartData = [];
            this.acctgChartLabels = [];
            //Get the CIT values and populate the associated variables with their values
            this.citRecaps = dashboardService.listCits().$promise.then(function (results) {
                var tempsum = 0;
                for (var i = 0; i < results.length; i++) {
                    _this.recapsSort.push(results[i]);
                    _this.citCount++;
                    tempsum += results[i].transactionAmount;
                }
                _this.recapsSort.sort(function (a, b) { return a.age - b.age; });
                _this.citAvg = tempsum / _this.citCount;
                _this.citTotal = tempsum;
                for (var i = 0; i < _this.recapsSort.length; i++) {
                    if (_this.recapsSort[i].age >= _this.vAge) {
                        _this.topCitList.push(_this.recapsSort[i]);
                        _this.topCitListMoney += _this.recapsSort[i].transactionAmount;
                    }
                }
                _this.topCitListCount = _this.topCitList.length;
            });
            //Get the vehicle ARs and populate the variables with their values
            this.vehicleARs = dashboardService.listVAR().$promise.then(function (results) {
                var tempsum = 0;
                var tempAge = 0;
                for (var i = 0; i < results.length; i++) {
                    _this.numberDue++;
                    tempsum += results[i].transactionAmount;
                    tempAge += results[i].age;
                }
                _this.ARavg = tempsum / _this.numberDue;
                _this.amountDue = tempsum;
                _this.ageAve = Math.round(tempAge / _this.numberDue);
            });
            //populate newModel variables
            this.newModels = dashboardService.listNewModels().$promise.then(function (results) {
                var carArray = [];
                for (var i = 0; i < results.length; i++) {
                    if (results[i].yr == _this.currentYear) {
                        _this.currntYrCars.push(results[i]);
                    }
                    else if (results[i].yr == _this.lastYear) {
                        _this.lstYrCars.push(results[i]);
                    }
                    else {
                        _this.priorYrCars.push(results[i]);
                    }
                }
                _this.crrntYrCarsTtl = _this.currntYrCars.length;
                _this.lstYrCarsTtl = _this.lstYrCars.length;
                _this.priorYrCarsTtl = (_this.priorYrCars.length);
                _this.totalNewModels = _this.crrntYrCarsTtl + _this.lstYrCarsTtl + _this.priorYrCarsTtl;
            });
            //populate Deal Variables
            this.deals = this.dashboardService.listdeals().$promise.then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    //Javascript date time object kept returning yesterdays date for 'dealTime' variable, break result.dealDate into array and create new Date
                    var timeArray = results[i].dealDate.split("-");
                    var dyear = timeArray[0];
                    var dmonth = (Number(timeArray[1]) - 1);
                    var dayTime = timeArray[2].split('T');
                    var day = dayTime[0];
                    var dealTime = new Date(dyear, dmonth, day);
                    var today = new Date();
                    results[i].totalgross = (results[i].zback + results[i].zfront);
                    if (dealTime.getDate() == today.getDate()) {
                        _this.todaysDeals.push(results[i]);
                    }
                    else if (dealTime.getDate() == (today.getDate() - 1)) {
                        _this.yestDeals.push(results[i]);
                    }
                }
                _this.todayDealsTtl = _this.todaysDeals.length;
                _this.yestDealsTtl = _this.yestDeals.length;
            });
            //Populate Accounting Variables
            this.acctgItems = this.dashboardService.listAcctAll().$promise.then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    if (results[i].yr == _this.currentYear) {
                        _this.thisYrsAcctg.push(results[i]);
                        if (~results[i].incomE_STMT_CLASS.indexOf('EXPENSE')) {
                            _this.thsYrsExpns -= results[i].zfixedexp;
                        }
                        else if (~results[i].incomE_STMT_FAMILY.indexOf('INCOME')) {
                            _this.thsYrsAdds -= results[i].znetadds;
                        }
                        else {
                            _this.thisYrsGross -= results[i].zgross;
                        }
                    }
                    else {
                        _this.lstYrsAcct.push(results[i]);
                        if (~results[i].incomE_STMT_CLASS.indexOf('EXPENSE')) {
                            _this.lstYrsExpns -= results[i].zfixedexp;
                        }
                        else if (~results[i].incomE_STMT_FAMILY.indexOf('INCOME')) {
                            _this.lstYrsAdds -= results[i].znetadds;
                        }
                        else {
                            _this.lstYrsGross -= results[i].zgross;
                        }
                    }
                }
                _this.thsYrsNet = _this.thisYrsGross + _this.thsYrsExpns + _this.thsYrsAdds;
                _this.lstYrsNet = _this.lstYrsGross + _this.lstYrsExpns + _this.lstYrsAdds;
            });
            //Populate Vehicle Inventory Variables
            this.vehicleInventory = this.dashboardService.listVehicles().$promise.then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    var carYear = parseInt(results[i].yr);
                    if (carYear == _this.currentYear) {
                        if (results[i].zznewused == "NEW") {
                            _this.crrntYrNewInv.push(results[i]);
                            _this.newInventory.push(results[i]);
                        }
                        else {
                            _this.crrntYrUsedInv.push(results[i]);
                            _this.usedInventory.push(results[i]);
                            if (results[i].zdaysold <= 30) {
                                _this.agedLessThirtyOne.push(results[i]);
                            }
                            else if (results[i].zdaysold > 60) {
                                _this.agedGreaterSixty.push(results[i]);
                            }
                            else {
                                _this.agedThirtyOneSixty.push(results[i]);
                            }
                        }
                    }
                    else if (carYear == _this.lastYear) {
                        if (results[i].zznewused == "NEW") {
                            _this.lstYrNewInv.push(results[i]);
                            _this.newInventory.push(results[i]);
                        }
                        else {
                            _this.lstYrUsedInv.push(results[i]);
                            _this.usedInventory.push(results[i]);
                            if (results[i].zdaysold <= 30) {
                                _this.agedLessThirtyOne.push(results[i]);
                            }
                            else if (results[i].zdaysold > 60) {
                                _this.agedGreaterSixty.push(results[i]);
                            }
                            else {
                                _this.agedThirtyOneSixty.push(results[i]);
                            }
                        }
                    }
                    else {
                        if (results[i].zznewused == "NEW") {
                            _this.priorYrNewInv.push(results[i]);
                            _this.newInventory.push(results[i]);
                        }
                        else {
                            _this.priorYrUsedInv.push(results[i]);
                            _this.usedInventory.push(results[i]);
                            if (results[i].zdaysold <= 30) {
                                _this.agedLessThirtyOne.push(results[i]);
                            }
                            else if (results[i].zdaysold > 60) {
                                _this.agedGreaterSixty.push(results[i]);
                            }
                            else {
                                _this.agedThirtyOneSixty.push(results[i]);
                            }
                        }
                    }
                }
                _this.newInventory.sort(function (a, b) { return b.zdaysold - a.zdaysold; });
                _this.usedInventory.sort(function (a, b) { return b.zdaysold - a.zdaysold; });
                _this.agedLessThirtyOne.sort(function (a, b) { return b.zdaysold - a.zdaysold; });
                _this.agedGreaterSixty.sort(function (a, b) { return b.zdaysold - a.zdaysold; });
                _this.agedLessThirtyOne.sort(function (a, b) { return b.zdaysold - a.zdaysold; });
                for (var i = 0; i < 10; i++) {
                    _this.topTenOldstNew.push(_this.newInventory[i]);
                }
                for (var i = 0; i < 10; i++) {
                    _this.topTenOldstUsed.push(_this.usedInventory[i]);
                }
                _this.crrntYrNewCount = _this.crrntYrNewInv.length;
                _this.lstYrNewCount = _this.lstYrNewInv.length;
                _this.crrntYrUsedCount = _this.crrntYrUsedInv.length;
                _this.lstYrUsedCount = _this.lstYrUsedInv.length;
                _this.priorYrNewCount = _this.priorYrNewInv.length;
                _this.priorYrUsedCount = _this.priorYrUsedInv.length;
                _this.ttlNewCarCount = _this.crrntYrNewCount + _this.lstYrNewCount + _this.priorYrNewCount;
                _this.ttlUsedCarCount = _this.crrntYrUsedCount + _this.lstYrUsedCount + _this.priorYrUsedCount;
                _this.vehicleData = [_this.newInventory.length, _this.usedInventory.length];
            });
        }
        //Dashboard Modals
        //
        DashboardController.prototype.closeDialog = function () {
            this.$mdDialog.hide();
        };
        DashboardController.prototype.showCitModal = function () {
            this.$mdDialog.show({
                controller: CITModalController,
                controllerAs: 'citdialog',
                templateUrl: '/ngDashboardDemo/Views/citreport.html',
                clickOutsideToClose: true
            });
        };
        DashboardController.prototype.showMonthDealModal = function () {
            this.$mdDialog.show({
                controller: MonthDealModalController,
                controllerAs: 'dialog',
                templateUrl: '/ngDashboardDemo/Views/DealRecapReport.html',
                clickOutsideToClose: true
            });
        };
        DashboardController.prototype.showVehInvDialog = function (vehicleInventory) {
            if (vehicleInventory === void 0) { vehicleInventory = []; }
            this.$mdDialog.show({
                controller: VehicleInvDetailsController,
                controllerAs: 'dialog',
                templateUrl: '/ngDashboardDemo/Views/VehInvDetails.html',
                clickOutsideToClose: true,
                cancel: 'Close',
                locals: {
                    vehicleInventory: this.newInventory.concat(this.usedInventory)
                }
            });
        };
        DashboardController.prototype.showAcctDialog = function (year) {
            this.$mdDialog.show({
                controller: AcctDetailsController,
                controllerAs: 'acctdialog',
                templateUrl: '/ngDashboardDemo/Views/AcctgDetails.html',
                clickOutsideToClose: true,
                locals: { year: year }
            });
        };
        DashboardController.prototype.showAcctCompDialog = function (year) {
            this.$mdDialog.show({
                controller: AcctCompsController,
                controllerAs: 'acctdialog',
                templateUrl: '/ngDashboardDemo/Views/AcctgComps.html',
                clickOutsideToClose: true,
                locals: { year: year }
            });
        };
        DashboardController.prototype.showDayDeals = function (day, today, yest) {
            if (today === void 0) { today = []; }
            if (yest === void 0) { yest = []; }
            this.$mdDialog.show({
                controller: DayDealsController,
                controllerAs: 'daydialog',
                templateUrl: '/ngDashboardDemo/Views/daydeals.html',
                clickOutsideToClose: true,
                locals: { day: day, today: this.todaysDeals, yest: this.yestDeals },
            });
            this.$mdDialog.alert().ariaLabel("Days Deals").title("Days Deals");
        };
        return DashboardController;
    })();
    DashboardDemo.DashboardController = DashboardController;
    angular.module('DashboardDemo').controller('dashboardController', DashboardController);
    var VehicleInvDetailsController = (function () {
        function VehicleInvDetailsController($mdDialog, vehicleInventory) {
            if (vehicleInventory === void 0) { vehicleInventory = []; }
            this.$mdDialog = $mdDialog;
            this.vehicleInventory = vehicleInventory;
        }
        VehicleInvDetailsController.prototype.closeDialog = function () {
            this.$mdDialog.hide();
        };
        return VehicleInvDetailsController;
    })();
    DashboardDemo.VehicleInvDetailsController = VehicleInvDetailsController;
    angular.module('DashboardDemo').controller('VehicleInvDetailsController', VehicleInvDetailsController);
    var AcctDetailsController = (function () {
        function AcctDetailsController($mdDialog, year, dashboardService) {
            var _this = this;
            this.$mdDialog = $mdDialog;
            this.year = year;
            this.dashboardService = dashboardService;
            this.thisYrsAcctg = [];
            this.janAccts = [];
            this.febAccts = [];
            this.marAccts = [];
            this.aprAccts = [];
            this.mayAccts = [];
            this.junAccts = [];
            this.julAccts = [];
            this.augAccts = [];
            this.sepAccts = [];
            this.octAccts = [];
            this.novAccts = [];
            this.decAccts = [];
            this.months = [];
            this.dashboardService.listAcctAll().$promise.then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    if (results[i].yr == _this.year) {
                        if (results[i].mos == 1) {
                            _this.janAccts.push(results[i]);
                        }
                        else if (results[i].mos == 2) {
                            _this.febAccts.push(results[i]);
                        }
                        else if (results[i].mos == 3) {
                            _this.marAccts.push(results[i]);
                        }
                        else if (results[i].mos == 4) {
                            _this.aprAccts.push(results[i]);
                        }
                        else if (results[i].mos == 5) {
                            _this.mayAccts.push(results[i]);
                        }
                        else if (results[i].mos == 6) {
                            _this.junAccts.push(results[i]);
                        }
                        else if (results[i].mos == 7) {
                            _this.julAccts.push(results[i]);
                        }
                        else if (results[i].mos == 8) {
                            _this.augAccts.push(results[i]);
                        }
                        else if (results[i].mos == 9) {
                            _this.sepAccts.push(results[i]);
                        }
                        else if (results[i].mos == 10) {
                            _this.octAccts.push(results[i]);
                        }
                        else if (results[i].mos == 11) {
                            _this.novAccts.push(results[i]);
                        }
                        else if (results[i].mos == 12) {
                            _this.decAccts.push(results[i]);
                        }
                    }
                }
                var month = (function () {
                    function month(monthacct, name) {
                        if (monthacct === void 0) { monthacct = []; }
                        this.monthacct = monthacct;
                        this.gross = 0;
                        this.adds = 0;
                        this.expenses = 0;
                        this.net = 0;
                        this.name = name;
                        for (var i = 0; i < this.monthacct.length; i++) {
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
                        this.net = this.gross + this.adds + this.expenses;
                    }
                    return month;
                })();
                var january = new month(_this.janAccts, "January");
                var febraury = new month(_this.febAccts, "February");
                var march = new month(_this.marAccts, "March");
                var april = new month(_this.aprAccts, "April");
                var may = new month(_this.mayAccts, "May");
                var june = new month(_this.junAccts, "June");
                var july = new month(_this.julAccts, "July");
                var august = new month(_this.augAccts, "August");
                var sept = new month(_this.sepAccts, "September");
                var octo = new month(_this.octAccts, "October");
                var novem = new month(_this.novAccts, "November");
                var decem = new month(_this.decAccts, "December");
                _this.months.push(january, febraury, march, april, may, june, july, august, sept, octo, novem, decem);
            });
        }
        AcctDetailsController.prototype.closeDialog = function () {
            this.$mdDialog.hide();
        };
        return AcctDetailsController;
    })();
    DashboardDemo.AcctDetailsController = AcctDetailsController;
    angular.module('DashboardDemo').controller('AcctDetailsController', AcctDetailsController);
    var AcctCompsController = (function () {
        function AcctCompsController($mdDialog, year, dashboardService) {
            var _this = this;
            this.$mdDialog = $mdDialog;
            this.year = year;
            this.dashboardService = dashboardService;
            this.thisYrsAcctg = [];
            this.janAccts = [];
            this.febAccts = [];
            this.marAccts = [];
            this.aprAccts = [];
            this.mayAccts = [];
            this.junAccts = [];
            this.julAccts = [];
            this.augAccts = [];
            this.sepAccts = [];
            this.octAccts = [];
            this.novAccts = [];
            this.decAccts = [];
            this.lstJanAccts = [];
            this.lstFebAccts = [];
            this.lstMarAccts = [];
            this.lstAprAccts = [];
            this.lstMayAccts = [];
            this.lstJunAccts = [];
            this.lstJulAccts = [];
            this.lstAugAccts = [];
            this.lstSepAccts = [];
            this.lstOctAccts = [];
            this.lstNovAccts = [];
            this.lstDecAccts = [];
            this.calendar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            this.months = [];
            this.oldMonths = [];
            this.labels = [];
            this.series = ['2016', '2015'];
            this.data = [];
            this.dashboardService.listAcctAll().$promise.then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    if (results[i].yr == _this.year) {
                        if (results[i].mos == 1) {
                            _this.janAccts.push(results[i]);
                        }
                        else if (results[i].mos == 2) {
                            _this.febAccts.push(results[i]);
                        }
                        else if (results[i].mos == 3) {
                            _this.marAccts.push(results[i]);
                        }
                        else if (results[i].mos == 4) {
                            _this.aprAccts.push(results[i]);
                        }
                        else if (results[i].mos == 5) {
                            _this.mayAccts.push(results[i]);
                        }
                        else if (results[i].mos == 6) {
                            _this.junAccts.push(results[i]);
                        }
                        else if (results[i].mos == 7) {
                            _this.julAccts.push(results[i]);
                        }
                        else if (results[i].mos == 8) {
                            _this.augAccts.push(results[i]);
                        }
                        else if (results[i].mos == 9) {
                            _this.sepAccts.push(results[i]);
                        }
                        else if (results[i].mos == 10) {
                            _this.octAccts.push(results[i]);
                        }
                        else if (results[i].mos == 11) {
                            _this.novAccts.push(results[i]);
                        }
                        else if (results[i].mos == 12) {
                            _this.decAccts.push(results[i]);
                        }
                    }
                    if (results[i].yr == (_this.year - 1)) {
                        if (results[i].mos == 1) {
                            _this.lstJanAccts.push(results[i]);
                        }
                        else if (results[i].mos == 2) {
                            _this.lstFebAccts.push(results[i]);
                        }
                        else if (results[i].mos == 3) {
                            _this.lstMarAccts.push(results[i]);
                        }
                        else if (results[i].mos == 4) {
                            _this.lstAprAccts.push(results[i]);
                        }
                        else if (results[i].mos == 5) {
                            _this.mayAccts.push(results[i]);
                        }
                        else if (results[i].mos == 6) {
                            _this.lstJunAccts.push(results[i]);
                        }
                        else if (results[i].mos == 7) {
                            _this.lstJulAccts.push(results[i]);
                        }
                        else if (results[i].mos == 8) {
                            _this.lstAugAccts.push(results[i]);
                        }
                        else if (results[i].mos == 9) {
                            _this.lstSepAccts.push(results[i]);
                        }
                        else if (results[i].mos == 10) {
                            _this.lstOctAccts.push(results[i]);
                        }
                        else if (results[i].mos == 11) {
                            _this.lstNovAccts.push(results[i]);
                        }
                        else if (results[i].mos == 12) {
                            _this.lstDecAccts.push(results[i]);
                        }
                    }
                }
                var month = (function () {
                    function month(monthacct, name) {
                        if (monthacct === void 0) { monthacct = []; }
                        this.monthacct = monthacct;
                        this.gross = 0;
                        this.adds = 0;
                        this.expenses = 0;
                        this.net = 0;
                        this.name = name;
                        for (var i = 0; i < this.monthacct.length; i++) {
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
                        this.net = this.gross + this.adds + this.expenses;
                    }
                    return month;
                })();
                var january = new month(_this.janAccts, "January");
                var febraury = new month(_this.febAccts, "February");
                var march = new month(_this.marAccts, "March");
                var april = new month(_this.aprAccts, "April");
                var may = new month(_this.mayAccts, "May");
                var june = new month(_this.junAccts, "June");
                var july = new month(_this.julAccts, "July");
                var august = new month(_this.augAccts, "August");
                var sept = new month(_this.sepAccts, "September");
                var octo = new month(_this.octAccts, "October");
                var novem = new month(_this.novAccts, "November");
                var decem = new month(_this.decAccts, "December");
                _this.months.push(january, febraury, march, april, may, june, july, august, sept, octo, novem, decem);
                january = new month(_this.lstJanAccts, "January");
                febraury = new month(_this.lstFebAccts, "February");
                march = new month(_this.lstMarAccts, "March");
                april = new month(_this.lstAprAccts, "April");
                may = new month(_this.lstMayAccts, "May");
                june = new month(_this.lstJunAccts, "June");
                july = new month(_this.lstJulAccts, "July");
                august = new month(_this.lstAugAccts, "August");
                sept = new month(_this.lstSepAccts, "September");
                octo = new month(_this.lstOctAccts, "October");
                novem = new month(_this.lstNovAccts, "November");
                decem = new month(_this.lstDecAccts, "December");
                _this.oldMonths.push(january, febraury, march, april, may, june, july, august, sept, octo, novem, decem);
                var tempA = [];
                var tempB = [];
                for (var i = 0; i < _this.months.length; i++) {
                    tempA.push(_this.months[i].gross);
                    tempB.push(_this.oldMonths[i].gross);
                    _this.labels.push(_this.months[i].name);
                }
                _this.data.push(tempA);
                _this.data.push(tempB);
                debugger;
            });
        }
        AcctCompsController.prototype.closeDialog = function () {
            this.$mdDialog.hide();
        };
        return AcctCompsController;
    })();
    DashboardDemo.AcctCompsController = AcctCompsController;
    angular.module('DashboardDemo').controller('AcctCompsController', AcctCompsController);
    var DayDealsController = (function () {
        function DayDealsController($mdDialog, day, today, yest) {
            if (today === void 0) { today = []; }
            if (yest === void 0) { yest = []; }
            this.$mdDialog = $mdDialog;
            this.day = day;
            this.today = today;
            this.yest = yest;
            this.deals = [];
            var temp = [];
            if (this.day == 'today') {
                this.deals = temp.concat(this.today);
            }
            else if (this.day = 'yest') {
                this.deals = temp.concat(this.yest);
            }
        }
        DayDealsController.prototype.closeDialog = function () {
            this.$mdDialog.hide();
        };
        DayDealsController.prototype.cancelDialog = function () {
            this.$mdDialog.cancel();
        };
        DayDealsController.prototype.answerDialog = function (answer) {
            this.$mdDialog.hide(answer);
        };
        return DayDealsController;
    })();
    DashboardDemo.DayDealsController = DayDealsController;
    angular.module('DashboardDemo').controller('DayDealsController', DayDealsController);
    var CITModalController = (function () {
        function CITModalController($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        CITModalController.prototype.closeDialog = function () {
            this.$mdDialog.hide();
        };
        return CITModalController;
    })();
    DashboardDemo.CITModalController = CITModalController;
    angular.module('DashboardDemo').controller('CITModalController', CITModalController);
    var MonthDealModalController = (function () {
        function MonthDealModalController($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        MonthDealModalController.prototype.closeDialog = function () {
            this.$mdDialog.hide();
        };
        return MonthDealModalController;
    })();
    DashboardDemo.MonthDealModalController = MonthDealModalController;
    angular.module('DashboardDemo').controller('MonthDealModalController', MonthDealModalController);
})(DashboardDemo || (DashboardDemo = {}));
//# sourceMappingURL=dashboardController.js.map