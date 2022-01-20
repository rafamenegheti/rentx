"use strict";

var _AppError = require("../../../../shared/errors/AppError");

var _CategoryRepositoriesInMemory = require("../../repositories/in-memory/CategoryRepositoriesInMemory");

var _CreateCategoryUseCase = require("./CreateCategoryUseCase");

let createCategoryUseCase;
let categoriesRepositoryInMemory;
describe("Create category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new _CategoryRepositoriesInMemory.CategoryRepositoriesInMemory();
    createCategoryUseCase = new _CreateCategoryUseCase.CreateCategoryUseCase(categoriesRepositoryInMemory);
  });
  it("should be able to create a new category", async () => {
    const category = {
      name: "Category test",
      description: "Category description test"
    };
    await createCategoryUseCase.execute(category);
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
    expect(categoryCreated).toEqual(expect.objectContaining(category));
  });
  it("should not to be able to create category with name that already exists", async () => {
    const category = {
      name: "Category test",
      description: "Category description test"
    };
    await createCategoryUseCase.execute(category);
    await expect(createCategoryUseCase.execute(category)).rejects.toEqual(new _AppError.AppError("Category already exists"));
  });
});