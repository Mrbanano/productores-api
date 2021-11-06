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

/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
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
 *        img:
 *          type: string
 *          description: imagen de la categoria.
 *      required:
 *        - name
 *        - description
 *        - descripcion
 *
 *      example:
 *        name: "leguminoza "
 *        description: "un grupo muy numeroso con casi 20.000 especies, entre las que hay desde árboles a herbáceas, pasando por arbustos y enredaderasun grupo muy numeroso con casi 20.000 especies, entre las que hay desde árboles a herbáceas, pasando por arbustos y enredaderas"
 *        img: "https://i.postimg.cc/XJbZw5Zm/leguminosas.jpg"
 *
 *    CategoryNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: No se encontro la categoria.
 *      example:
 *        msg: No se encontro el categoria.
 *
 *  parameters:
 *    CategoryId:
 *      in: path
 *      name: CategoryId
 *      required: true
 *      schema:
 *        type: integer
 *      description: id de la categoria.
 *    CategoryName:
 *      in: body
 *      name: name
 *      required: true
 *      schema:
 *        type: string
 *      description: nombre de la categoria.
 *    CategoryDescription:
 *      in: body
 *      name: descripcion
 *      required: true
 *      schema:
 *        type: string
 *      description: descripcion de la categoria.
 *    Categoryimg:
 *      in: body
 *      name: img
 *      required: false
 *      schema:
 *        type: string
 *      description: imagen de la categoria.
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
 *  name: Categories
 *  description: Endpoint para realizar crud de categorias.
 *
 */

/**
 * @swagger
 * /producer/api/v1/Categories:
 *   post:
 *     summary: Crea una categoria en el sistema.
 *     tags: [Categories]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: se guardo exitosamente la categoria.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoryNotFound'
 */

router.post('/', createCategory);

/**
 * @swagger
 * /producer/api/v1/Categories:
 *  get:
 *   summary: Obtienes todas las categorias en formato JSON
 *   tags: [Categories]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de categorias
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Category'
 *     403:
 *        description: categorias no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/CategoryNotFound'
 */
router.get('/', getCategories);
/**
 * @swagger
 * /producer/api/v1/Categories/all:
 *  get:
 *   summary: Obtienes todas las categorias en formato JSON
 *   tags: [Categories]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de categorias
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Category'
 *     403:
 *        description: categorias no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/CategoryNotFound'
 */

router.get('/all', getCategoriesAndDeletes);

/**
 * @swagger
 * /producer/api/v1/Categories/{id}:
 *  get:
 *   summary: Obtienes una categoria por id  en formato JSON
 *   tags: [Categories]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *   responses:
 *     200:
 *        description: lista de categorias
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Category'
 *     403:
 *        description: categorias no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/CategoryNotFound'
 */
router.get('/:id', getCategory);

/**
 * @swagger
 * /producer/api/v1/Categories/{id}:
 *   put:
 *     summary: Modifica una categoria en el sistema.
 *     tags: [Categories]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *      - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Se actualizco exitosamente la categoria.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoryNotFound'
 */

router.put('/:id', updateCategory);
/**
 * @swagger
 * /producer/api/v1/Categories/{id}:
 *   delete:
 *     summary: Elimina una categoria en el sistema.
 *     tags: [Categories]
 *     parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Se borro exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoryNotFound'
 *
 */
router.delete('/:id', deleteCategory);

export default router;
