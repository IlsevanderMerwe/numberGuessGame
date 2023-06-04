let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  const userDifference = Math.abs(targetNumber - userGuess);
  const computerDifference = Math.abs(targetNumber - computerGuess);

  if (userDifference === computerDifference) {
    return true; // Human wins if there's a tie
  } else if (userDifference < computerDifference) {
    return true; // Human wins if their guess is closer
  } else {
    return false; // Computer wins if their guess is closer
  }
}
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}


