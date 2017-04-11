import { get } from '../http/client';

const BATCH_SIZE = 12;

let _loaded = false;
let _movies = null;

export async function nextBatch() {
  let batch = null;
  if (!_loaded) {
    await loadIndex();
    batch = _movies.slice(0, BATCH_SIZE);
    _movies = _movies.slice(BATCH_SIZE);
    _movies = _movies.sort(() => Math.random() - 0.5);
  } else {
    batch = _movies.slice(0, BATCH_SIZE);
    _movies = _movies.slice(BATCH_SIZE);
  }
  return batch;
}

async function loadIndex() {
  if (!_loaded) {
    _movies = await get('/data/index.json');
    _loaded = true;
  }
}


