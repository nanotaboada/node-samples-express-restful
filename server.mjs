/* eslint-disable import/extensions */

import winston from 'winston';
import app from './app.mjs';

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`running on port ${port}`);
});
