"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultUser = void 0;

const User = require('../models/User');

const Role = require('../models/Role');

const {
  UserDefault
} = require('../config');

const createDefaultUser = async () => {
  try {
    for (const user of UserDefault) {
      const {
        userName,
        password,
        roles
      } = user;
      const foundUser = await User.findOne({
        userName
      });

      if (foundUser) {
        console.log(`[✔️] User already exists`);
        return;
      }

      const newUser = new User({
        userName,
        password: await User.encryptPassword(password)
      });
      const newRole = await Role.findOne({
        name: roles[0]
      });
      newUser.roles = [newRole._id];
      const userSaved = await newUser.save();
    }

    console.log('[✔️] Default user created');
  } catch (error) {
    console.log('[❌]', error);
  }
};

exports.createDefaultUser = createDefaultUser;