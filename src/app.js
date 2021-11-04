import express from 'express';
import initialSetup from './libs/initialSetup';

const app = express();
const db = require('./database');
initialSetup();

export default app;
