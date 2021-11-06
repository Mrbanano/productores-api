"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRegister = exports.getRegisterswithDelete = exports.getRegisters = exports.getRegisterbyUser = exports.getRegister = exports.deleteRegister = exports.createRegister = void 0;

const Product = require('../models/product');

const User = require('../models/User');

const Register = require('../models/Register');

const getRegisters = async (req, res, next) => {
  try {
    const registers = await Register.find({
      Deleted: false
    }).populate('producer', 'userName').populate({
      path: 'content.product',
      select: '_id name description image'
    }).populate('content.category', '_id name description img');
    res.status(200).json({
      success: true,
      count: registers.length,
      data: registers
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

exports.getRegisters = getRegisters;

const getRegisterswithDelete = async (req, res, next) => {
  try {
    const registers = await Register.find().populate('producer', 'userName').populate({
      path: 'content.product',
      select: '_id name description image'
    }).populate('content.category', '_id name description img');
    res.status(200).json({
      success: true,
      count: registers.length,
      data: registers
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

exports.getRegisterswithDelete = getRegisterswithDelete;

const getRegister = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const register = await Register.findOne({
      _id
    }).populate('producer', 'userName').populate({
      path: 'content.product',
      select: '_id name description image'
    }).populate('content.category', '_id name description img');
    res.status(200).json({
      success: true,
      count: register.length,
      data: register
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

exports.getRegister = getRegister;

const getRegisterbyUser = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const register = await Register.find({
      producer: _id
    }).populate('producer', 'userName').populate({
      path: 'content.product',
      select: '_id name description image'
    }).populate('content.category', '_id name description img');
    res.status(200).json({
      success: true,
      count: register.length,
      data: register
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

exports.getRegisterbyUser = getRegisterbyUser;

const createRegister = async (req, res, next) => {
  try {
    const {
      producer,
      content,
      total
    } = req.body;
    const producer_id = await User.findOne({
      userName: producer
    });

    for (const element of content) {
      const {
        name
      } = element;
      const resultId = await Product.findOne({
        name
      });
      element.product = resultId._id;
      element.category = resultId.category;
    }

    const newRegister = await new Register({
      producer: producer_id._id,
      content,
      total
    }).save();
    const {
      registers
    } = await User.findOne({
      _id: producer_id._id
    });
    const newRegisters = [...registers, newRegister._id];
    const UpdateUser = await User.findByIdAndUpdate({
      _id: producer_id._id
    }, {
      registers: newRegisters
    }, {
      new: true
    });
    res.status(201).json(UpdateUser);
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.createRegister = createRegister;

const updateRegister = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateRegister = await Register.findByIdAndUpdate({
      _id
    }, req.body, {
      new: true
    });
    console.log('[✔️] Category Update');
    res.status(201).json({
      success: true,
      count: updateRegister.length,
      data: updateRegister
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

exports.updateRegister = updateRegister;

const deleteRegister = async (req, res, next) => {
  try {
    res.send('deleteRegister');
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.deleteRegister = deleteRegister;