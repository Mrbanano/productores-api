"use strict";

var _CreateProducts = require("./CreateProducts");

var _CreateDefaultRoles = require("./CreateDefaultRoles");

var _CreateCategory = require("./CreateCategory");

var _CreateDefaultUser = require("./CreateDefaultUser");

var _testProducto = require("./test-Producto");

const initialSetups = async () => {
  await (0, _CreateDefaultRoles.createDefaultRoles)();
  await (0, _CreateCategory.createCategory)();
  await (0, _CreateDefaultUser.createDefaultUser)();
  await (0, _CreateProducts.createProducts)();
  await (0, _testProducto.testProducto)();
};

module.exports = initialSetups;