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

/**
 * @swagger
 * components:
 *  schemas:
 *    Content:
 *      type: object
 *      properties:
 *        product:
 *          type: string
 *          description: id del producto que registra esta nota.
 *        category:
 *          type: string
 *          description: id de la categoria del producto.
 *        quantity:
 *          type: integer
 *          description: cantidad de producto.
 *        price:
 *          type: integer
 *          description: precio unitario del producto.
 *        productTotal:
 *          type: interger
 *          description: subtotal.
 *    Register:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: auto-generada por la base de datos.
 *        producer:
 *          type: string
 *          description: id del productor que da de alta este registro.
 *        total:
 *          type: integer
 *          description: total de la alta.
 *        content:
 *         description: contenido del registro.
 *         type: array
 *        items:
 *          - $ref: '#/components/schemas/Content'
 *      required:
 *        - name
 *        - content
 *      example:
 *        producer: "CarlosValerio"
 *        content: [{product: "Manzana", category: "Fruta", quantity: "1", price: "1", productTotal: "1"},{product: "Pera", category: "Fruta", quantity: "1", price: "1", productTotal: "1"}]
 *        total: 33850
 *    RegisterNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: No se encontro la registro.
 *      example:
 *        msg: No se encontro el registro.
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
 *  name: Register
 *  description: Endpoint para realizar crud de usuarios.
 *
 */

/**
 * @swagger
 * /producer/api/v1/Registers:
 *   post:
 *     summary: Crea un registro en el sistema.
 *     tags: [Register]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: se guardo exitosamente el regsitro.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Register'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterNotFound'
 */

router.post('/', createRegister);

/**
 * @swagger
 * /producer/api/v1/Registers:
 *  get:
 *   summary: Obtienes todas los registros en formato JSON
 *   tags: [Register]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de registro.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Register'
 *     403:
 *        description: registros no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/RegisterNotFound'
 */

router.get('/', getRegisters);

/**
 * @swagger
 * /producer/api/v1/Registers/all:
 *  get:
 *   summary: Obtienes todas los registros sin borrado logico en formato JSON
 *   tags: [Register]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de registros.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Register'
 *     403:
 *        description: registros no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/RegisterNotFound'
 */

router.get('/all', getRegisterswithDelete);

/**
 * @swagger
 * /producer/api/v1/Registers/{id}:
 *  get:
 *   summary: Obtienes un registro por id  en formato JSON
 *   tags: [Register]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *   responses:
 *     200:
 *        description: obten un registro.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Register'
 *     403:
 *        description: registro no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/RegisterNotFound'
 */

router.get('/:id', getRegister);

/**
 * @swagger
 * /producer/api/v1/Registers/registerby/{id}:
 *  get:
 *   summary: Obtienes todas las registros con sus usuarios en formato JSON
 *   tags: [Register]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de registros con usuarios.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Register'
 *     403:
 *        description: registros no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/RegisterNotFound'
 */

router.get('/registerby/:id', getRegisterbyUser);

/**
 * @swagger
 * /producer/api/v1/Registers/{id}:
 *   put:
 *     summary: Modifica un registro en el sistema.
 *     tags: [Register]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *      - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: Se actualizo exitosamente el registro.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Register'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterNotFound'
 */

router.put('/:id', updateRegister);

/**
 * @swagger
 * /producer/api/v1/Registers/{id}:
 *   delete:
 *     summary: Elimina una registro en el sistema.
 *     tags: [Register]
 *     parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: Se borro exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Register'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterNotFound'
 *
 */

router.delete('/:id', deleteRegister);

export default router;
