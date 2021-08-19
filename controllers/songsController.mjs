import service from '../services/songsService.mjs';

/* -----------------------------------------------------------------------------
  Controller
----------------------------------------------------------------------------- */

const songsController = {

  getSongs(request, response) {
    const songs = service.retrieveAllSongs();
    response.status(200).json(songs);
  },

  getSongsByYear(request, response) {
    const year = parseInt(request.params.id, 10);
    const songsByYear = service.retrieveSongsByYear(year);
    if (songsByYear) {
      response.status(200).json(songsByYear);
    } else {
      response.status(400);
    }
  },

  getSongByRank(request, response) {
    const rank = parseInt(request.params.id, 10);
    const songByRank = service.retrieveSongsByRank(rank);
    if (songByRank) {
      response.status(200).json(songByRank);
    } else {
      response.status(400);
    }
  },
};

export default songsController;
