"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RentalsRepository = void 0;

var _typeorm = require("typeorm");

var _Rental = require("../entities/Rental");

class RentalsRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Rental.Rental);
  }

  async create({
    car_id,
    expected_return_date,
    user_id,
    id,
    end_date,
    total
  }) {
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      user_id,
      id,
      end_date,
      total
    });
    await this.repository.save(rental);
    return rental;
  }

  async findOpenRentalByCar(car_id) {
    const car = await this.repository.createQueryBuilder().where("car_id = :id ", {
      id: car_id
    }).andWhere("end_date is null").getOne();
    return car;
  }

  async findOpenRentalByUser(user_id) {
    const rental = await this.repository.createQueryBuilder().where("user_id = :id", {
      id: user_id
    }).andWhere("end_date is null").getOne();
    return rental;
  }

  async findById(id) {
    const rental = await this.repository.findOne(id);
    return rental;
  }

  async findByUser(user_id) {
    const rentals = await this.repository.find({
      where: {
        user_id
      },
      relations: ["car"]
    });
    return rentals;
  }

}

exports.RentalsRepository = RentalsRepository;