const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb'){
      return userInput;
    }else{
      console.log('Invalid option please select either: Rock, Paper or Scissors.');
    }
  };
  
  const getComputerChoice = () => {
    randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'The game was a tie';
    } else if (userChoice === 'bomb'){
      return 'Well that\'s just not fair. Player wins obviously';
    } else if(userChoice === 'rock'){
      if(computerChoice === 'scissors'){
        return 'User wins';
      } else {
        return 'Computer wins';
      }
    } else if (userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'User wins';
      } else {
        return 'Computer wins';
      }
    } else {
      if(computerChoice === 'paper'){
        return 'User wins';
      } else {
        return 'Computer wins';
      }
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log(`Player uses ${userChoice}. Computer uses ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();