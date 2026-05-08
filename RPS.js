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

let humanScore = 0;
let computerScore = 0;

function playRound (HChoice) {
    const CChoice = getComputerChoice();
    document.getElementById("CC").textContent = "Your opponent choose: " + CChoice;
    if (HChoice == "rock" && CChoice == "rock") {
        console.log("No one wins");
    }
    if (HChoice == "rock" && CChoice == "paper") {
        console.log("Computer player wins!");
        computerScore = computerScore+1;
    }
    if (HChoice == "rock" && CChoice == "scissors") {
        console.log("Human player wins!");
        humanScore = humanScore+1;
    }
    if (HChoice == "paper" && CChoice == "rock") {
        console.log("Human player wins!");
        humanScore = humanScore+1;
    }
    if (HChoice == "paper" && CChoice == "paper") {
        console.log("No one wins");
    }
    if (HChoice == "paper" && CChoice == "scissors") {
        console.log("Computer player wins!");
        computerScore = computerScore+1;
    }
    if (HChoice == "scissors" && CChoice == "rock") {
        console.log("Computer player wins!");
        computerScore = computerScore+1;
    }
    if (HChoice == "scissors" && CChoice == "paper") {
        console.log("Human player wins!");
        humanScore = humanScore+1;
    }
    if (HChoice == "scissors" && CChoice == "scissors") {
        console.log("No one wins");
    }
}
