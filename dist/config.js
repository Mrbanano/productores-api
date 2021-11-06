"use strict";

const dotenv = require('dotenv');

dotenv.config();
const config = {
  MONGODB_URI_TEST: `mongodb://${process.env.MONGODB_HOST_TEST || 'localhost'}/${process.env.MONGODB_DATABASE_TEST || 'Producers'}`,
  MONGODB_URI: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ge68o.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
  SECRET: process.env.SECRET || 'SECRETO-DE-PRUEBA',
  TimeOut: process.env.TIMEOUT || '32400',
  Roles: [{
    name: 'admin',
    description: 'access to all administrative actions of the system'
  }, {
    name: 'producer',
    description: 'access to record creation'
  }],
  UserDefault: [{
    userName: process.env.DEFAULT_ADMIN,
    password: process.env.DEFAULT_ADMIN_PASSWORD,
    roles: ['admin']
  }, {
    userName: process.env.DEFAULT_PRODUCER,
    password: process.env.DEFAULT_PRODUCER_PASSWORD,
    roles: ['producer']
  }],
  Categories: [{
    name: 'frutas',
    description: 'Frutas',
    img: ''
  }, {
    name: 'verduras',
    description: 'verduras',
    img: ''
  }, {
    name: 'leguminosas',
    description: 'Leguminosas',
    img: ''
  }],
  Catalog: [{
    name: 'Sandia',
    description: 'Sandia',
    image: 'https://i.postimg.cc/vZVQpxHv/snadia.png',
    category: 'frutas'
  }, {
    name: 'Pera',
    description: 'Pera',
    image: 'https://i.postimg.cc/tTXpZrdr/pera.png',
    category: 'frutas'
  }, {
    name: 'Manzana',
    description: 'Manzana',
    image: 'https://i.postimg.cc/Bbz0z4ry/manzana.png',
    category: 'frutas'
  }, {
    name: 'Zanahoria',
    description: 'Zanahoria',
    image: 'https://i.postimg.cc/d1bMR4GP/zanahoria.png',
    category: 'verduras'
  }, {
    name: 'Lechuga',
    description: 'Lechuga',
    image: 'https://i.postimg.cc/L6MKnQHj/lechuga.png',
    category: 'verduras'
  }, {
    name: 'Chayote',
    description: 'Chayote',
    image: 'https://i.postimg.cc/rw8B9dRm/chayote.png',
    category: 'verduras'
  }],
  testRegister: {
    producer: 'CarlosValerio',
    content: [{
      name: 'Lechuga',
      price: 3300,
      quantity: 5,
      productTotal: 16500
    }, {
      name: 'Manzana',
      price: '3470',
      quantity: '5',
      productTotal: 17350
    }],
    total: 33850
  }
};
module.exports = config;