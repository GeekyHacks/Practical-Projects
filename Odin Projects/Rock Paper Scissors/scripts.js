
    const Choices = ["Rock", "Paper", "Scissors"];

    function getComputerChoice() {    
        var Choice = Choices[Math.floor(Math.random() * Choices.length)];

        return Choice;
    }
    console.log(getComputerChoice(Choices));

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));