"use strict";

var _AppError = require("../../../../shared/errors/AppError");

var _CarsRepositoryInMemory = require("../../repositories/in-memory/CarsRepositoryInMemory");

var _CreateCarUseCase = require("./CreateCarUseCase");

let createCarUseCase;
let carsRepository;
describe("Create car", () => {
  beforeEach(() => {
    carsRepository = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    createCarUseCase = new _CreateCarUseCase.CreateCarUseCase(carsRepository);
  });
  it("Should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category"
    });
    expect(car).toHaveProperty("id");
  });
  it("Should not be able to create a car with existing license plate", async () => {
    await createCarUseCase.execute({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category"
    });
    await expect(createCarUseCase.execute({
      name: "Name Car2",
      description: "Description Car2",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand 2",
      category_id: "category 2"
    })).rejects.toEqual(new _AppError.AppError("Car already exists!"));
  });
  it("Should be able to create a car with available: true, by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Available",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1235",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category"
    });
    expect(car.available).toBe(true);
  });
});