import { Router } from 'express';
const router = Router();
import {
  getCategories,
  getCategoriesAndDeletes,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categories.controller';

/* GET  */
router.get('/', getCategories);
/* GET all and deletes  */
router.get('/all', getCategoriesAndDeletes);
/* get one */
router.get('/:id', getCategory);
/* POST */
router.post('/', createCategory);
/* UPDATE */
router.put('/:id', updateCategory);
/* Delete */
router.delete('/:id', deleteCategory);

export default router;
