const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Fav = mongoose.model('Fav');

router.get('/favs', (req, res) => {
  Fav.find({}).then((favs) => {
    res.send(favs);
  });
});

router.post('/select/:id', (req, res) => {
  const movieId = req.params.id;
  const sessionId = req.session.id;
  console.log(sessionId, 'selected', movieId);

  Fav.findBySessionId(sessionId).then((fav) => {
    if (!fav) {
      fav = new Fav({ sessionId, movieIds: [movieId] });
    } else {
      if (fav.movieIds.indexOf(movieId) === -1) {
        const movieIds = fav.movieIds;
        movieIds.push(movieId);
      }
    }
    fav.save();

    res.send({
      movieId,
      sessionId,
      selected: true
    });
  });
});

router.post('/deselect/:id', (req, res) => {
  const movieId = req.params.id;
  const sessionId = req.session.id;
  console.log(sessionId, 'deselected', movieId);

  Fav.findBySessionId(sessionId).then((fav) => {
    if (fav) {
      const movieIds = fav.movieIds;
      const index = movieIds.indexOf(movieId);
      if (index !== -1) {
        movieIds.splice(index, 1);
      }
    }
    fav.save();

    res.send({
      movieId,
      sessionId,
      selected: false
    });
  });
});

module.exports = router;
