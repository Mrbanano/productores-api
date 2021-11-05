const User = require('../models/User');
const Role = require('../models/Role');

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({ Delete: false });
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
export const getUsersWithRegisters = async (req, res, next) => {
  try {
    const users = await User.find({ Delete: false }).populate('registers');
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
export const getUsersWithDelete = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
export const getUser = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    res.status(200).json({
      success: true,
      count: 1,
      data: user,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
export const getUserWithRegister = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id).populate('registers');
    res.status(200).json({
      success: true,
      count: 1,
      data: user,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { userName, password, roles } = req.body;
    const foundUser = await User.findOne({ userName });
    if (foundUser) {
      console.log(`[✔️] User already exists`);
      res.status(400).json({ success: false, error: 'User already exists' });
      return;
    }
    const newUser = await new User({
      userName,
      password: await User.encryptPassword(password),
      roles,
    });

    if (!roles || roles.length === 0) {
      const role = await Role.findOne({ name: 'producer' });
      newUser.roles = [role._id];
    } else if (roles) {
      const foundRoles = await Roles.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    }

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      data: savedUser,
    });

    console.log('[✔️] Default user created');
  } catch (error) {
    console.log('[❌]', error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    res.send('pendiente');
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    res.send('[✔️] User deleted');
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};

/*
 const _id = req.params.id;
    const { userName, password, roles } = req.body;
    console.log(userName, password, roles);
    const userUpdate = await User.findOne({ _id });
    let isDefaultUser = false;

    userName === undefined || userName.length === 0
      ? userUpdate.userName
      : (userUpdate.userName = userName);
    password === undefined || password.length === 0
      ? userUpdate.password
      : (userUpdate.password = await User.encryptPassword(password));
    roles === undefined || roles.length === 0
      ? userUpdate.roles
      : (isDefaultUser = true);

    if (isDefaultUser) {
      const role = await Role.findOne({ name: 'producer' });
      userUpdate.roles = [role._id];
    }
    /*

    const user = await User.findByIdAndUpdate(
      { _id },
      { userUpdate },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      count: 1,
      data: userUpdate,
    });


    
const newRoles = [];
    let newPassword = '';

    if (password) newPassword = await User.encryptPassword(password);

    if (!roles || roles.length === 0) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      if (foundRoles.length > 0) {
        foundRoles.map((role) => newRoles.push(role._id));
      } else {
        console.log('[❌] Role not found');
        res.status(400).json({ success: false, error: 'Roles not found' });
        return;
      }
    }*/
