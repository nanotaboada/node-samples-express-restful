/* eslint-disable import/extensions */

import service from '../services/songsService.js';

/* -----------------------------------------------------------------------------
  Controller
----------------------------------------------------------------------------- */

const songsController = {
  getSongs(request, response) {
    const songs = service.retrieveAll();
    response.status(200).json(songs);
  },
};

export default songsController;
