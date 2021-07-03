const getUserChoice = userInput => { 
    userInput.toLowerCase();
    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else if (userInput === '')
        console.log('Error');
    
}
getUserChoise(userInput);