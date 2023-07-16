function getComputerChoice() {
    let number= Math.floor(Math.random()*100);
    console.log(number)
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


console.log(computerSelection)

function playRound(computerSelection, playerSelection) {
    if (playerSelection !== "Rock" &&
        playerSelection !== "Paper" && 
        playerSelection !== "Scissors") {
        message = `${playerSelection} is not a valid input, it should be rock, paper or scissors`
        alert(message);
    } else if (playerSelection === computerSelection) {
        alert("It's a tie !")
    } else if (
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")
        ) {
        let message = `The computer wins ! ${computerSelection} beats ${playerSelection} `
        alert(message);   
    } else if (
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    )   {let message = `You win ! ${playerSelection} beats ${computerSelection} `
        alert(message);
        
    }
}



function game() {
       
        playRound(computerSelection, playerSelection)
        
    
   
}

game();