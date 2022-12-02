const fs = require('fs');

// read 2200+ line input file
const data = fs.readFileSync('./inputs/01-input.txt', 'utf8');

// regex to remove windows specific '\r' characters, then remove
// whitespace and split on new lines
const elves = data
  .replace(/\r/g, '') // Windows crap
  .trim()
  .split('\n\n');

// sum each elf's calories
const caloriesPerElf = elves.map((elf) => {
  const calories = elf.split('\n');
  return calories.reduce((acc, curr) => acc + parseInt(curr), 0);
});

// get highest calorie count
const partOneAns = Math.max(...caloriesPerElf);

// get sum of top 3 calorie counts
const partTwoAns = caloriesPerElf
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, curr) => acc + curr, 0);
