const Choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  var Choice = Choices[Math.floor(Math.random() * Choices.length)];

  return Choice;
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {

 

  // your code here!
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  

var result = "";

  if (player === computer) {
 result= "Draw, try again";
  }
  if (player === "rock" && computer === "scissors") {
     result="You Win! Rock beats Scissors";
  }
  if (player === "rock" && computer === "paper") {
     result="You Lose! Paper beats Rock";
  }
  if (player === "paper" && computer === "scissors") {
     result="You Lose! Scissors beats Paper";
  }
  if (player === "paper" && computer === "rock") {
    console.log("You Win! Paper beats Rock");
  }
  if (player === "scissors" && computer === "paper") {
     result="You Win! Scissors beats Paper";
  }
  if (player === "scissors" && computer === "rock") {
     result="You Lose! Rock beats Scissors";
  }
  return result;
}

console.log(playRound(playerSelection, computerSelection));
