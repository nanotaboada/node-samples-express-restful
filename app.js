/* eslint-disable import/extensions */

import express from 'express';
import winston from 'winston';
import routes from './routes/songsRoutes.js';

/* -----------------------------------------------------------------------------
  Logging
----------------------------------------------------------------------------- */

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { module: 'app.js' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

/* -----------------------------------------------------------------------------
  Application
----------------------------------------------------------------------------- */

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`running on port ${port}`);
});
