import { Router } from 'express';
const router = Router();

import { SignIn, SignUp } from '../controllers/auth.controller';

router.post('/signin', SignIn);
router.post('/signup', SignUp);

export default router;
