let playerScore = 0;
let computerScore =0;
let player = document.querySelector('.player-score')
let comp = document.querySelector('.comp-score')

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

function scoreKeeper () {
    if (playerScore>=5) {

        console.log('player wins')
        playerScore=0;
        computerScore=0;
    } else if (computerScore>=5) {
        console.log('computer wins')
        computerScore=0;
        playerScore=0;
    }
}

function moveComparator() {
    if (playerSelection === computerSelection) {
        
        //if the values are same//
        
    } else if (
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper")
        ) {

        //when computer beats player//    
        let message = `The computer wins ! ${computerSelection} beats ${playerSelection} `;

        computerScore +=1;
        comp.textContent = computerScore

    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        )   {

        //when user beats computer//
        let message = `You win ! ${playerSelection} beats ${computerSelection} `
        
        playerScore +=1; 
        player.textContent = playerScore 
    }
}

const btn = document.querySelectorAll('button')

btn.forEach(button => button.addEventListener('click', function playRound() {
    //comparing the playerSelection and computerSelection//
    
    
    
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

    moveComparator();
    console.log(playerScore)
    console.log(computerScore)

    scoreKeeper();
}))


