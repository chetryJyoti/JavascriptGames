// gameplay
// rock paper -->paper
// rock scissior -->rock
// paper scissor-->scissor

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resutDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    checkWinners();
  })
);

function generateComputerChoice() {
  const randomchoice = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(randomchoice);
  if (randomchoice === 1) {
    computerChoice = "Rock";
  }
  if (randomchoice === 2) {
    computerChoice = "Scissors";
  }
  if (randomchoice === 3) {
    computerChoice = "Paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function checkWinners() {
  
  if (
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    resutDisplay.innerHTML = "You won✌";
  }
  if (userChoice === computerChoice) {
    resutDisplay.innerHTML = "DRAW";
  }
  else{
    resutDisplay.innerHTML="you lost";
  }
}
