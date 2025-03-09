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


    if(roundResult.textContent === "YOU DRAW"){
      roundResult.style = "background-color: rgba(0,0,0, 0.15); color: rgb(61, 61, 61)"
    }
    else if(roundResult.textContent === "YOU LOSE"){
      roundResult.style = "background-color: rgba(255, 0, 0, 0.15); color: rgb(255, 0, 0)"
    }
    else if(roundResult.textContent === "YOU WON")[
      roundResult.style = "background-color: rgba(34, 255, 0, 0.15); color: rgb(21, 155, 0)"
    ]

    compScore.textContent = computerScore;
    yourScore.textContent = humanScore;
  }
  
  const compChoice = document.createElement("div")
  const yourChoice = document.createElement("div")
  let computerSelection;

  
  rock.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    yourChoice.textContent = `You choose ROCK`
    compChoice.textContent = `Computer choose ${computerSelection.toUpperCase()}`
  })
  
  paper.addEventListener("click", () => {
     computerSelection = getComputerChoice();
     playRound("paper", computerSelection);
     yourChoice.textContent = `You choose PAPER`
     compChoice.textContent = `Computer choose ${computerSelection.toUpperCase()}`
     
    })
    
    scissors.addEventListener("click", () => {
      computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
    yourChoice.textContent = `You choose SCISSORS`
    compChoice.textContent = `Computer choose ${computerSelection.toUpperCase()}`
    
  })
  
  const choices = document.querySelector("#choices")
  const result = document.querySelector("#result")
  choices.appendChild(yourChoice)
  choices.appendChild(compChoice)
  result.appendChild(roundResult)

}
playGame();

