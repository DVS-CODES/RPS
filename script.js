function getComputerChoice() {
    let number= Math.floor(Math.random()*100);
    
    let choice;
    if (number < 34) {
        choice = "rock" ;
    }
    else if (number < 67 ) {
        choice = "paper" ;
    }
    else {
        choice = "scissors" ; 
    }    
    return choice;
}

function playRound(computerSelection, playerSelection) {


    if (playerSelection !== "rock" &&
        playerSelection !== "paper" && 
        playerSelection !== "scissors") {
        message = `${playerSelection} is not a valid input, it should be rock, paper or scissors`
        alert(message);
    } else if (playerSelection === computerSelection) {
        alert("It's a tie !")
    } else if (
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper")
        ) {
        let message = `The computer wins ! ${computerSelection} beats ${playerSelection} `
        alert(message);   
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    )   {let message = `You win ! ${playerSelection} beats ${computerSelection} `
        alert(message);
        
    }
}



function game() {
       for (let i=0; i<5; i++) {
        let computerSelection = getComputerChoice();
        let rawInput = prompt("Please enter your choice");
        let playerSelection = rawInput.slice().toLowerCase();
        playRound(computerSelection, playerSelection);
       }
}

game();
