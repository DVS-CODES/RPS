function getComputerChoice() {
    number= Math.floor(Math.random()*100);
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

let computerChoice = getComputerChoice();
console.log(computerChoice)