"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultRoles = void 0;

var _config = require("../config");

const Role = require('../models/Role');

const createDefaultRoles = async () => {
  for (const role of _config.Roles) {
    try {
      const {
        name
      } = role;
      const existingRole = await Role.findOne({
        name
      });

      if (existingRole) {
        console.log("[\u2714\uFE0F] Roles already exists");
        continue;
      }

      const newRole = await new Role(role).save();
    } catch (error) {
      console.log('[❌]', error);
    }
  }

  console.log("[\u2714\uFE0F] Created roles");
};
/**
 * 
 * 
export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: 'admin' }).save(),
      new Role({ name: 'producer' }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

*/


exports.createDefaultRoles = createDefaultRoles;