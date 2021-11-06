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
  img: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});
const Category = (0, _mongoose.model)('Category', schema);
module.exports = Category;