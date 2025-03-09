function getComputerChoice() {
  let x = Math.random();

  if (x >= 0 && x < 0.33) {
    return "rock";
  }
  else if (x >= 0.33 && x < 0.66) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function playGame() {

  const compScore = document.querySelector("#computer-score")
  const yourScore = document.querySelector("#your-score")
  const roundResult = document.createElement("div")

  let humanScore = 0;
  let computerScore = 0;

  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
      roundResult.textContent = "YOU DRAW"
    }

    else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      roundResult.textContent = "YOU LOSE"
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      roundResult.textContent = "YOU WON"
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      roundResult.textContent = "YOU WON"

    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      roundResult.textContent = "YOU LOSE"

    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      roundResult.textContent = "YOU LOSE"

    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      roundResult.textContent = "YOU WON"

    }

    compScore.textContent = computerScore;
    yourScore.textContent = humanScore;
  }
  
  const compChoice = document.createElement("div")
  const yourChoice = document.createElement("div")

  rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    yourChoice.textContent = `You choose ROCK`
    compChoice.textContent = `Computer choose ${computerSelection.toUpperCase()}`
  })

  paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    yourChoice.textContent = `You choose PAPER`
    compChoice.textContent = `Computer choose ${computerSelection.toUpperCase()}`

  })

  scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
    yourChoice.textContent = `You choose SCISSORS`
    compChoice.textContent = `Computer choose ${computerSelection.toUpperCase()}`

  })

  const choices = document.querySelector("#choices")
  const result = document.querySelector("#result")
  choices.appendChild(compChoice)
  choices.appendChild(yourChoice)
  result.appendChild(roundResult)

}
playGame();

