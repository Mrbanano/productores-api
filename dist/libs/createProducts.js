"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProducts = void 0;

var _config = require("../config");

const Product = require('../models/product');

const Category = require('../models/Category');

const createProducts = async () => {
  try {
    for (const product of _config.Catalog) {
      const {
        name,
        image,
        category,
        description
      } = product;
      const foundProduct = await Product.findOne({
        name
      });

      if (foundProduct) {
        console.log('[✔️] Products already');
        return;
      }

      const newProduct = await new Product({
        name,
        image,
        description,
        nameCategory: category
      });
      const foundCategory = await Category.findOne({
        name: category
      });
      newProduct.category = foundCategory._id;
      const savedProduct = await newProduct.save();
    }

    console.log('[✔️] Saved Products');
  } catch (error) {
    console.log('[❌]', error);
  }
};

exports.createProducts = createProducts;