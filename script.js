const playerScoreElm = document.getElementById('playerScore');
const playerChoiceElm = document.getElementById('playerChoice');
const computerScoreElm = document.getElementById('computerScore');
const computerChoiceElm = document.getElementById('computerChoice');
const resultTextElm = document.getElementById('result');

const playerRockElm = document.getElementById('playerRock');
const playerPaperElm = document.getElementById('playerPaper');
const playerScissorsElm = document.getElementById('playerScissors');
const playerLizardElm = document.getElementById('playerLizard');
const playerSpockElm = document.getElementById('playerSpock');

const allGameIcons = document.querySelectorAll('.fas');

const resetElm = document.getElementById('reset');
const versusElm = document.getElementById('vs');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

function showResetBtn() {
  versusElm.style.display = 'none';
  resetElm.style.display = 'inline-block';
}

function hideResetBtn() {
  resetElm.style.display = 'none';
  versusElm.style.display = 'inline-block';
}

function resetAll() {
  resetSelected();
  hideResetBtn();
  playerScoreNumber = 0;
  playerScoreElm.textContent = playerScoreNumber;
  computerScoreNumber = 0;
  computerScoreElm.textContent = computerScoreNumber;
  resultTextElm.textContent = 'Another game?';
}

function generateComputerChoice() {
  let randomChoice = Math.ceil(Math.random() * 5);
  switch (randomChoice) {
    case 1:
      computerChoice = 'rock';
      computerChoiceElm.className = 'fas fa-hand-rock choice';
      break;
    case 2:
      computerChoice = 'paper';
      computerChoiceElm.className = 'fas fa-hand-paper choice';
      break;
    case 3:
      computerChoice = 'scissors';
      computerChoiceElm.className = 'fas fa-hand-scissors choice';
      break;
    case 4:
      computerChoice = 'lizard';
      computerChoiceElm.className = 'fas fa-hand-lizard choice';
      break;
    case 5:
      computerChoice = 'spock';
      computerChoiceElm.className = 'fas fa-hand-spock choice';
      break;
  }
}

function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultTextElm.textContent = "It's a tie!";
    confetti.reset();
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.includes(computerChoice)) {
      resultTextElm.textContent = 'You won!';
      resultTextElm.style.visibility = 'visible';
      playerScoreNumber++;
      playerScoreElm.textContent = playerScoreNumber;
      confetti({
        spread: 180,
        colors: ['#0116ff', '#f90403', '#31f921', '#f9fb08', '#ffffff'],
        startVelocity: 35,
      });
    } else {
      resultTextElm.textContent = 'Sorry, computer won.';
      resultTextElm.style.visibility = 'visible';
      computerScoreNumber++;
      computerScoreElm.textContent = computerScoreNumber;
      confetti.reset();
    }
  }
}

function checkResult(playerChoice) {
  resetSelected();
  generateComputerChoice();
  updateScore(playerChoice);
}

function selectChoice(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case 'rock':
      playerRockElm.classList.add('selected');
      playerChoiceElm.className = 'fas fa-hand-rock choice';
      break;
    case 'paper':
      playerPaperElm.classList.add('selected');
      playerChoiceElm.className = 'fas fa-hand-paper choice';
      break;
    case 'scissors':
      playerScissorsElm.classList.add('selected');
      playerChoiceElm.className = 'fas fa-hand-scissors choice';
      break;
    case 'lizard':
      playerLizardElm.classList.add('selected');
      playerChoiceElm.className = 'fas fa-hand-lizard choice';
      break;
    case 'spock':
      playerSpockElm.classList.add('selected');
      playerChoiceElm.className = 'fas fa-hand-spock choice';
      break;
  }
  showResetBtn();
}
