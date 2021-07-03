const getUserChoice = userInput => { 
    
    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else if (userInput === '') {
        console.log('Error');
    }
}
console.log(getUserChoice(''.toLowerCase()));


const getComputerChoice = () => {
    let computerChoise = Math.random();
    if(computerChoise <= '.33') {
        return 'rock';
    } else if (computerChoise <= '.66' & '>=.34') {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoise) {
    if (userChoice == computerChoise) {
        return 'THE GAME WAS TIE!';

    }
    if (userChoice == 'rock') {
        if (computerChoise == 'paper') {
        return 'COMPUTER WON!';
        } else {
            return 'USER WON!';
        }
        
    }
    if (userChoice == 'paper') {
        if (computerChoise == 'scissors' || '')
    }

}

