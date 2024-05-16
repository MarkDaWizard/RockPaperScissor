let humanScore = 0;
let computerScore = 0;



function getComputerChoice()
{
    let seedNum = Math.random();

    if (seedNum <= 0.33)
    {
        return "rock";
    }
    else if (seedNum >= 0.66)
    {
        return "paper";
    }
    else
    {
        return "scissor";
    }
}

function getHumanChoice()
{
    let humanInput = prompt("Rock, Paper or Scissor?", "rock");
    let humanChoice = humanInput.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice == computerChoice)
    {
        console.log("Tie!");
    }
    else if (humanChoice == "rock" && computerChoice =="paper"
            || humanChoice == "paper" && computerChoice == "scissor"
            || humanChoice == "scissor" && computerChoice == "rock")
    {
        console.log("You lose!");
        computerScore++;
    }
    else 
    {
        console.log("You win!");
        humanScore++;
    }

    console.log("Current score is " + humanScore + " for you & " + 
                computerScore + " for computer");
}

while (humanScore < 5 && computerScore < 5)
{
    playRound(getHumanChoice(),getComputerChoice());
}
