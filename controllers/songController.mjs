/* ------------------------------------------------------------------------------------------------
  Controller
------------------------------------------------------------------------------------------------ */

import songService from '../services/songService.mjs';

const songController = {
  getSongs(request, response) {
    const songs = songService.retrieve();
    response.status(200).json(songs).end();
  },
  getSongsByYear(request, response) {
    const year = parseInt(request.params.id, 10);
    const { min, max } = songService.retrieveRangeOfYears();
    if (year >= min && year <= max) {
      const songsByYear = songService.retrieveByYear(year);
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
    const { min, max } = songService.retrieveRangeOfRanks();
    if (rank >= min && rank <= max) {
      const songByRank = songService.retrieveByRank(rank);
      if (songByRank) {
        response.status(200).json(songByRank).end();
      }
    } else {
      response.status(422).end();
    }
  },
};

export default songController;
