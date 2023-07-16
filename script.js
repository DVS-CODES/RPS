function getComputerChoice() {
    //using random number generated and dividing possibilities with 33 % each between rock paper and scissors//
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
    //comparing the playerSelection and computerSelection//

    if (playerSelection !== "rock" &&
        playerSelection !== "paper" && 
        playerSelection !== "scissors") {

        //the case if user inputs things that are other than rock paper or scissors//    
        let message = `${playerSelection} is not a valid input, it should be rock, paper or scissors`;
        alert(message);
    } else if (playerSelection === computerSelection) {
        
        //if the values are same//
        alert("It's a tie !");
    } else if (
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper")
        ) {

        //when computer beats player//    
        let message = `The computer wins ! ${computerSelection} beats ${playerSelection} `;
        alert(message);   
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        )   {

        //when user beats computer//
        let message = `You win ! ${playerSelection} beats ${computerSelection} `
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
