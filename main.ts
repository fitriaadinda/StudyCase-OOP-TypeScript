// main.ts

import VehiclePurchase from './vehicle-purchaseClass';
import Income from './incomeClass';
import RentalManager from './rental-managerClass';

const rentalManager = new RentalManager();

const vehicle1 = new VehiclePurchase('D1001UM', 'SUV', 2010, 350000000, 3500000, 4);
const vehicle2 = new VehiclePurchase('D1002UM', 'SUV', 2010, 350000000, 3500000, 4);
const vehicle3 = new VehiclePurchase('D1003UM', 'SUV', 2015, 350000000, 3500000, 5);
const vehicle4 = new VehiclePurchase('D1004UM', 'SUV', 2015, 350000000, 3500000, 5);
const vehicle5 = new VehiclePurchase('D11UK', 'Taxi', 2002, 175000000, 1750000, 4);
const vehicle6 = new VehiclePurchase('D12UK', 'Taxi', 2015, 225000000, 2250000, 4);
const vehicle7 = new VehiclePurchase('D13UK', 'Taxi', 2020, 275000000, 2750000, 4);
const vehicle8 = new VehiclePurchase('ID8089', 'Private Jet', 2015, 150000000000, 1500000000, 12);
const vehicle9 = new VehiclePurchase('ID8099', 'PrivateJet', 2018, 175000000000, 1750000000, 15);

rentalManager.addVehicle(vehicle1);
rentalManager.addVehicle(vehicle2);
rentalManager.addVehicle(vehicle3);
rentalManager.addVehicle(vehicle4);
rentalManager.addVehicle(vehicle5);
rentalManager.addVehicle(vehicle6);
rentalManager.addVehicle(vehicle7);
rentalManager.addVehicle(vehicle8);
rentalManager.addVehicle(vehicle9);

const income1 = new Income(new Date(), 500000, 150000, 0, 0, 650000);
const income2 = new Income(new Date(), 500000, 150000, 0, 0, 650000);
const income3 = new Income(new Date(), 500000, 150000, 0, 0, 650000);
const income4 = new Income(new Date(), 500000, 150000, 0, 0, 650000);
const income5 = new Income(new Date(), 0, 0, 45, 4500, 202500);
const income6 = new Income(new Date(), 0, 0, 75, 4500, 337500);
const income7 = new Income(new Date(), 0, 0, 90, 4500, 405000);
const income8 = new Income(new Date(), 35000000, 15000000, 0, 0, 50000000);
const income9 = new Income(new Date(), 55000000, 25000000, 0, 0, 80000000);

rentalManager.addIncome(income1);
rentalManager.addIncome(income2);
rentalManager.addIncome(income3);
rentalManager.addIncome(income4);
rentalManager.addIncome(income5);
rentalManager.addIncome(income6);
rentalManager.addIncome(income7);
rentalManager.addIncome(income8);
rentalManager.addIncome(income9);

const totalVehicle = rentalManager.getTotalVehicle();
console.log('Total Vehicles:', totalVehicle);

const totalSUV = rentalManager.getTotalVehicleByType('SUV');
console.log('Total SUV Vehicles:', totalSUV);

const totalIncome = rentalManager.getTotalIncome();
console.log('Total Income:', totalIncome);

const totalIncomeSUV = rentalManager.getTotalIncomeByType('SUV');
console.log('Total Income from SUV Vehicles:', totalIncomeSUV);

const totalIncomeTaxi = rentalManager.getTotalIncomeByType('Taxi');
console.log('Total Income from Taxi Vehicles:', totalIncomeTaxi);

const totalIncomePrivateJet = rentalManager.getTotalIncomeByType('Private Jet');
console.log('Total Income from Private Jet Vehicles:', totalIncomePrivateJet);
