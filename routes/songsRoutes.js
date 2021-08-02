/* eslint-disable import/extensions */

import express from 'express';
import controller from '../controllers/songsController.js';

/* -----------------------------------------------------------------------------
  Routes
----------------------------------------------------------------------------- */

const songsRouter = express.Router();
songsRouter.get('/api/v1/songs', controller.getSongs);

export default songsRouter;
