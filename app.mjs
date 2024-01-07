import express from 'express';
import songRoute from './routes/songRoute.mjs';

/* -----------------------------------------------------------------------------
  Application
----------------------------------------------------------------------------- */

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', songRoute);

export default app;
