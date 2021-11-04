const Category = require('../models/Category');
const { Categories } = require('../config');

export const createCategory = async () => {
  try {
    Categories.forEach(async (category) => {
      const { name } = category;
      const found = await Category.findOne({ name });
      if (found) return;
      const newCategory = await new Category(category).save();
    });
    console.log('current categories');
  } catch (error) {
    console.log(error);
  }
};
