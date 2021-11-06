"use strict";

var _mongoose = require("mongoose");

var _bcrypt = require("bcrypt");

const schema = new _mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  roles: [{
    ref: 'Role',
    type: _mongoose.Schema.Types.ObjectId
  }],
  registers: [{
    ref: 'Register',
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  versionKey: false,
  timestamps: true
});

schema.statics.encryptPassword = async password => {
  const salt = await (0, _bcrypt.genSaltSync)(10);
  return await (0, _bcrypt.hashSync)(password, salt);
};

schema.statics.comparePassword = async (password, recivedpassword) => {
  return await (0, _bcrypt.compare)(password, recivedpassword);
};

const User = (0, _mongoose.model)('User', schema);
module.exports = User;