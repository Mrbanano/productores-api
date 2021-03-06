import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    nameCategory: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model('Product', schema);

module.exports = Product;
