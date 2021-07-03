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
    let computerChoice = Math.random();
    if(computerChoice <= '.33') {
        return 'rock';
    } else if (computerChoice <= '.66' & '>=.34') {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == computerChoice) {
        return 'THE GAME WAS TIE!';

    }
    if (userChoice == 'rock') {
        if (computerChoice == 'paper') {
        return 'COMPUTER WON!';
        } else {
            return 'USER WON!';
        }
        
    }
    if (userChoice == 'paper') {
        if (computerChoice == 'scissors' || 'rock') {
            return 'COMPUTER WON!';

        } else {
            return 'USER WON!';
        }
    }

}
console.log(determineWinner('paper', 'rock'));

const playGame = () => {
    let userChoice = getUserChoice('rock', 'paper', 'scissors');
    let computerChoice = getComputerChoice('rock', 'paper', 'scissors');
}
console.log(userChoice);
//console.log(computerChoice);

