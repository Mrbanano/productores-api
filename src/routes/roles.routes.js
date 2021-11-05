import { Router } from 'express';
const router = Router();

import {
  getRoles,
  getRole,
  getRolesWithDeleted,
  createRole,
  updateRole,
  deleteRole,
} from '../controllers/roles.controller';

/* GET  */
router.get('/', getRoles);
/* GET all and deletes  */
router.get('/all', getRolesWithDeleted);
/* get one */
router.get('/:id', getRole);
/* get with categories */
//router.get('/registerby/:id', getRegisterbyUser);
/* POST */
router.post('/', createRole);
/* UPDATE */
router.put('/:id', updateRole);
/* Delete */
router.delete('/:id', deleteRole);

export default router;
