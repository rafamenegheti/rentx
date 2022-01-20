"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryRepositoriesInMemory = void 0;

var _Category = require("../../infra/typeorm/entities/Category");

class CategoryRepositoriesInMemory {
  constructor() {
    this.categories = [];
  }

  async findByName(name) {
    const category = this.categories.find(category => category.name === name);
    return category;
  }

  async list() {
    const list = this.categories;
    return list;
  }

  async create({
    name,
    description
  }) {
    const category = new _Category.Category();
    Object.assign(category, {
      name,
      description
    });
    this.categories.push(category);
  }

}

exports.CategoryRepositoriesInMemory = CategoryRepositoriesInMemory;