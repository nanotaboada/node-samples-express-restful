/* ------------------------------------------------------------------------------------------------
  Route
------------------------------------------------------------------------------------------------ */

import express from 'express';
import songController from '../controllers/songController.mjs';

const songRoute = express.Router();

songRoute.get('/api/v1/songs', songController.getSongs);
songRoute.get('/api/v1/songs/year/:id', songController.getSongsByYear);
songRoute.get('/api/v1/songs/rank/:id', songController.getSongByRank);

export default songRoute;
