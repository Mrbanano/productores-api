import express, { urlencoded, json } from 'express';
import initialSetup from './libs/initialSetup';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

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
app.use(helmet());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

/*
 * Docs
 */

import ui from 'swagger-ui-express';
import swagger from 'swagger-jsdoc';
import { swaggerOptions } from './libs/swaggerOptions';
import { cssOptions } from './libs/options';
const specs = swagger(swaggerOptions);

/*
 *Routing
 */
app.use('/welcome', IndexRoutes);
app.use('/producer/api/v1/Categories', CateroriesRoutes);
app.use('/producer/api/v1/Products', ProductsRoutes);
app.use('/producer/api/v1/Register', RegisterRoutes);
app.use('/producer/api/v1/Roles', RolesRouter);
app.use('/producer/api/v1/Users', UsersRouter);
app.use('/producer/api/v1/Auth', AuthRouter);
app.use('/', ui.serve, ui.setup(specs, cssOptions));

export default app;
