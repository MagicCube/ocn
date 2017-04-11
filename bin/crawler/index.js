const fs = require('fs');
const path = require('path');
const request = require('request-promise-native');

const OUTPUT_PATH = path.resolve(__dirname, '../../data/raw.json');
const COUNT = 250;

const startIndexes = [];
for (let i = 0; i < COUNT; i += 20) {
  startIndexes.push(i);
}

Promise.all(startIndexes.map(start => request.get(
  `http://api.douban.com/v2/movie/top250&start=${start}`,
  { json: true }
))).then(results => {
  const subjects = results.reduce((acc, result) => acc.concat(result.subjects), []);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(subjects));
  console.log(`TOP250 data has been downloaded to ${OUTPUT_PATH}.`);
});
