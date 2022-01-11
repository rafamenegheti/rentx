import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "../../repositories/in-memory/SpecificationsRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;
describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });
  it("Should be able to add a new specification to a car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const specification = await specificationsRepositoryInMemory.create({
      description: "test",
      name: "test",
    });

    const specification2 = await specificationsRepositoryInMemory.create({
      description: "test2",
      name: "test2",
    });

    const specifications_id = [specification.id];
    const specifications_id2 = [specification2.id];

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id: [...specifications_id, ...specifications_id2],
    });

    expect(specificationsCars).toHaveProperty("specifications");
    // expect(specificationsCars.specifications.length).toBe(2);
  });

  it("Should not be able to add a new specification to a non existing car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["1234"];
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});