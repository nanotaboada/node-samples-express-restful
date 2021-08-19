import express from 'express';
import controller from '../controllers/songsController.mjs';

/* -----------------------------------------------------------------------------
  Routes
----------------------------------------------------------------------------- */

const songsRouter = express.Router();

songsRouter.get('/api/v1/songs', controller.getSongs);
songsRouter.get('/api/v1/songs/year/:id', controller.getSongsByYear);
songsRouter.get('/api/v1/songs/rank/:id', controller.getSongByRank);

export default songsRouter;
