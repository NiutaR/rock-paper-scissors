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
    if(computerChoise <= '') {
        return 'rock';
    } else if (computerChoise <= '1' & '>=1.34') {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice(0));

