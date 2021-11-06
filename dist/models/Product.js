"use strict";

var _mongoose = require("mongoose");

const schema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  nameCategory: {
    type: String
  }
}, {
  versionKey: false,
  timestamps: true
});
const Product = (0, _mongoose.model)('Product', schema);
module.exports = Product;