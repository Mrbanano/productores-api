"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getCategory = exports.getCategoriesAndDeletes = exports.getCategories = exports.deleteCategory = exports.createCategory = void 0;

const Category = require('../models/Category');

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({
      Delete: false
    });
    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.getCategories = getCategories;

const getCategoriesAndDeletes = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.getCategoriesAndDeletes = getCategoriesAndDeletes;

const getCategory = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const category = await Category.findOne({
      _id
    });
    res.status(200).json({
      success: true,
      count: category.length,
      data: category
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(400).json({
      success: false,
      error: error.message
    });
    next();
  }
};
/**
 *  @bug check if mongoose is Letter case sensitive, save categorys with same name but different case
 */


exports.getCategory = getCategory;

const createCategory = async (req, res, next) => {
  try {
    const {
      name
    } = req.body;
    const newName = name.toLowerCase();
    const found = await Category.findOne({
      name: newName
    });

    if (found) {
      res.status(400).json({
        success: false,
        message: 'Category already exists'
      });
      return;
    } else {
      const newCategory = await new Category(req.body).save();
      console.log('[✔️] new Category created');
      res.status(201).json({
        success: true,
        count: newCategory.length,
        data: newCategory
      });
      next();
    }
  } catch (error) {
    console.log('[❌]', error);
    res.status(412).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.createCategory = createCategory;

const updateCategory = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const updateCategory = await Category.findByIdAndUpdate({
      _id
    }, req.body, {
      new: true
    });
    console.log('[✔️] Category Update');
    res.status(201).json({
      success: true,
      count: updateCategory.length,
      data: updateCategory
    });
  } catch (error) {
    console.log('[❌]', error);
    res.status(412).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.updateCategory = updateCategory;

const deleteCategory = async (req, res, next) => {
  try {
    res.send('delete category');
  } catch (error) {
    console.log('[❌]', error);
    res.status(412).json({
      success: false,
      error: error.message
    });
    next();
  }
};

exports.deleteCategory = deleteCategory;