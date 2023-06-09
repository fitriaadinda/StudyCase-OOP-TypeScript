// rental-manager.class.ts

import VehiclePurchase from './vehicle-purchaseClass';
import Income from './incomeClass';

class RentalManager {
  private vehicles: VehiclePurchase[];
  private incomes: Income[];

  constructor() {
    this.vehicles = [];
    this.incomes = [];
  }

  addVehicle(vehicle: VehiclePurchase) {
    this.vehicles.push(vehicle);
  }

  addIncome(income: Income) {
    this.incomes.push(income);
  }

  getTotalVehicle(): number {
    return this.vehicles.length;
  }

  getTotalVehicleByType(type: string): number {
    return this.vehicles.filter((vehicle) => vehicle.type === type).length;
  }

  getTotalIncome(): number {
    return this.incomes.reduce((total, income) => total + income.getInfo().total, 0);
  }

  getTotalIncomeByType(type: string): number {
    return this.incomes
      .filter((income) => {
        const vehicle = this.vehicles.find((vehicle) => vehicle.registerNo === income.getInfo().order.toString());
        return vehicle && vehicle.type === type;
      })
      .reduce((total, income) => total + income.getInfo().total, 0);
  }
}

export default RentalManager;
