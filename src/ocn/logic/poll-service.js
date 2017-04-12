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
    await loadIndex();
  }
  if (_batch) {
    _movies = _movies.slice(_batch.length);
    _movies2 = _movies2.concat(_batch);
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
}

export async function deselectMovie(id) {
  await post(`/api/deselect/${id}`);
}



async function loadIndex() {
  _movies = await get('/data/index.json');
  _movies2 = [];
  _movies = _movies.sort(() => Math.random() - 0.5);

  _loaded = true;
}
