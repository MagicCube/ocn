const fs = require('fs');
const path = require('path');

const INPUT_PATH = path.resolve(__dirname, '../data/raw-detailed.json');
const OUTPUT_PATH = path.resolve(__dirname, '../data/tags.csv');

const subjects = JSON.parse(fs.readFileSync(INPUT_PATH));
const genres = new Set();     // 类型
const people = new Set();     // 演职人员、导演
const countries = new Set();  // 国家
const dbTags = new Set();       // 标签："动作","特工","美国","2017","冒险","犯罪","飙车","剧情","暴力","系列"
subjects.forEach((subject) => {
  subject.genres.forEach(genre => genres.add(genre));
  subject.casts.forEach(cast => people.add(cast.name));
  subject.directors.forEach(director => people.add(director.name));
  if (subject.countries) {
    subject.countries.forEach(country => countries.add(country));
  }
  if (subject.tags) {
    subject.tags.forEach(tag => dbTags.add(tag));
  }
});

const tags = new Set();
countries.forEach(item => tags.add(item));
genres.forEach(item => tags.add(item));
people.forEach(item => tags.add(item));
dbTags.forEach(item => tags.add(item));
console.log(`${tags.size} unique tags were found, including:`);
console.log(`- Countries: ${countries.size}`);
console.log(`- Genres: ${genres.size}`);
console.log(`- People: ${people.size}`);
console.log(`- Douban User Tags: ${dbTags.size}`);
console.log(`Total: ${countries.size + genres.size + people.size + dbTags.size}`);
console.log();

fs.writeFileSync(OUTPUT_PATH, Array.from(tags).join('\n'));
console.log(`All tags has been saved to ${OUTPUT_PATH}.`);
