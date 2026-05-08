let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let nrand = Math.floor(Math.random()*3); //gives a random number from 0 to 2 
    //console.log(nrand);
    if (nrand == 0) {
        return "rock";
    }
    else if (nrand == 1) {
        return "paper";
    }
    else if (nrand == 2) {
        return "scissors";
    }
}

let HChoice = "-";

let humanchoice = document.querySelector("#humanchoice");
humanchoice.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case "rock":
            HChoice = "rock";
            document.getElementById("HC").textContent = "You choose: rock";
            playRound (HChoice);
            break;
        case "paper":
            HChoice = "paper";
            document.getElementById("HC").textContent = "You choose: paper";
            playRound (HChoice);
            break;
        case "scissors":
            HChoice = "scissors";
            document.getElementById("HC").textContent = "You choose: scissors";
            playRound (HChoice);
            break;
    }
});

//score check to end game, hs=humanscore cs=computerscore
function scoreCheck (hs,cs) {
    if (hs === 5) {
        window.alert("You won! Press OK to play again");
        humanScore = 0;
        computerScore = 0;
        document.getElementById("scorenow").textContent = "Human: " + humanScore + " - Computer: " + computerScore;
    }
    else if (cs ===5) {
        window.alert("Computer won! Press OK to play again");
        humanScore = 0;
        computerScore = 0;
        document.getElementById("scorenow").textContent = "Human: " + humanScore + " - Computer: " + computerScore;
    }
    else {
        
    }
}

//main game loop
function playRound (HChoice) {
    const CChoice = getComputerChoice();
    document.getElementById("CC").textContent = "Your opponent choose: " + CChoice;
    if (HChoice == "rock" && CChoice == "rock") {
        document.getElementById("winner").textContent = "No one wins";
    }
    if (HChoice == "rock" && CChoice == "paper") {
        document.getElementById("winner").textContent = "The winner is: computer player";
        computerScore = computerScore+1;
        document.getElementById("scorenow").textContent = "Human: " + humanScore + " - Computer: " + computerScore;
        scoreCheck (humanScore, computerScore);
    }
    if (HChoice == "rock" && CChoice == "scissors") {
        document.getElementById("winner").textContent = "The winner is: human player";
        humanScore = humanScore+1;
        document.getElementById("scorenow").textContent = "Human: " + humanScore + " - Computer: " + computerScore;
        scoreCheck (humanScore, computerScore);
    }
    if (HChoice == "paper" && CChoice == "rock") {
        document.getElementById("winner").textContent = "The winner is: human player";
        humanScore = humanScore+1;
        document.getElementById("scorenow").textContent = "Human: " + humanScore + " - Computer: " + computerScore;
        scoreCheck (humanScore, computerScore);
    }
    if (HChoice == "paper" && CChoice == "paper") {
        document.getElementById("winner").textContent = "No one wins";
    }
    if (HChoice == "paper" && CChoice == "scissors") {
        document.getElementById("winner").textContent = "The winner is: computer player";
        computerScore = computerScore+1;
        document.getElementById("scorenow").textContent = "Human: " + humanScore + " - Computer: " + computerScore;
        scoreCheck (humanScore, computerScore);
    }
    if (HChoice == "scissors" && CChoice == "rock") {
        document.getElementById("winner").textContent = "The winner is: computer player";
        computerScore = computerScore+1;
        document.getElementById("scorenow").textContent = "Human: " + humanScore + " - Computer: " + computerScore;
        scoreCheck (humanScore, computerScore);
    }
    if (HChoice == "scissors" && CChoice == "paper") {
        document.getElementById("winner").textContent = "The winner is: human player";
        humanScore = humanScore+1;
        document.getElementById("scorenow").textContent = "Human: " + humanScore + " - Computer: " + computerScore;
        scoreCheck (humanScore, computerScore);
    }
    if (HChoice == "scissors" && CChoice == "scissors") {
        document.getElementById("winner").textContent = "No one wins";
    }
}
