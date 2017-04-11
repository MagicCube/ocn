const fs = require('fs');
const path = require('path');
const request = require('request-promise-native');

const FILE_PATH = '../data/top250.json';
const COUNT = 250;

const startIndexes = [];
for (let i = 0; i < COUNT; i += 20) {
    startIndexes.push(i);
}

Promise.all(startIndexes.map(start => request.get(
    'http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=' + start,
    { json: true }
))).then(results => {
    const subjects = results.reduce((acc, result) => acc.concat(result.subjects), []);
    fs.writeFileSync(FILE_PATH, JSON.stringify(subjects));
    console.log(`TOP250 data has been downloaded to ${path.resolve(FILE_PATH)}`);
});
