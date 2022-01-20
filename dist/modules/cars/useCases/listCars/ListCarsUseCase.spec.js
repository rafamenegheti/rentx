"use strict";

var _CarsRepositoryInMemory = require("../../repositories/in-memory/CarsRepositoryInMemory");

var _ListAvailableCarsUseCase = require("./ListAvailableCarsUseCase");

let listAvailableCarsUseCase;
let carsRepositoryInMemory;
describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    listAvailableCarsUseCase = new _ListAvailableCarsUseCase.ListAvailableCarsUseCase(carsRepositoryInMemory);
  });
  it("Should be able to list all avaible cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1233",
      fine_amount: 60,
      brand: "Brand",
      category_id: "Id from category"
    });
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car 2",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1233",
      fine_amount: 60,
      brand: "Brand_test",
      category_id: "Id from category"
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Brand_test"
    });
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car 3",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1233",
      fine_amount: 60,
      brand: "Brand_test",
      category_id: "Id from category"
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "Name Car 3"
    });
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car 3",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1233",
      fine_amount: 60,
      brand: "Brand_test",
      category_id: "123456"
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "123456"
    });
    expect(cars).toEqual([car]);
  });
});