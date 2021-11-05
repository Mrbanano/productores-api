import { Router } from 'express';
const router = Router();

import {
  getUsers,
  getUsersWithDelete,
  getUserWithRegister,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller';

/* GET  */
router.get('/', getUsers);
/* GET all and deletes  */
router.get('/all', getUsersWithDelete);
/* get one */
router.get('/:id', getUser);
/* get with register */
router.get('/registerby/:id', getUserWithRegister);
/* POST */
router.post('/', createUser);
/* UPDATE */
router.put('/:id', updateUser);
/* Delete */
router.delete('/:id', deleteUser);

export default router;
