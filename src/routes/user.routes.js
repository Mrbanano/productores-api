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
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: auto-generada por la base de datos.
 *        userName:
 *          type: string
 *          description: nombre del usuario.
 *        password:
 *          type: string
 *          description: contraseña del usario.
 *        roles:
 *          type: array
 *          description: roles o permisos del usuario.
 *        registers:
 *          type: string
 *          description: registro del usuario.
 *      required:
 *        - name
 *        - password
 *      example:
 *        name: "JulioRegio"
 *        password: "123456"
 *        roles: ["producer"]
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: No se encontro la usuario.
 *      example:
 *        msg: No se encontro el usuario.
 *
 *  parameters:
 *    token:
 *      name: x-access-token
 *      in: header
 *      requiered: true
 *      schema:
 *        type: string
 *        description: token de acceso
 *    _id:
 *      name: id
 *      in: path
 *      required: false
 *      schema:
 *       type: string
 */

/**
 * @swagger
 * tasgs:
 *  name: User
 *  description: Endpoint para realizar crud de usuarios.
 *
 */

/**
 * @swagger
 * /producer/api/v1/Users:
 *   post:
 *     summary: Crea un usuario en el sistema.
 *     tags: [User]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: se guardo exitosamente el usuario.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserNotFound'
 */

router.post('/', createUser);

/**
 * @swagger
 * /producer/api/v1/Users:
 *  get:
 *   summary: Obtienes todas los usuarios en formato JSON
 *   tags: [User]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de usuarios.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *     403:
 *        description: usuarios no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UserNotFound'
 */

router.get('/', getUsers);

/**
 * @swagger
 * /producer/api/v1/Users/all:
 *  get:
 *   summary: Obtienes todas los usuarios sin borrado logico en formato JSON
 *   tags: [User]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de usuarios.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *     403:
 *        description: usuarios no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UserNotFound'
 */

router.get('/all', getUsersWithDelete);

/**
 * @swagger
 * /producer/api/v1/Users/{id}:
 *  get:
 *   summary: Obtienes un usuario por id  en formato JSON
 *   tags: [User]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *   responses:
 *     200:
 *        description: obten un usuario.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *     403:
 *        description: usuario no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UserNotFound'
 */

router.get('/:id', getUser);

/**
 * @swagger
 * /producer/api/v1/Products/registerby/{id}:
 *  get:
 *   summary: Obtienes todas las usuarios con sus registros en formato JSON
 *   tags: [User]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de usuarios.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *     403:
 *        description: usuarios no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UserNotFound'
 */

router.get('/registerby/:id', getUserWithRegister);

/**
 * @swagger
 * /producer/api/v1/Users/{id}:
 *   put:
 *     summary: Modifica un usuario en el sistema.
 *     tags: [User]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *      - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Se actualizo exitosamente el usuario.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserNotFound'
 */

router.put('/:id', updateUser);

/**
 * @swagger
 * /producer/api/v1/Users/{id}:
 *   delete:
 *     summary: Elimina una usuario en el sistema.
 *     tags: [User]
 *     parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Se borro exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserNotFound'
 *
 */

router.delete('/:id', deleteUser);

export default router;
