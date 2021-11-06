"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _roles = require("../controllers/roles.controller");

const router = (0, _express.Router)();

/**
 * @swagger
 * components:
 *  schemas:
 *    Role:
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
 *      required:
 *        - name
 *      example:
 *        name: "user"
 *        description: "is a simple user in system"

 *    RoleNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: No se encontro el rol.
 *      example:
 *        msg: No se encontro el rol.
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
 *  name: Role
 *  description: Endpoint para realizar crud de roles.
 *
 */

/**
 * @swagger
 * /producer/api/v1/Roles:
 *   post:
 *     summary: Crea un rol en el sistema.
 *     tags: [Role]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: se guardo exitosamente el rol.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RoleNotFound'
 */
router.post('/', _roles.createRole);
/**
 * @swagger
 * /producer/api/v1/Roles:
 *  get:
 *   summary: Obtienes todas las roles en formato JSON
 *   tags: [Role]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de roles.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Role'
 *     403:
 *        description: roles no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/RoleNotFound'
 */

router.get('/', _roles.getRoles);
/**
 * @swagger
 * /producer/api/v1/Roles/all:
 *  get:
 *   summary: Obtienes todas los roles sin borrado logico en formato JSON
 *   tags: [Role]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *   responses:
 *     200:
 *        description: lista de roles.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Role'
 *     403:
 *        description: roles no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/RoleNotFound'
 */

router.get('/all', _roles.getRolesWithDeleted);
/**
 * @swagger
 * /producer/api/v1/Roles/{id}:
 *  get:
 *   summary: Obtienes un rol por id  en formato JSON
 *   tags: [Role]
 *   parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *   responses:
 *     200:
 *        description: obten un rol.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Role'
 *     403:
 *        description: rol no encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/RoleNotFound'
 */

router.get('/:id', _roles.getRole);
/**
 * @swagger
 * /producer/api/v1/Roles/{id}:
 *   put:
 *     summary: Modifica un rol en el sistema.
 *     tags: [Role]
 *     parameters:
 *      - $ref: '#/components/parameters/token'
 *      - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: Se actualizo exitosamente el rol.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RoleNotFound'
 */

router.put('/:id', _roles.updateRole);
/**
 * @swagger
 * /producer/api/v1/Roles/{id}:
 *   delete:
 *     summary: Elimina una rol en el sistema.
 *     tags: [Role]
 *     parameters:
 *     - $ref: '#/components/parameters/token'
 *     - $ref: '#/components/parameters/_id'
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: Se borro exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       400:
 *         description: hubo un problema.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RoleNotFound'
 *
 */

router.delete('/:id', _roles.deleteRole);
var _default = router;
exports.default = _default;