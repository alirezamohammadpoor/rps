let humanScore = 0;
let computerScore= 0;

function playGame() {
for (let round = 0; round < 5; round++) {

// Prompts the user to choose rock, paper or scissors.
let humanChoice = prompt("Rock, paper or scissors?");

if (humanChoice == "rock") {
  console.log("ROCK");
} else if (humanChoice == "paper") {
  console.log("PAPER");
} else if (humanChoice == "scissors") {
  console.log("SCISSORS");
}

// Function that creates a value between 0 1 2.
function getComputerChoice(max){
  return Math.floor(Math.random() * max);
}

const computerChoice = getComputerChoice(3); // stores value from getComputerChoice

// Prints ROCK, PAPER OR SCISSORS instead of 0,1,2.
if (computerChoice === 0) {
  console.log("ROCK");
} else if (computerChoice === 1) {
  console.log("PAPER");
} else if (computerChoice === 2) {
  console.log("SCISSORS");
}

if (
  (humanChoice === "rock" && computerChoice === 0) ||
  (humanChoice === "paper" && computerChoice === 1) ||
  (humanChoice === "scissors" && computerChoice === 2)
) {
  console.log("It is a tie!");
} else if (
  (humanChoice === "rock" && computerChoice === 2) ||
  (humanChoice === "paper" && computerChoice === 0) ||
  (humanChoice === "scissors" && computerChoice === 1)
) {
  console.log("Player won!");
humanScore++;
} else {
  console.log("Computer won!");
  computerScore++;
}


}
}
playGame()

if (humanScore > computerScore) {
  console.log("PLAYER IS THE CHAMPION!");
} else {
  console.log("COMPUTER IS THE CHAMPION!");
}