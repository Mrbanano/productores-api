import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    id_producer: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true,
    },
    content: [
      {
        ref: 'Product',
        type: Schema.Types.ObjectId,
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        required: true,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Register = model('Register', schema);

module.exports = Register;
