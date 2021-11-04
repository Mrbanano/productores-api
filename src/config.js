const dotenv = require('dotenv');
dotenv.config();

const config = {
  MONGODB_URI_TEST: `mongodb://${
    process.env.MONGODB_HOST_TEST || 'localhost'
  }/${process.env.MONGODB_DATABASE_TEST || 'Producers'}`,

  MONGODB_URI: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ge68o.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,

  SECRET: process.env.SECRET || 'SECRETO-DE-PRUEBA',

  Roles: [
    {
      name: 'admin',
      description: 'access to all administrative actions of the system',
    },
    { name: 'producer', description: 'access to record creation' },
  ],
  UserDefault: [
    {
      userName: process.env.DEFAULT_ADMIN,
      password: process.env.DEFAULT_ADMIN_PASSWORD,
      roles: ['admin'],
    },
    {
      userName: process.env.DEFAULT_PRODUCER,
      password: process.env.DEFAULT_PRODUCER_PASSWORD,
      roles: ['producer'],
    },
  ],
  Categories: [
    {
      name: 'Frutas',
      description: 'Frutas',
      img: '',
    },
    {
      name: 'Verduras',
      description: 'verduras',
      img: '',
    },
    {
      name: 'Leguminosas',
      description: 'Leguminosas',
      img: '',
    },
  ],
};

module.exports = config;
