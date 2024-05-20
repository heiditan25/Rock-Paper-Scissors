// Game

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const wins = {
    rock: "scissors",
    paper: "rocks",
    scissors: "paper"
  };

  if (playerSelection === computerSelection) {
    return "It's a tie! Play again.";
  }
    return wins[playerSelection] === computerSelection ?
      "You Win! " + playerSelection +" beats " + computerSelection :
      "You Lose! "+ computerSelection + " beats " + playerSelection ;
}


function playGame () {
  let playerScore = 0
  let computerScore = 0;

  for (let i = 0; i <5; i++) {
    const playerSelection = prompt("Enter your choice(rock, paper, scissors): ");
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    console.log(roundResult);

    if (roundResult.startsWith("You Win")) {
      playerScore++;
    } else if (roundResult.startsWith("You Lose")) {
      computerScore++;
    }
  }
  const winner = playerScore > computerScore ? "You Win!" : "You Lose"
  prompt("Final Score: You - " + playerScore + ",Computer - " + computerScore);
  prompt(winner);
}

playGame();