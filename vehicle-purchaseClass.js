"use strict";
// vehicle-purchase.class.ts
Object.defineProperty(exports, "__esModule", { value: true });
var VehiclePurchase = /** @class */ (function () {
    function VehiclePurchase(registerNo, type, year, price, tax, seats) {
        this.registerNo = registerNo;
        this.type = type;
        this.year = year;
        this.price = price;
        this.tax = tax;
        this.seats = seats;
    }
    VehiclePurchase.prototype.getInfo = function () {
        return {
            registerNo: this.registerNo,
            type: this.type,
            year: this.year,
            price: this.price,
            tax: this.tax,
            seats: this.seats,
        };
    };
    return VehiclePurchase;
}());
exports.default = VehiclePurchase;
