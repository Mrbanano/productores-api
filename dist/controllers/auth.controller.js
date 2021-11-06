"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUp = exports.SignIn = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _config = require("../config");

const User = require('../models/User');

const Role = require('../models/Role');

const SignUp = async (req, res, next) => {
  try {
    const {
      userName,
      password,
      roles
    } = req.body;
    /**
     *  check if the user has already been created
     */

    const foundUser = await User.findOne({
      userName
    });

    if (foundUser) {
      //not found
      res.status(404).send({
        message: 'user already created'
      });
    } else {
      /**
       * collecting user information
       */
      const newUser = new User({
        userName: userName,
        password: await User.encryptPassword(password),
        roles: roles
      });
      /**
       * default role
       */

      if (!roles || roles.length === 0) {
        const role = await Role.findOne({
          name: 'producer'
        });
        newUser.roles = [role._id];
      } else if (roles) {
        const foundRoles = await Role.find({
          name: {
            $in: roles
          }
        });
        newUser.roles = foundRoles.map(role => role._id);
      }
      /**
       * Save user
       */


      const savedUser = await newUser.save();
      const token = (0, _jsonwebtoken.sign)({
        id: savedUser._id
      }, _config.SECRET, {
        expiresIn: _config.TimeOut
      });
      /**
       * Return data
       */

      res.status(200).json({
        success: true,
        count: 1,
        data: token
      });
    }
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.SignUp = SignUp;

const SignIn = async (req, res, next) => {
  try {
    const {
      userName,
      password
    } = req.body;
    /**
     *search if the user is exis
     */

    const foundUser = await User.findOne({
      userName
    }).populate('roles');

    if (foundUser) {
      /**
       *  the password match ?
       */
      const match = await User.comparePassword(password, foundUser.password);
      if (!match) return res.status(404).send({
        message: 'check your credentials and try again'
      });
      /**
       * create token and response
       */

      const token = (0, _jsonwebtoken.sign)({
        id: foundUser._id
      }, _config.SECRET, {
        expiresIn: _config.TimeOut
      });
      res.status(200).json({
        success: true,
        count: 1,
        data: token
      });
    } else {
      //not found
      res.status(404).send({
        message: 'check your credentials and try again'
      });
    }
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.SignIn = SignIn;