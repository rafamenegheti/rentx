"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterUseAddAvatar1641626260992 = void 0;

var _typeorm = require("typeorm");

class AlterUseAddAvatar1641626260992 {
  async up(queryRunner) {
    await queryRunner.addColumn("users", new _typeorm.TableColumn({
      name: "avatar",
      type: "varchar",
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("users", "avatar");
  }

}

exports.AlterUseAddAvatar1641626260992 = AlterUseAddAvatar1641626260992;