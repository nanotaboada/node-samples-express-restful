/* eslint-disable import/extensions */

import express from 'express';
import routes from './routes/songsRoutes.js';

/* -----------------------------------------------------------------------------
  Application
----------------------------------------------------------------------------- */

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

export default app;
