const fs = require('fs');

// read input file
const data = fs.readFileSync('./inputs/04-input.txt', 'utf8');

// regex to remove windows specific '\r' characters and split on new lines
const pairs = data.replace(/\r/g, '').split('\n');

// split each 'pair' item into halves
const ranges = pairs.map((pair) => {
  const [first, second] = pair
    .split(',')
    .map((num) => num.split('-').map(Number));

  return [first, second];
});

// declare overlaps variable
let overlaps = 0;

// loop through each range
ranges.forEach((range) => {
  const [first, second] = range;

  // increment overlaps for each range that overlaps with another
  if (
    (first[0] <= second[0] && first[1] >= second[1]) ||
    (second[0] <= first[0] && second[1] >= first[1])
  ) {
    overlaps++;
  }
});

// print answer
console.log(overlaps);

// part two

// declare any-overlaps variable
let anyOverlaps = 0;

ranges.forEach((range) => {
  const [first, second] = range;

  // check for ANY overlap, not just complete overlap
  if (
    (first[0] <= second[0] && first[1] >= second[1]) ||
    (second[0] <= first[0] && second[1] >= first[1])
  ) {
    anyOverlaps++;
  } else if (
    (first[0] <= second[0] && first[1] >= second[0]) ||
    (second[0] <= first[0] && second[1] >= first[0])
  ) {
    anyOverlaps++;
  }
});

// print answer
console.log(anyOverlaps);
