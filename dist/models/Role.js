"use strict";

var _mongoose = require("mongoose");

const schema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});
const Role = (0, _mongoose.model)('Role', schema);
module.exports = Role;