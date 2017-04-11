const fs = require('fs');
const path = require('path');

const INPUT_RAW_PATH = path.resolve(__dirname, '../data/raw-detailed.json');
const INPUT_TAG_PATH = path.resolve(__dirname, '../data/tags.csv');
const OUTPUT_ENCODINDG_PATH = path.resolve(__dirname, '../data/encoding.csv');
const OUTPUT_PATH = path.resolve(__dirname, '../data/movies.json');

const tags = fs.readFileSync(INPUT_TAG_PATH).toString().split('\n');
const subjects = JSON.parse(fs.readFileSync(INPUT_RAW_PATH));

subjects.forEach(subject => {
  const feature = zeros();
  subject.genres.forEach(item => encode(item, feature));
  subject.casts.forEach(item => encode(item.name, feature));
  subject.directors.forEach(item => encode(item.name, feature));
  if (subject.countries) {
    subject.countries.forEach(item => encode(item, feature));
  }
  if (subject.tags) {
    subject.tags.forEach(item => encode(item, feature));
  }
  subject.feature = feature;
});

fs.writeFileSync(OUTPUT_ENCODINDG_PATH, subjects.map(subject => subject.feature.join('')).join('\n'));
console.log(`Encoding has been saved to ${OUTPUT_ENCODINDG_PATH}.`);
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(subjects));
console.log(`Encoded subjects has been saved to ${OUTPUT_PATH}.`);

function encode(key, feature) {
  const index = tags.indexOf(key);
  if (index !== -1) {
    feature[index] = 1;
  }
}

function zeros() {
  const result = [];
  for (let i = 0; i < tags.length; i++) {
    result[i] = 0;
  }
  return result;
}
