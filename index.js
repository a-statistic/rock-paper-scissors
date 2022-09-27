const items = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0
const textBox = document.querySelector('div')
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', function(e) {
        playRound(e.target.className)
        if(computerScore ===5 && playerScore === 5){
            textBox.textContent = "The match was a tie!"
            computerScore = 0;
            playerScore = 0;
        }
        if(playerScore === 5){
            textBox.textContent = "Congratulations, you won the match!"
            computerScore = 0;
            playerScore = 0;
        }
        else if (computerScore === 5){
            textBox.textContent = "You lost the match"
            computerScore = 0;
            playerScore = 0;
        }
        else{
            textBox.textContent = "Your score: " + playerScore + ", Computer score: " + computerScore
        }
    }))

function computerPlay(pick) {
    return items[pick]
}

function playRound(selection) {
    let randomNumber = Math.floor(Math.random() * 3)
    playerSelection = selection
    computerSelection = computerPlay(randomNumber)

    if (playerSelection === computerSelection) {
        console.log("Tie!")
        playerScore++;
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        textBox.textContent = "Rock smashes scissors! You win!"
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ctextBox.textContent = "Paper covers rock, You win!"
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        textBox.textContent = "Scissors cuts paper! You win!"
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        textBox.textContent = "Scissors gets smashed by rock, You lose!"
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        textBox.textContent = "Rock gets covered by paper, You lose!"
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        textBox.textContent = "Paper gets cut by scissors, You lose!"
        computerScore++;
    }
}



