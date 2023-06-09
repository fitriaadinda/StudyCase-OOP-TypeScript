"use strict";
// rental-manager.class.ts
Object.defineProperty(exports, "__esModule", { value: true });
var RentalManager = /** @class */ (function () {
    function RentalManager() {
        this.vehicles = [];
        this.incomes = [];
    }
    RentalManager.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    RentalManager.prototype.addIncome = function (income) {
        this.incomes.push(income);
    };
    RentalManager.prototype.getTotalVehicle = function () {
        return this.vehicles.length;
    };
    RentalManager.prototype.getTotalVehicleByType = function (type) {
        return this.vehicles.filter(function (vehicle) { return vehicle.type === type; }).length;
    };
    RentalManager.prototype.getTotalIncome = function () {
        return this.incomes.reduce(function (total, income) { return total + income.getInfo().total; }, 0);
    };
    RentalManager.prototype.getTotalIncomeByType = function (type) {
        var _this = this;
        return this.incomes
            .filter(function (income) {
            var vehicle = _this.vehicles.find(function (vehicle) { return vehicle.registerNo === income.getInfo().order.toString(); });
            return vehicle && vehicle.type === type;
        })
            .reduce(function (total, income) { return total + income.getInfo().total; }, 0);
    };
    return RentalManager;
}());
exports.default = RentalManager;
