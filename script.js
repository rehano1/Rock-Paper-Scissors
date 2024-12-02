

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  
    let resultMessage = `You chose ${playerSelection}, computer chose ${computerSelection}. `;
  
    // Determine the outcome
    if (playerSelection === computerSelection) {
      resultMessage += "It's a tie!";
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      resultMessage += "You win!";
      playerScore++;
    } else {
      resultMessage += "You lose!";
      computerScore++;
    }

  // Update results and scores in the DOM
  document.getElementById("results").textContent = resultMessage;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  // Check if a player has won the game
  checkWinner();
}

// Function to check for a winner
function checkWinner() {
  const winnerDiv = document.getElementById("winner");

  if (playerScore === 5) {
    winnerDiv.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    winnerDiv.textContent = "Sorry! The computer won the game.";
    disableButtons();
  }
}

// Function to disable buttons once the game ends
function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}
// Add event listeners to the buttons
document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));

