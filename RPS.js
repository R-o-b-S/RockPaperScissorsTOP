function getComputerChoice() {
    let nrand = Math.floor(Math.random()*3); //gives a random number from 0 to 2 
    //console.log(nrand);
    if (nrand == 0) {
        return "Rock";
    }
    if (nrand == 1) {
        return "Paper";
    }
    if (nrand == 2) {
        return "Scissor";
    }
    //if statements to convert the random number in a choice
}

let CChoice = getComputerChoice()
console.log(CChoice)