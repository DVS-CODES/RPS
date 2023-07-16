function getComputerChoice() {
    let number= Math.floor(Math.random()*100);
    let choice;
    if (number < 34) {
        choice = "Rock" ;
    }
    else if (number < 67 ) {
        choice = "Paper" ;
    }
    else {
        choice = "Scissors" ; 
    }    
    return choice;
}



let computerSelection = getComputerChoice();
let rawInput = prompt("Please enter your choice");
let playerSelection = rawInput.charAt(0).toUpperCase() + rawInput.slice(1).toLowerCase();

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        alert("It's a tie !")
    } else if (
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")
        ) {
        alert("The computer wins !");   
    } else {
        alert("You win");
    }
}



function game() {
    playRound(computerSelection, playerSelection);
    playRound(computerSelection, playerSelection);
    playRound(computerSelection, playerSelection);
    playRound(computerSelection, playerSelection);
    playRound(computerSelection, playerSelection);
}

game();