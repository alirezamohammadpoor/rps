// Function that creates a value between 0 1 2.
function getComputerChoice(max){
  return Math.floor(Math.random() * max);
}

const choice = getComputerChoice(3); // stores value from getComputerChoice

// Prints ROCK, PAPER OR SCISSORS instead of 0,1,2.
if (choice === 0) {
  console.log("ROCK");
} else if (choice === 1) {
  console.log("PAPER");
} else if (choice === 2) {
  console.log("SCISSORS");
}