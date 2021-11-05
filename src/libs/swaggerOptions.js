export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Productores-[API]',
      version: '1.0.0',
      description:
        'MVP de la api para el control de registros de los productores',
    },
    servers: [
      {
        url: `${process.env.API_URL}:${process.env.PORT}/`,
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};
