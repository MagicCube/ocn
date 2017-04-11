const fs = require('fs');
const path = require('path');

const INPUT_PATH = path.resolve(__dirname, '../../data/raw-detailed.json');
const OUTPUT_PATH = path.resolve(__dirname, '../../data/index.json');

const subjects = JSON.parse(fs.readFileSync(INPUT_PATH));
const results = subjects.map(subject => ({
  id: subject.id,
  img: subject.images && subject.images.medium ? subject.images.medium : null
}));
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results));
console.log(`Index data has been updated to ${OUTPUT_PATH}.`);
