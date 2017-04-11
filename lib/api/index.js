const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Fav = mongoose.model('Fav');

router.post('/select/:id', async (req, res) => {
  const movieId = req.params.id;
  const sessionId = req.session.id;
  console.log(sessionId, 'selected', movieId);

  let fav = await Fav.findBySessionId(sessionId);
  if (!fav) {
    fav = new Fav({ sessionId, movieIds: [movieId] });
  } else {
    if (fav.movieIds.indexOf(movieId) === -1) {
      const movieIds = fav.movieIds;
      movieIds.push(movieId);
    }
  }
  await fav.save();

  res.send({
    movieId,
    sessionId,
    selected: true
  });
});

router.post('/deselect/:id', async (req, res) => {
  const movieId = req.params.id;
  const sessionId = req.session.id;
  console.log(sessionId, 'deselected', movieId);

  let fav = await Fav.findBySessionId(sessionId);
  if (fav) {
    const movieIds = fav.movieIds;
    const index = movieIds.indexOf(movieId);
    if (index !== -1) {
      movieIds.splice(index, 1);
    }
  }
  if (fav.movieIds.length) {
    await fav.save();
  } else {
    await Fav.remove({ _id: fav._id });
  }

  res.send({
    movieId,
    sessionId,
    selected: false
  });
});

module.exports = router;
