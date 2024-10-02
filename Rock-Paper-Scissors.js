function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        return "rock"
    }
    else if (choice === 2) {
        return "paper"
    }
    else if (choice === 3) {
        return "scissors"
    }
    }

function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors? ").toLowerCase()
    return input
}

function lose(a, b) {
    console.log(`You lose!, ${a} beats ${b}!`)
    computerScore += 1
    console.log(`The score is Human: ${humanScore} Computer: ${computerScore}`)
    if (computerScore == 5) {
        end = 2
    }
}

function win(a,b) {
    console.log(`You win! ${a} beats ${b}!`)
    humanScore += 1
    console.log(`The score is Human: ${humanScore} Computer: ${computerScore}`)
    if (humanScore == 5) {
        end = 1
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return console.log("It's a Tie!")
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            lose(computerChoice, humanChoice)
        }
        else if (computerChoice === "scissors") {
            win(humanChoice,computerChoice)
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            lose(computerChoice, humanChoice)
        }
        else if (computerChoice === "rock") {
            win(humanChoice, computerChoice)
        }
    }

    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            lose(computerChoice, humanChoice)
        }
        else if (computerChoice === "paper") {
            win(humanChoice, computerChoice)
        }
    }
    else {
        console.log("Not a valid option!")
    }
}

function playGame() {
    while (endGame() != true) {
        let human = getHumanChoice()
        let computer = getComputerChoice()
        playRound(human, computer)
    }
}

function endGame() {
    if (end == 1) {
        console.log("Game over! Human Wins!")
        return true
    }
    else if (end == 2) {
        console.log("Game over! Computer Wins!")
        return true
    }
}
var end = 0
var humanScore = 0;
var computerScore = 0;
playGame();

