import express, { urlencoded, json } from 'express';
import initialSetup from './libs/initialSetup';
import morgan from 'morgan';

/*
 *Importing Routes
 */
import IndexRoutes from './routes/index.routes';
import CateroriesRoutes from './routes/categories.routes';
import ProductsRoutes from './routes/product.routes';
/*
 *Initial setup
 */
const app = express();
const db = require('./database');
initialSetup();

/*
 *Middleware
 */
app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));
app.use(json());

/*
 *Routing
 */
app.use('/', IndexRoutes);
app.use('/producer/api/v1/Categories', CateroriesRoutes);
app.use('/producer/api/v1/Products', ProductsRoutes);

export default app;
