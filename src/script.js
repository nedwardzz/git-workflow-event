const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 1;
const totalRounds = 10;
const nextRoundButton = document.getElementById("next-round");
const choiceButtons = document.querySelectorAll(".choice");

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (nextRoundButton.style.display === "none") { // Only allow a choice if "Next Round" is hidden
            const playerChoice = button.dataset.choice;
            playRound(playerChoice);
        }
    });
});

nextRoundButton.addEventListener("click", () => {
    nextRoundButton.style.display = "none"; // Hide "Next Round" button after advancing
    enableChoiceButtons(); // Re-enable choices for the next round
    round++;
    if (round > totalRounds) {
        displayFinalWinner();
    }
});

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
    updateScore(result);
    disableChoiceButtons(); // Disable choices after a round is played

    if (round <= totalRounds) {
        nextRoundButton.style.display = "block"; // Show "Next Round" button after a choice is made
    }
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) return "draw";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function displayResult(playerChoice, computerChoice, result) {
    const resultDiv = document.getElementById("result");
    if (result === "draw") {
        resultDiv.textContent = `Round ${round}: It's a draw! You both chose ${playerChoice}.`;
    } else if (result === "player") {
        resultDiv.textContent = `Round ${round}: You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultDiv.textContent = `Round ${round}: You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function updateScore(result) {
    if (result === "player") {
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
    } else if (result === "computer") {
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }
}

function displayFinalWinner() {
    const resultDiv = document.getElementById("result");
    if (playerScore > computerScore) {
        resultDiv.textContent = `Game over! You win the game with a score of ${playerScore} to ${computerScore}.`;
    } else if (computerScore > playerScore) {
        resultDiv.textContent = `Game over! The computer wins with a score of ${computerScore} to ${playerScore}.`;
    } else {
        resultDiv.textContent = `Game over! It's a tie with a score of ${playerScore} to ${computerScore}.`;
    }
    resetGame();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function disableChoiceButtons() {
    choiceButtons.forEach(button => button.disabled = true);
}

function enableChoiceButtons() {
    choiceButtons.forEach(button => button.disabled = false);
}
