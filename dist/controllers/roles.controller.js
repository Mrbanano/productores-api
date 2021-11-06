"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRole = exports.getRolesWithDeleted = exports.getRoles = exports.getRole = exports.deleteRole = exports.createRole = void 0;

const Role = require('../models/Role');

const getRoles = async (req, res, next) => {
  try {
    const roles = await Role.find({
      Delete: false
    });
    res.status(200).json({
      success: true,
      count: roles.length,
      data: roles
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.getRoles = getRoles;

const getRolesWithDeleted = async (req, res, next) => {
  try {
    const roles = await Role.find();
    res.status(200).json({
      success: true,
      count: roles.length,
      data: roles
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.getRolesWithDeleted = getRolesWithDeleted;

const getRole = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const role = await Role.findOne({
      _id
    });
    res.status(200).json({
      success: true,
      count: 1,
      data: role
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.getRole = getRole;

const createRole = async (req, res, next) => {
  try {
    const {
      name,
      description
    } = req.body;
    const existingRole = await Role.findOne({
      name
    });

    if (existingRole) {
      console.log(`[✔️] Roles already exists`);
      res.status(400).json({
        success: false,
        error: 'Roles already exists'
      });
      return;
    }

    const newRole = await new Role({
      name,
      description
    }).save();
    res.status(200).json({
      success: true,
      count: 1,
      data: newRole
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.createRole = createRole;

const updateRole = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const role = await Role.findByIdAndUpdate({
      _id
    }, req.body, {
      new: true
    });
    res.status(200).json({
      success: true,
      count: 1,
      data: role
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.updateRole = updateRole;

const deleteRole = async (req, res, next) => {
  try {
    res.send('deleteRole');
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.deleteRole = deleteRole;