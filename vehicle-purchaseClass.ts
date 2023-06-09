// vehicle-purchase.class.ts

import Vehicle from './vehicleInterface';

class VehiclePurchase implements Vehicle {
  registerNo: string;
  type: string;
  year: number;
  price: number;
  tax: number;
  seats: number;

  constructor(registerNo: string, type: string, year: number, price: number, tax: number, seats: number) {
    this.registerNo = registerNo;
    this.type = type;
    this.year = year;
    this.price = price;
    this.tax = tax;
    this.seats = seats;
  }

  getInfo(): Vehicle {
    return {
      registerNo: this.registerNo,
      type: this.type,
      year: this.year,
      price: this.price,
      tax: this.tax,
      seats: this.seats,
    };
  }
}

export default VehiclePurchase;
