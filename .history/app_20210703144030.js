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
    } else (computerChoise <= '1.66' & '>=1.34') {
        return 'paper';
    } else if {
        return 'scissors';
    }
}
console.log(getComputerChoice());

