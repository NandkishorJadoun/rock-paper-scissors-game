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

function getHumanChoice() {
  let x = prompt("Type rock/paper/scissors", "");
  if(x == null){
    return("invalid input");
  }

  else{
  return x;
  }
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;
  
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
      console.log("Tie")
    }

    else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You Won! Rock beats scissors");
      humanScore++;
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You won! Paper beats Rock");
      humanScore++;
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You Lose! Scissors beats Paper");
      computerScore++;
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You Lose! Rock beats scissors");
      computerScore++;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You Won! Scissors beats Paper");
      humanScore++;
    }
    else {
      console.log("Please choose rock/paper//scissors");
    }
  }

  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.group("result:");

  console.log(`Your score: ${humanScore}\nComputer's score: ${computerScore}`)

  if (humanScore > computerScore) {
      console.log("You win the game!")
  } else if (computerScore > humanScore) {
      console.log("You lose the game!")
  } else {
      console.log("It's a tie!")
  }
  console.groupEnd("result:");
}

playGame();