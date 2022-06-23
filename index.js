const items = ['rock', 'paper', 'scissors']

function computerPlay(pick) {
    return items[pick]
}

function playRound() {
    let randomNumber = Math.floor(Math.random() * 3)
    playerSelection = window.prompt("rock, paper, or scissors: ")
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerPlay(randomNumber)

    if (playerSelection === computerSelection) {
        return 0
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 2
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 3
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return 4
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return 5
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return 6
    }
}

function renderGame() {
    let playerScore = 0
    let computerScore = 0
    for (i = 0; i < 5; i++){
        let round = playRound()

        if (round === 0) {
            playerScore++
            computerScore++
        } else if (round < 3) {
            playerScore++
        } else {
            computerScore++
        }
        console.log("Your score: " + playerScore + ", Computer score: " + computerScore) 

        switch (round) {
            case 0: console.log("Tie!")
                break;
            case 1: console.log("Rock smashes scissors! You win!")
                break;
            case 2: console.log("Paper covers rock, You win!")
                break;
            case 3: console.log("Scissors cuts paper! You win!")
                break;
            case 4: console.log("Scissors gets smashed by rock, You lose!")
                break;
            case 5: console.log("Rock gets covered by paper, You lose!")
                break;
            case 6: console.log("Paper gets cut by scissors, You lose!")
                break;
        }

    }
    if (playerScore === computerScore) {
        console.log("The match was a tie!")
    } else if (playerScore > computerScore) {
        console.log("Congratulations, you won the match!")
    } else {
        console.log("You lost the match")
    }
    
}
renderGame()

