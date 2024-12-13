function getComputerChoice() {
  let x = Math.floor(Math.random() * 100) + 1;

  if (x >= 1 && x < 33) {
    return "rock";
  }
  else if (x >= 33 && x < 66) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;
  
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  const result = document.querySelector("#result");

  const moves = document.createElement("div");
  result.appendChild(moves);
  const roundWinner = document.createElement("div");
  result.appendChild(roundWinner);
  let winner = document.createElement("div");
  result.appendChild(winner);

  const humanScoreDisplay = document.querySelector("#humanScore");
  const computerScoreDisplay = document.querySelector("#computerScore")

  function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
     roundWinner.textContent = "Tie! Play again";
    }

    else if (humanChoice == "rock" && computerChoice == "paper") {
      roundWinner.textContent = "You lose! Paper beats Rock";
      computerScore++;
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
      roundWinner.textContent = "You Won! Rock beats scissors";
      humanScore++;
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
      roundWinner.textContent = ("You won! Paper beats Rock");
      humanScore++;
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
      roundWinner.textContent = ("You Lose! Scissors beats Paper");
      computerScore++;
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
      roundWinner.textContent = ("You Lose! Rock beats scissors");
      computerScore++;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
      roundWinner.textContent = ("You Won! Scissors beats Paper");
      humanScore++;
    }
    humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
    

    if(humanScore == 5){
      winner.textContent = `Human Wins by (${humanScore} - ${computerScore})`
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
    }

    else if(computerScore == 5){
      winner.textContent = `Computer Wins by (${computerScore} - ${humanScore})`
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
    }
  }

  rock.addEventListener("click", ()=>{
    let humanSelection = "rock";
    let computerSelection = getComputerChoice();
    moves.textContent = `
    Human Move: ${humanSelection} and
    Computer Move: ${computerSelection}
    `
    playRound(humanSelection, computerSelection);
  })

  paper.addEventListener("click", ()=>{
    let humanSelection = "paper";
    let computerSelection = getComputerChoice();
    moves.textContent = `
    Human Move: ${humanSelection} and
    Computer Move: ${computerSelection}
    `
    playRound(humanSelection, computerSelection); 
  })

  scissors.addEventListener("click", ()=>{
    let humanSelection = "scissors";
    let computerSelection = getComputerChoice();
    moves.textContent = `
    Human Move: ${humanSelection} and
    Computer Move: ${computerSelection}
    `
    playRound(humanSelection, computerSelection);
  })

 const reset = document.querySelector("#reset");
 reset.addEventListener("click", ()=>{
  humanScore = 0;
  computerScore = 0;
  humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
  roundWinner.textContent = '';
  winner.textContent = "";
  moves.textContent = "";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
 })

}
playGame();

