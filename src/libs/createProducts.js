const Product = require('../models/product');
const Category = require('../models/Category');
import { Catalog } from '../config';

export const createProducts = async () => {
  try {
    for (const product of Catalog) {
      const { name, image, category, description } = product;
      const foundProduct = await Product.findOne({ name });
      if (foundProduct) {
        console.log('[✔️] Products already');
        return;
      }

      const newProduct = new Product({
        name,
        image,
        description,
      });
      const foundCategory = await Category.findOne({ name: category });
      newProduct.category = foundCategory._id;
      const savedProduct = await newProduct.save();
    }
    console.log('[✔️] Saved Products');
  } catch (error) {
    console.log('[❌]', error);
  }
};
