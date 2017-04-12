import { get, post } from '../http/client';

const BATCH_SIZE = 12;
const MOVIE_INDEX_KEY = 'movie-index';
const MOVIE_INDEX_KEY2 = 'movie-index-2';

let _loaded = false;
let _movies = null;
let _movies2 = null;
let _batch = null;

export async function nextBatch() {
  if (!_loaded) {
    //localStorage.clear();
    await loadIndex();
  }
  if (_batch) {
    _movies = _movies.slice(_batch.length);
    _movies2 = _movies2.concat(_batch);
    saveIndex();
  }
  if (_movies.length === 0) {
    _movies = _movies2.slice(0);
    _movies2.splice(0, _movies2.length);
  }
  _batch = _movies.slice(0, BATCH_SIZE);
  return _batch;
}

export async function selectMovie(id) {
  await post(`/api/select/${id}`);
  saveIndex();
}

export async function deselectMovie(id) {
  await post(`/api/deselect/${id}`);
  saveIndex();
}



async function loadIndex() {
  if (localStorage.getItem(MOVIE_INDEX_KEY) !== null && localStorage.getItem(MOVIE_INDEX_KEY) !== 'null') {
    _movies = JSON.parse(localStorage.getItem(MOVIE_INDEX_KEY));
    _movies2 = JSON.parse(localStorage.getItem(MOVIE_INDEX_KEY2));
  } else {
    _movies = await get('/data/index.json');
    _movies2 = [];
    _movies = _movies.sort(() => Math.random() - 0.5);
    saveIndex();
  }

  _loaded = true;
}

function saveIndex() {
  localStorage.setItem(MOVIE_INDEX_KEY, JSON.stringify(_movies));
  localStorage.setItem(MOVIE_INDEX_KEY2, JSON.stringify(_movies2));
}
