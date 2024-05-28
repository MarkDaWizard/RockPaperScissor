//ROCK PAPER SCISSOR
let humanScore = 0;
let computerScore = 0;

let humanScoreDisplay = document.getElementById("humanScore");
let computerScoreDisplay = document.getElementById("computerScore");
let resultDisplay = document.getElementById("resultDisplay");

addListenerToButtons();

function getComputerChoice() {
    let seedNum = Math.random();

    if (seedNum <= 0.3333) {
        return "rock";
    }
    else if (seedNum >= 0.6666) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

//Update the result display after each rounds, showing choices and scores
function updateResult(victor, computerChoice, humanChoice) {

    switch (victor) {
        case "none":
            resultDisplay.textContent = "Tie!";
            break;

        case "computer":
            resultDisplay.textContent = " " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) +
                " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + "! Computer win this round!";
            computerScore++;
            computerScoreDisplay.textContent = "Computer Score: " + computerScore;
            break;

        case "human":
            resultDisplay.textContent = " " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) +
                " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + "! Human win this round!";
            humanScore++;
            humanScoreDisplay.textContent = "Human Score: " + humanScore;
            break;

        default:
            console.log("Invalid victor");
            break;

    }
    if (humanScore >= 5) {
        resultDisplay.textContent = "GAME OVER! HUMAN WIN!";
        removeButtons();
    }
    else if (computerScore >= 5) {
        resultDisplay.textContent = "GAME OVER! COMPUTER WIN!";
        removeButtons();
    }
}

//Remove all buttons once there's a victor
function removeButtons() {
    let buttonContainer = document.querySelector(".buttonContainer");
    buttonContainer.remove();
}

//Start a single round upon a button click
function playRound() {

    let humanChoice = this.toLowerCase();
    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        updateResult("none", computerChoice, humanChoice);
    }
    else if (humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "scissor"
        || humanChoice == "scissor" && computerChoice == "rock") {
        updateResult("computer", computerChoice, humanChoice);
    }
    else {
        updateResult("human", computerChoice, humanChoice);
    }
}


function addListenerToButtons() {
    let playButton = document.getElementsByClassName("btn");

    for (let button of playButton) {
        button.addEventListener("click", playRound.bind(button.id));
        console.log("adding listener");
    }
}


