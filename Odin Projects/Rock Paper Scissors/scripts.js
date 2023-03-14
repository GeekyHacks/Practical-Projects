
const Choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(Choices) {    
    var Choice = Choices[Math.floor(Math.random() * Choices.length)];

    return Choice;
}
console.log(getComputerChoice(Choices));