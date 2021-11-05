import { Router } from 'express';
const router = Router();

import {
  getRegister,
  getRegisters,
  getRegisterbyUser,
  getRegisterswithDelete,
  createRegister,
  updateRegister,
  deleteRegister,
} from '../controllers/register.controller';

/* GET  */
router.get('/', getRegisters);
/* GET all and deletes  */
router.get('/all', getRegisterswithDelete);
/* get one */
router.get('/:id', getRegister);
/* get with categories */
router.get('/registerby/:id', getRegisterbyUser);
/* POST */
router.post('/', createRegister);
/* UPDATE */
router.put('/:id', updateRegister);
/* Delete */
router.delete('/:id', deleteRegister);

export default router;
