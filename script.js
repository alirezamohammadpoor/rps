let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let humanChoice;
const announceChampion = document.querySelector(".champion");

function gameOver() {
  if (roundCount === 5) {
    const pickContainer = document.querySelector(".pick-container");
    pickContainer.textContent = "";

    const buttonsContainer = document.querySelector(".buttons");
    buttonsContainer.style.display = "none";

    const gameTitle = document.querySelector("h1");
    gameTitle.style.display = "none";

    if (humanScore > computerScore) {
      const humanChampion = document.createElement("h1");
      humanChampion.classList.add("human-champion");
      humanChampion.textContent = "HUMAN IS THE CHAMPION";
      announceChampion.appendChild(humanChampion);
    } else if (humanScore < computerScore) {
      const computerChampion = document.createElement("h1");
      computerChampion.classList.add("computer-champion");
      computerChampion.textContent = "COMPUTER IS THE CHAMPION";
      announceChampion.appendChild(computerChampion);
    } else {
      const tieChampion = document.createElement("h1");
      tieChampion.classList.add("tie-champion");
      tieChampion.textContent = "IT'S A TIE!";
      announceChampion.appendChild(tieChampion);
    }
  }
}

// Function that creates a value between 0 1 2.
function getComputerChoice(max) {
  return Math.floor(Math.random() * max);
}

function playRound() {
  const computerChoice = getComputerChoice(3);

  // Print player
  const pickContainer = document.querySelector(".pick-container");
  pickContainer.textContent = "";

  const humanPick = document.createElement("p");
  humanPick.classList.add("human-pick");
  humanPick.textContent = `Player chose: ${humanChoice}`;

  // Convert computerChoice to string and print it out
  let computerChoiceText;
  if (computerChoice === 0) {
    computerChoiceText = "ROCK";
  } else if (computerChoice === 1) {
    computerChoiceText = "PAPER";
  } else if (computerChoice === 2) {
    computerChoiceText = "SCISSORS";
  }

  const computerPick = document.createElement("p");
  computerPick.classList.add("computer-pick");
  computerPick.textContent = `Computer chose: ${computerChoiceText}`;

  pickContainer.appendChild(humanPick);
  pickContainer.appendChild(computerPick);

  // Determine winner
  if (
    (humanChoice === "ROCK" && computerChoice === 0) ||
    (humanChoice === "PAPER" && computerChoice === 1) ||
    (humanChoice === "SCISSORS" && computerChoice === 2)
  ) {
    const tieResult = document.createElement("p");
    tieResult.classList.add("tie-result");
    tieResult.textContent = "It's a tie!";

    pickContainer.appendChild(tieResult);
  } else if (
    (humanChoice === "ROCK" && computerChoice === 2) ||
    (humanChoice === "PAPER" && computerChoice === 0) ||
    (humanChoice === "SCISSORS" && computerChoice === 1)
  ) {
    const humanWinner = document.createElement("p");
    humanWinner.classList.add("human-winner");
    humanWinner.textContent = "Human won!";

    pickContainer.appendChild(humanWinner);

    humanScore++;
  } else {
    const computerWinner = document.createElement("p");
    computerWinner.classList.add("computer-winner");
    computerWinner.textContent = "Computer won!";

    pickContainer.appendChild(computerWinner);
    computerScore++;
  }

  // Print current score
  const currentHumanScore = document.querySelector("#humanScore");
  const currentComputerScore = document.querySelector("#computerScore");

  currentHumanScore.textContent = humanScore;
  currentComputerScore.textContent = computerScore;
}

// Set up button listeners (OUTSIDE of playRound)
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
  humanChoice = "ROCK";
  playRound();
  roundCount++;
  gameOver();
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
  humanChoice = "PAPER";
  playRound();
  roundCount++;
  gameOver();
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
  humanChoice = "SCISSORS";
  playRound();
  roundCount++;
  gameOver();
});
