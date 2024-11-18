const options = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let last_opt = 2; // 2 -> index for Scissors
    let first_opt = 0; // 0 -> index for Rock
    let choice = Math.floor(Math.random() * (last_opt - first_opt + 1) + first_opt);
    return options[choice];
}

function playRound(humanChoice, computerChoice) {
    const div = document.createElement("div");
    if(humanChoice.toLowerCase() === "rock") {
        if(computerChoice === "Rock") {
            div.textContent = `You both picked ${humanChoice}. Nobody wins the round.`;
        } else if(computerChoice === "Paper") {
            div.textContent = `Computer chose ${computerChoice}. Computer wins the round.`;
            computerScore++;
        } else if(computerChoice === "Scissors") {
            div.textContent = `Computer chose ${computerChoice}. Player wins the round.`;
            humanScore++;
        }
    } else if(humanChoice.toLowerCase() === "paper") {
        if(computerChoice === "Rock") {
            div.textContent = `Computer chose ${computerChoice}. Player wins the round.`;
            humanScore++;
        } else if(computerChoice === "Paper") {
            div.textContent = `You both picked ${humanChoice}. Nobody wins the round.`;
        } else if(computerChoice === "Scissors") {
            div.textContent = `Computer chose ${computerChoice}. Computer wins the round.`;
            computerScore++;
        }
    } else if(humanChoice.toLowerCase() === "scissors") {
        if(computerChoice === "Rock") {
            div.textContent = `Computer chose ${computerChoice}. Computer wins the round.`;
            computerScore++;
        } else if(computerChoice === "Paper") {
            div.textContent = `Computer chose ${computerChoice}. Player wins the round.`;
            humanScore++;
        } else if(computerChoice === "Scissors") {
            div.textContent = `You both picked ${humanChoice}. Nobody wins the round.`;
        }
    } else {
        div.textContent = "Invalid choice. Don't cheat!";
    }
    if(humanScore  == 5|| computerScore == 5) {
        if (humanScore > computerScore)
            alert(`You won!`);
        else
            alert(`You lost!`);
        location.reload();
    } else {
        const score = document.createElement("div");
        score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
        div.appendChild(score);
        div.style.margin = "10px 0px";
        document.body.appendChild(div);
    }
}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.style.width = "100px";
rockButton.style.margin = "10px 20px";
rockButton.style.height= "30px";

paperButton.style.width = "100px";
paperButton.style.marginRight = "20px";
paperButton.style.height= "30px";

scissorsButton.style.width = "100px";
scissorsButton.style.height= "30px";

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

let computerChoice = 0;
rockButton.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound(rockButton.textContent , computerChoice);
});

paperButton.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound(paperButton.textContent , computerChoice);
});

scissorsButton.addEventListener("click", () => {
    playRound(scissorsButton.textContent, computerChoice);
    computerChoice = getComputerChoice();
});

document.body.style.fontSize = "18px";
document.body.style.color = "white";
document.body.style.backgroundColor = "black";

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
