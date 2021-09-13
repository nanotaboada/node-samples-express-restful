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
    const { min, max } = service.getRangeOfYears();
    if (year >= min && year <= max) {
      const songsByYear = service.filterSongsByYear(year.toString());
      if (songsByYear) {
        response.status(200).json(songsByYear).end();
      } else {
        response.status(404).end();
      }
    } else {
      response.status(422).end();
    }
  },

  getSongByRank(request, response) {
    const rank = parseInt(request.params.id, 10);
    const { min, max } = service.getRangeOfRanks();
    if (rank >= min && rank <= max) {
      const songByRank = service.findSongByRank(rank);
      if (songByRank) {
        response.status(200).json(songByRank).end();
      }
    } else {
      response.status(422).end();
    }
  },
};

export default songsController;
