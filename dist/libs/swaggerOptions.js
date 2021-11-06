"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerOptions = void 0;
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Productores-[API]',
      version: '1.0.0',
      description: 'MVP de la api para el control de registros de los productores'
    },
    servers: [{
      url: "".concat(process.env.API_URL, ":").concat(process.env.PORT, "/")
    }]
  },
  apis: ['./src/routes/*.js']
};
exports.swaggerOptions = swaggerOptions;