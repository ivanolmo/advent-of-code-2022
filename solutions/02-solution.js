const fs = require('fs');

// read input file
const data = fs.readFileSync('./inputs/02-input.txt', 'utf8');

// regex to remove windows specific '\r' characters, then remove
// whitespace and split on new lines
const moves = data
  .replace(/\r/g, '') // Windows crap
  .trim()
  .split('\n');

// separate each line into 'tuples'
const movesTuples = moves.map((move) => {
  const [first, second] = move.split(' ');
  return [first, second];
});

// assign score to rock, paper, scissors
const scores = {
  rock: 1,
  paper: 2,
  scissors: 3,
  win: 6,
  draw: 3,
  loss: 0,
};

// starting score
let playerScore = 0;

// assign points to each move based on scores object and add to score
// A = rock, B = paper, C = scissors, X = rock, Y = paper, Z = scissors
movesTuples.forEach((tuple) => {
  const [elf, you] = tuple;

  playerScore +=
    you == 'X'
      ? scores['rock']
      : you == 'Y'
      ? scores['paper']
      : scores['scissors'];

  if (elf == 'A') {
    if (you == 'X') {
      playerScore += scores.draw;
    } else if (you == 'Y') {
      playerScore += scores.win;
    } else if (you == 'Z') {
      playerScore += scores.loss;
    }
  } else if (elf == 'B') {
    if (you == 'X') {
      playerScore += scores.loss;
    } else if (you == 'Y') {
      playerScore += scores.draw;
    } else if (you == 'Z') {
      playerScore += scores.win;
    }
  } else if (elf == 'C') {
    if (you == 'X') {
      playerScore += scores.win;
    } else if (you == 'Y') {
      playerScore += scores.loss;
    } else if (you == 'Z') {
      playerScore += scores.draw;
    }
  }
});

// print out final score
console.log(playerScore);

// part two

// starting score
let playerScorePartTwo = 0;

// X = lose, Y = draw, Z = win
movesTuples.forEach((tuple) => {
  const [elf, outcome] = tuple;

  if (elf == 'A') {
    // rock
    if (outcome == 'X') {
      // lose
      playerScorePartTwo += scores.loss + scores.scissors;
    } else if (outcome == 'Y') {
      // draw
      playerScorePartTwo += scores.draw + scores.rock;
    } else if (outcome == 'Z') {
      // win
      playerScorePartTwo += scores.win + scores.paper;
    }
  } else if (elf == 'B') {
    // paper
    if (outcome == 'X') {
      // lose
      playerScorePartTwo += scores.loss + scores.rock;
    } else if (outcome == 'Y') {
      // draw
      playerScorePartTwo += scores.draw + scores.paper;
    } else if (outcome == 'Z') {
      // win
      playerScorePartTwo += scores.win + scores.scissors;
    }
  } else if (elf == 'C') {
    // scissors
    if (outcome == 'X') {
      // lose
      playerScorePartTwo += scores.loss + scores.paper;
    } else if (outcome == 'Y') {
      // draw
      playerScorePartTwo += scores.draw + scores.scissors;
    } else if (outcome == 'Z') {
      // win
      playerScorePartTwo += scores.win + scores.rock;
    }
  }
});

// print out final score
console.log(playerScorePartTwo);
