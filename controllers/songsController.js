/* eslint-disable import/extensions */

import service from '../services/songsService.js';

/* -----------------------------------------------------------------------------
  Controller
----------------------------------------------------------------------------- */

const songsController = {
  getAll(request, response) {
    const books = service.retrieveAll();
    response.status(200).json(books);
  },
};

export default songsController;
