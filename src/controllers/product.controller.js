const Product = require('../models/product');
const Category = require('../models/Category');

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ delete: false }).populate('category');
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
export const getProdcutsAndDelete = async (req, res, next) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.status(200).json({
      success: true,
      count: 1,
      data: product,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};

export const getProductWithCategories = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId).populate('category');
    res.status(200).json({
      success: true,
      count: 1,
      data: product,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { name, image, category, description } = req.body;

    const foundProduct = await Product.findOne({ name });

    if (foundProduct) {
      res
        .status(400)
        .json({ success: false, message: 'Product already exists' });
      return;
    }

    const newProduct = await new Product({
      name,
      image,
      description,
    });

    const foundCategory = await Category.findOne({ name: category });
    newProduct.category = foundCategory._id;
    const savedProduct = await newProduct.save();
    savedProduct.category = foundCategory;
    res.status(201).json({
      success: true,
      count: 1,
      data: savedProduct,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateProduct = await Product.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      count: updateProduct.length,
      data: updateProduct,
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    res.status(200).json({ msg: 'Deleted' });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({ success: false, error: error.message });
    next();
  }
};
