function getComputerChoice() {
    let nrand = Math.floor(Math.random()*3); //gives a random number from 0 to 2 
    //console.log(nrand);
    if (nrand == 0) {
        return "rock";
    }
    if (nrand == 1) {
        return "paper";
    }
    if (nrand == 2) {
        return "scissors";
    }
    //if statements to convert the random number in a choice
}

let HChoice = document.querySelector('#humanchoice');
HChoice.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            console.log('rock');
            break;
        case 'paper':
            console.log('paper');
            break;
        case 'scissors':
            console.log('scissors');
            break;
    }
});

let humanScore = 0;
let computerScore = 0;

function playRound () {
    const HChoice = getHumanChoice().toLowerCase(); //call function and lower txt cases
    console.log(HChoice);
    const CChoice = getComputerChoice();
    console.log(CChoice);
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

playRound();

//function playGame () {
  //  for (let i = 0 ; i < 5; i++) {
    // 
      //  console.log("Score: Human " + humanScore + "; " + "Computer " + computerScore);
    //}
//}

// playGame ()
// if (humanScore > computerScore){
   //     console.log("The final winner is Human Player!")
    //}
// if (computerScore > humanScore){
   //     console.log("The final winner is Computer Player!")
    //}
//if (computerScore == humanScore){
 //       console.log("There is no winner")
   // }
