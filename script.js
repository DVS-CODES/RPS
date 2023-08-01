function generateComputerChoice () {
    let number= Math.floor(Math.random()*100);

    let computerSelection;
    if (number < 34) {
        computerSelection = "rock" ;
    }
    else if (number < 67 ) {
        computerSelection = "paper" ;
    }
    else {
        computerSelection = "scissors" ; 
    } return computerSelection
}



const btn = document.querySelectorAll('button')

btn.forEach(button => button.addEventListener('click', function playRound() {
    //comparing the playerSelection and computerSelection//
    let playerScore = 0;
    let computerScore =0;
    
    
    computerSelection = generateComputerChoice();  
    

    switch(button.id) {
        case 'rock':
            playerSelection = 'rock';
            break;
        case 'scissors':
            playerSelection = 'scissors';
            break;
        case 'paper':
            playerSelection = 'paper';
            break;
    }

    if (playerSelection === computerSelection) {
        
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
}))


