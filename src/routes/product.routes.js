import { Router } from 'express';
const router = Router();

import {
  getProducts,
  getProdcutsAndDelete,
  getProduct,
  getProductWithCategories,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller';

/* GET  */
router.get('/', getProducts);
/* GET all and deletes  */
router.get('/all', getProdcutsAndDelete);
/* get one */
router.get('/:id', getProduct);
/* get with categories */
router.get('/withCategory/:id', getProductWithCategories);
/* POST */
router.post('/', createProduct);
/* UPDATE */
router.put('/:id', updateProduct);
/* Delete */
router.delete('/:id', deleteProduct);

export default router;
