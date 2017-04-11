const fs = require('fs');
const path = require('path');
const request = require('request-promise-native');

const INPUT_PATH = path.resolve(__dirname, '../../data/raw.json');
const OUTPUT_PATH = path.resolve(__dirname, '../../data/raw-detailed.json');

const subjects = JSON.parse(fs.readFileSync(INPUT_PATH));
let subjectIndex = 0;

findDetail();

function findDetail() {
  const subject = subjects[subjectIndex];
  console.log(subjectIndex + 1, subject.title);
  request.get(
    `http://api.douban.com/v2/movie/subject/${subject.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`,
    { json: true }
  ).then((detailedSubject) => {
    Object.assign(subject, detailedSubject);
    if (subjectIndex !== subjects.length - 1) {
      subjectIndex += 1;
      findDetail();
    } else {
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(subjects));
      console.log(`Detailed subjects has been updated to ${OUTPUT_PATH}.`);
    }
  }, (err) => {
    console.error(err);
    if (subjectIndex !== subjects.length - 1) {
      subjectIndex++;
      findDetail();
    } else {
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(subjects));
      console.log(`Detailed subjects has been updated to ${OUTPUT_PATH}.`);
    }
  });
}
