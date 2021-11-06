"use strict";

var _mongoose = require("mongoose");

const schema = new _mongoose.Schema({
  producer: {
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  content: [{
    product: {
      ref: 'Product',
      type: _mongoose.Schema.Types.ObjectId,
      required: true
    },
    category: {
      ref: 'Category',
      type: _mongoose.Schema.Types.ObjectId,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    productTotal: {
      type: Number
    }
  }],
  total: {
    type: Number,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});
const Register = (0, _mongoose.model)('Register', schema);
module.exports = Register;