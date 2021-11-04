const User = require('../models/User');
const Role = require('../models/Role');
const { UserDefault } = require('../config');

export const createDefaultUser = async () => {
  try {
    for (const user of UserDefault) {
      const { userName, password, roles } = user;
      const foundUser = await User.findOne({ userName });
      if (foundUser) {
        console.log(`[✔️] User already exists`);
        return;
      }
      const newUser = new User({
        userName,
        password: await User.encryptPassword(password),
      });
      const newRole = await Role.findOne({ name: roles[0] });
      newUser.roles = [newRole._id];
      const userSaved = await newUser.save();
    }
    console.log('[✔️] Default user created');
  } catch (error) {
    console.log('[❌]', error);
  }
};

/*

export const createDefaultModerator = async () => {
  try {
    const foundModerator = await User.findOne({
      userName: config.DEFAULT_MODERATOR,
    });

    if (foundModerator) return;

    const newUser = new User({
      userName: config.DEFAULT_MODERATOR,
      password: await User.encryptPassword(config.DEFAULT_MODERATOR_PASSWORD),
      Delete: false,
    });
    const role = await Role.findOne({ name: 'producer' });
    newUser.roles = [role._id];
    const defaultModerator = await newUser.save();
    console.log('Default M listo');
  } catch (error) {
    console.log(error);
  }
};
*/
