"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarsRepositoryInMemory = void 0;

var _Car = require("../../infra/typeorm/entities/Car");

class CarsRepositoryInMemory {
  constructor() {
    this.cars = [];
  }

  async create({
    category_id,
    brand,
    fine_amount,
    license_plate,
    daily_rate,
    description,
    name,
    id
  }) {
    const car = new _Car.Car();
    Object.assign(car, {
      category_id,
      brand,
      fine_amount,
      license_plate,
      daily_rate,
      description,
      name,
      id
    });
    this.cars.push(car);
    return car;
  }

  async findByLicensePlate(license_plate) {
    return this.cars.find(car => car.license_plate === license_plate);
  }

  async findAvailable(brand, category_id, name) {
    const avaibleCars = this.cars.filter(car => {
      if (car.available || brand && car.brand === brand || category_id && category_id === car.category_id || name && name === car.name) {
        return car;
      }

      return null;
    });
    return avaibleCars;
  }

  async findById(id) {
    return this.cars.find(car => car.id === id);
  }

  async updateAvailable(id, available) {
    const carIndex = this.cars.findIndex(car => car.id === id);
    this.cars[carIndex].available = available;
  }

}

exports.CarsRepositoryInMemory = CarsRepositoryInMemory;