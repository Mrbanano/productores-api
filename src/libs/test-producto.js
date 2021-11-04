const Register = require('../models/Register');
const Category = require('../models/Category');
const User = require('../models/User');
const Role = require('../models/Role');
const { testRegister } = require('../config');

export const testProducto = async () => {
  try {
    console.log('yo no hice nada');
  } catch (error) {
    console.log(error);
  }
};

/**
 * const { producer, content } = testRegister;
    const resultProducer = await User.findOne({ userName: producer });
    for (const e of content) {
      const { name, prices, quantity } = e;
      console.log(name, prices, quantity);
    }
 */
