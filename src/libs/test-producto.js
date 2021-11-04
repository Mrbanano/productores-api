const Register = require('../models/Register');
const Product = require('../models/product');
const User = require('../models/User');
const { testRegister } = require('../config');

export const testProducto = async () => {
  try {
    const { producer, content } = testRegister;
    const resultProducer = await User.findOne({ userName: producer });
    const id_producer = resultProducer._id;
    for (const c of content) {
      const { name } = c;
      const resultId = await Product.findOne({ name });
      c.name = c.id_product = resultId._id;
    }
    const newRegister = await new Register({
      id_producer,
      content,
    }).save();

    console.log('nuevo registro', newRegister);

    const UpdateUser = await User.findByIdAndUpdate(
      { _id: id_producer },
      { registers: newRegister._id },
      {
        new: true,
      }
    );

    console.log('usuario actualizado', UpdateUser);
  } catch (error) {
    console.log(error);
  }
};
