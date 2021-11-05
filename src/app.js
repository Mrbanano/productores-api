import express, { urlencoded, json } from 'express';
import initialSetup from './libs/initialSetup';
import morgan from 'morgan';

/*
 *Importing Routes
 */
import IndexRoutes from './routes/index.routes';
import CateroriesRoutes from './routes/categories.routes';
import ProductsRoutes from './routes/product.routes';
import RegisterRoutes from './routes/register.routes';
import RolesRouter from './routes/roles.routes';
import UsersRouter from './routes/user.routes';
import AuthRouter from './routes/auth.routes';
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
app.use('/producer/api/v1/Register', RegisterRoutes);
app.use('/producer/api/v1/Roles', RolesRouter);
app.use('/producer/api/v1/Users', UsersRouter);
app.use('/producer/api/v1/Auth', AuthRouter);

export default app;
