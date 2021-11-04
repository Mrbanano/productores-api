const Role = require('../models/Role');
import { Roles } from '../config';

export const createDefaultRoles = async () => {
  for (const role of Roles) {
    try {
      const { name } = role;
      const existingRole = await Role.findOne({ name });
      if (existingRole) {
        console.log(`Roles already exists`);
        continue;
      }
      const newRole = await new Role(role).save();
    } catch (error) {
      console.log(error);
    }
  }
  console.log(`Created roles`);
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
