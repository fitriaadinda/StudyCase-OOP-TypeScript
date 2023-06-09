"use strict";
// income.class.ts
Object.defineProperty(exports, "__esModule", { value: true });
var Income = /** @class */ (function () {
    function Income(transactionDate, rent, driver, order, orderPerKm, total) {
        this.transactionDate = transactionDate;
        this.rent = rent;
        this.driver = driver;
        this.order = order;
        this.orderPerKm = orderPerKm;
        this.total = total;
    }
    Income.prototype.getInfo = function () {
        return {
            transactionDate: this.transactionDate,
            rent: this.rent,
            driver: this.driver,
            order: this.order,
            orderPerKm: this.orderPerKm,
            total: this.total,
        };
    };
    return Income;
}());
exports.default = Income;
