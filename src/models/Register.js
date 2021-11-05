import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    producer: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true,
    },
    content: [
      {
        product: {
          ref: 'Product',
          type: Schema.Types.ObjectId,
          required: true,
        },
        category: {
          ref: 'Category',
          type: Schema.Types.ObjectId,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        productTotal: {
          type: Number,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Register = model('Register', schema);

module.exports = Register;
