const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const router = express.Router();
const Fav = mongoose.model('Fav');

const movs = require('../../data/movies.json');
function getMov(id) {
  return movs.find(mov => mov.id === id);
}

router.get('/favs', (req, res) => {
  const file = path.resolve(__dirname, '../../data/cached/favs.json');
  if (fs.existsSync(file)) {
    res.send(JSON.parse(fs.readFileSync(file)));
    return;
  }
  Fav.find({}).then((favs) => {
    res.send(favs);
  });
});

router.get('/favs/stats', (req, res) => {
  const file = path.resolve(__dirname, '../../data/cached/stats.json');
  if (fs.existsSync(file)) {
    res.send(JSON.parse(fs.readFileSync(file)));
    return;
  }
  const distinct = new Map();
  Fav.find({}).then((favs) => {
    favs.forEach((fav) => {
      fav.movieIds.forEach((movieId) => {
        if (!distinct.has(movieId)) {
          distinct.set(movieId, 1);
        } else {
          const count = distinct.get(movieId) + 1;
          distinct.set(movieId, count);
        }
      });
    });
    const movies = [];
    for (const [movieId, count] of distinct.entries()) {
      const mov = getMov(movieId);
      const movie = {
        id: movieId,
        title: mov.title,
        img: mov.images.large,
        favs: count,
        favPercentage: Math.round(count / favs.length * 1000) / 10
      };
      movies.push(movie);
    }
    movies.sort((a, b) => b.favs - a.favs);

    const results = {
      top25: movies.slice(0, 25),
      sessionCount: favs.length
    };
    res.send(results);
  });
});

router.get('/favs/count', (req, res) => {
  Fav.find({}).then((favs) => {
    res.send({
      sessionCount: favs.length
    });
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
