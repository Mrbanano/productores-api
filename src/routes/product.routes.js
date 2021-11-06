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

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: auto-generada por la base de datos.
 *        name:
 *          type: string
 *          description: nombre de la categoria.
 *        descripcion:
 *          type: string
 *          description: descripcion de la categoria.
 *        image:
 *          type: string
 *          description: imagen de la categoria.
 *        nameCategory:
 *          type: string
 *          description: nombre de categoria a la que pertenece.
 *        category:
 *          type: string #referencia a la tabla de categorias.
 *          description: categoria a la que pertenece.
 *
 *      required:
 *        - name
 *        - description
 *        - category
 *
 *      example:
 *        name: "jicama"
 *        description: "jicama"
 *        img: "https://i.postimg.cc/Lsc1s7Bt/jicama.png"
 *        category: "fruta"
 *
 *    PrductNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: No se encontro el producto.
 *      example:
 *        msg: No se encontro el producto.
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
 *  name: Products
 *  description: Endpoint para realizar crud de productos.
 *
 */

/**
 * @swagger
 * /producer/api/v1/Products:
 *   post:
 *     summary: Crea un producto en el sistema.
 *     tags: [Products]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Products'
 *     responses:
 *       200:
 *         description: se guardo exitosamente el producto.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductsNotFound'
 */

router.post('/', createProduct);

/**
 * @swagger
 * /producer/api/v1/Products:
 *  get:
 *   summary: Obtienes todas las productos en formato JSON
 *   tags: [Products]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de productos.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *     403:
 *        description: productos no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/ProductsNotFound'
 */

router.get('/', getProducts);

/**
 * @swagger
 * /producer/api/v1/Products/all:
 *  get:
 *   summary: Obtienes todas las productos sin borrado logico en formato JSON
 *   tags: [Products]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de productos.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *     403:
 *        description: productos no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/ProductsNotFound'
 */

router.get('/all', getProdcutsAndDelete);

/**
 * @swagger
 * /producer/api/v1/Products/{id}:
 *  get:
 *   summary: Obtienes un producto por id  en formato JSON
 *   tags: [Products]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *   responses:
 *     200:
 *        description: lista de productos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *     403:
 *        description: producto no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/ProductsNotFound'
 */

router.get('/:id', getProduct);

/**
 * @swagger
 * /producer/api/v1/Products/withCategory/{id}:
 *  get:
 *   summary: Obtienes todas las productos con sus categorias en formato JSON
 *   tags: [Products]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de productos.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *     403:
 *        description: productos no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/ProductsNotFound'
 */

router.get('/withCategory/:id', getProductWithCategories);

/**
 * @swagger
 * /producer/api/v1/Products/{id}:
 *   put:
 *     summary: Modifica un producto en el sistema.
 *     tags: [Products]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *      - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Products'
 *     responses:
 *       200:
 *         description: Se actualizo exitosamente el producto.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductsNotFound'
 */

router.put('/:id', updateProduct);

/**
 * @swagger
 * /producer/api/v1/Products/{id}:
 *   delete:
 *     summary: Elimina una prodcuto en el sistema.
 *     tags: [Products]
 *     parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Products'
 *     responses:
 *       200:
 *         description: Se borro exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductsNotFound'
 *
 */

router.delete('/:id', deleteProduct);

export default router;
