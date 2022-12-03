const fs = require('fs');

// read input file
const data = fs.readFileSync('./inputs/03-input.txt', 'utf8');

// regex to remove windows specific '\r' characters and split on new lines
const rucksacks = data.replace(/\r/g, '').split('\n');

// split each 'rucksack' item into halves
const items = rucksacks.map((rucksack) => {
  const firstHalf = rucksack.slice(0, rucksack.length / 2);
  const secondHalf = rucksack.slice(rucksack.length / 2);

  return [firstHalf, secondHalf];
});

// find common items between each rucksack
const matches = items.map((item) => {
  for (const char1 of item[0]) {
    for (const char2 of item[1]) {
      if (char1 === char2) {
        return char1;
      }
    }
  }
});

// get letter priority score by index
const letterPriority = '.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// calculate priority sum
const sum = matches.reduce(
  (acc, curr) => acc + letterPriority.indexOf(curr),
  0
);

// print answer
console.log(sum);

// part two

// group rucksacks into threes
const groups = [];
for (let i = 0; i < rucksacks.length; i += 3) {
  groups.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]]);
}

// find common items between each group of three
const matchesPartTwo = groups.map((group) => {
  for (const char1 of group[0]) {
    for (const char2 of group[1]) {
      for (const char3 of group[2]) {
        if (char1 === char2 && char2 === char3) {
          return char1;
        }
      }
    }
  }
});

// calculate priority sum
const sumPartTwo = matchesPartTwo.reduce(
  (acc, curr) => acc + letterPriority.indexOf(curr),
  0
);

// print answer
console.log(sumPartTwo);
