const fs = require('fs');

const projects = [
  { tag: ['AI', 'Image Generation', 'Full Stack'] },
  { tag: ['AI', 'NLP', 'Writing'] },
  { tag: ['CMS', 'Development', 'Theme'] },
  { tag: ['AI', 'Vision', 'Remote Sensing'] },
  { tag: ['Design', 'Full Stack', 'Writing'] },
  { tag: ['AI', 'Vision', 'API'] },
  { tag: ['OpenSID', 'Deployment', 'Development'] },
  { tag: ['Front End', 'Volunteer'] },
];

console.time('Loop with dynamic join()');
for (let i = 0; i < 1000000; i++) {
  let res = [];
  for (let p of projects) {
    res.push(p.tag.join(' | '));
  }
}
console.timeEnd('Loop with dynamic join()');

console.time('Loop with precomputed tags');
const precomputed = projects.map((p) => ({ ...p, joinedTags: p.tag.join(' | ') }));
for (let i = 0; i < 1000000; i++) {
  let res = [];
  for (let p of precomputed) {
    res.push(p.joinedTags);
  }
}
console.timeEnd('Loop with precomputed tags');
