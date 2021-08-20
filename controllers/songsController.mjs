import service from '../services/songsService.mjs';

/* -----------------------------------------------------------------------------
  Controller
----------------------------------------------------------------------------- */

const songsController = {

  getSongs(request, response) {
    const songs = service.retrieveAllSongs();
    response.status(200).json(songs).end();
  },

  getSongsByYear(request, response) {
    const year = parseInt(request.params.id, 10);
    const songsByYear = service.retrieveSongsByYear(year);
    if (songsByYear) {
      response.status(200).json(songsByYear).end();
    } else {
      response.status(400).end();
    }
  },

  getSongByRank(request, response) {
    const rank = parseInt(request.params.id, 10);
    const songByRank = service.retrieveSongsByRank(rank);
    if (songByRank) {
      response.status(200).json(songByRank).end();
    } else {
      response.status(400).end();
    }
  },
};

export default songsController;
