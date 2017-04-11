import { get, post } from '../http/client';

const BATCH_SIZE = 12;
const MOVIE_INDEX_KEY = 'movie-index';

let _loaded = false;
let _movies = null;
let _batch = null;

export async function nextBatch() {
  if (!_loaded) {
    await loadIndex();
  }
  if (_batch) {
    _movies = _movies.slice(_batch.length);
    saveIndex();
  }
  _batch = _movies.slice(0, BATCH_SIZE);
  return _batch;
}

export async function selectMovie(id) {
  await post(`/api/select/${id}`);
}

export async function deselectMovie(id) {
  await post(`/api/deselect/${id}`);
}



async function loadIndex() {
  if (!_loaded) {
    if (localStorage.getItem(MOVIE_INDEX_KEY) !== null) {
      _movies = JSON.parse(localStorage.getItem(MOVIE_INDEX_KEY));
    } else {
      _movies = await get('/data/index.json');
      _movies = _movies.sort(() => Math.random() - 0.5);
      saveIndex();
    }
    _loaded = true;
  }
}

function saveIndex() {
  localStorage.setItem(MOVIE_INDEX_KEY, JSON.stringify(_movies));
}
