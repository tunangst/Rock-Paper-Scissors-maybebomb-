//use getUserChoice('word');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log('Not a valid option, sucka');
  }
};

const getComputerChoice = () => {
  const choose = Math.floor(Math.random() * 3);
  switch (choose) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Holy Shit! You just obliterated that foo';
  } else if (userChoice === computerChoice) {
    return 'Clash! It is a tie!';
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Ohhhh, Computer got you';
      } else {
        return 'Dang son, you just smashed that guy';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'Nice! You covered his ass.';
      } else {
        return 'You got the cut, sucka';
      }
    } else {
      if (computerChoice === 'rock') {
        return 'Dang son, you just got smashed';
      } else {
        return 'You gave him the cut';
      }
    }
  }
};

const playGame = userInput => {
  const userChoice = getUserChoice(userInput);
  console.log(`you whip out some ${userChoice}s`);
  const computerChoice = getComputerChoice();
  console.log(`and your nemesis brings out some ${computerChoice}s`);
  console.log(determineWinner(userChoice, computerChoice));
};

// navigate to RockPaperScissors dir and run node
// .load rockpaperscissors.js
// type playGame('yourchoice');
