import { Router } from 'express';
const router = Router();

import { SignIn, SignUp } from '../controllers/auth.controller';

/**
 * @swagger
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      properties:
 *        userName:
 *          type: string
 *          description: nombre del usuario.
 *        password:
 *          type: string
 *          description: contraseña del usuario
 *        roles:
 *          type: object
 *          description: rol del usuario. [admin, user]
 *      required:
 *        - userName
 *        - password
 *      example:
 *        userName: "JulioHernadez"
 *        password: "Contraseña1234"
 *
 *  parameters:
 *    userName:
 *      in: body
 *      name: userName
 *      required: true
 *      schema:
 *        type: string
 *      description: el nombre del usuario
 *    password:
 *      in: body
 *      name: password
 *      required: true
 *      schema:
 *        type: string
 *        description: la contraseña del usuario
 *    roles:
 *      in: body
 *      name: roles
 *      required: false
 *      schema:
 *        type: Object
 *        description: el rol del usuario
 */

/**
 * @swagger
 * tasgs:
 *  name: Auth
 *  description: Endpoint para realizar registro e inicio de sesion en la aplicacion
 *
 */

/**
 * @swagger
 * /producer/api/v1/Auth/signup:
 *   post:
 *     summary: Crea un usuario en el sistema.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Se inicio sesion exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Algo fallo en el servidor
 *
 */
router.post('/signup', SignUp);

/**
 * @swagger
 * /producer/api/v1/Auth/signin:
 *   post:
 *     summary: Inicia sesion en el sistema.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Se inicio sesion exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Algo fallo en el servidor
 *
 */

router.post('/signin', SignIn);

export default router;
