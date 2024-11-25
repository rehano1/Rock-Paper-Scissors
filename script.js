
function getHumanChoice() {
    // Ask the user to input their choice
    let userChoice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();

    // Check if the input is valid (rock, paper, or scissors)
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice; // Return the valid choice
    } else {
        // If the input is invalid, alert the user and call the function again to get a valid choice
        console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        return getHumanChoice(); // Recursively call the function until a valid input is provided
    }
}

function getComputerChoice() {
    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // Return "rock", "paper", or "scissors" based on the random number
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


// Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Make the humanChoice case-insensitive
    // humanChoice = humanChoice.toLowerCase();
    // computerChoice = computerChoice.toLowerCase();

    // Log the choices
    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    // Determine the winner of the round
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        return "tie"; // No one wins
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You win! " + capitalizeFirstLetter(humanChoice) + " beats " + capitalizeFirstLetter(computerChoice));
        humanScore++; // Increment human score
        return "human"; // Human wins
    } else {
        console.log("You lose! " + capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(humanChoice));
        computerScore++; // Increment computer score
        return "computer"; // Computer wins
    }
}

// To track all the data globally
let humanScore = 0;
let computerScore = 0;


function playGame() {



    for (let i = 0; i < 5; i++) {


        let humanChoiceResult = "";
        let computerChoiceResult = "";

        // execute getHumanChoice function and assign the value to humanChoiceResult variable
        humanChoiceResult = getHumanChoice();

        // execute getComputerChoice function and assign the value to computerChoiceResult variable
        computerChoiceResult = getComputerChoice();


        // now both variables have values
        // pass the variable values to playRound function as a parameter
        // result value can only be "tie" or "human" or "computer"
        const result = playRound(humanChoiceResult, computerChoiceResult);

        // now check who won this round
        if (result === "human") {
            // increase human score by 1
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        // We do nothing at tie so skipped it
    }



    // check for winnner
    let winner = ""

    if (humanScore > computerScore) {
        // if human score is bigger than computer score
        winner = "Human (score " + humanScore + ")";
    } else if (humanScore < computerScore) {
        // if human score is bigger than human score
        winner = "Computer (score " + computerScore + ")";

    } else {
        // if both are same, match is tied
        winner = "Tie"
    }


    return "Winner is: " + winner;
    
}

console.log(playGame())
