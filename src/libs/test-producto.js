const Register = require('../models/Register');
const Product = require('../models/product');
const User = require('../models/User');
const { testRegister } = require('../config');

export const testProducto = async () => {
  try {
    const count = await Register.estimatedDocumentCount();

    if (count > 0) return;

    const { producer, content, total } = testRegister;

    const resultProducer = await User.findOne({ userName: producer });
    const _id = resultProducer._id;
    for (const c of content) {
      const { name } = c;
      const resultId = await Product.findOne({ name });
      c.product = resultId._id;
      c.category = resultId.category;
    }

    const newRegister = await new Register({
      producer: _id,
      content,
      total,
    }).save();

    console.log('nuevo registro', newRegister);

    const UpdateUser = await User.findByIdAndUpdate(
      { _id },
      { registers: newRegister._id },
      {
        new: true,
      }
    );
    console.log('[✔️] Default register created');
  } catch (error) {
    console.log(error);
    next();
  }
};
