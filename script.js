/*----- constants -----*/
// Conventional case for constants is screaming snake case
const PLAYERS = {
  playerOne: 'red',
  playerTwo: 'blue',
};
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let playerH2 = document.querySelector('h2');

/*----- app's state (variables) -----*/
let currentPlayer;
let winState;
let player1Moves;
let player2Moves;

/*----- cached element references -----*/
const gameBoard = document.querySelector('#grid');
const resetBtn = document.querySelector('button');
const box = document.querySelectorAll('.box');

/*----- event listeners -----*/
gameBoard.addEventListener('click', handleClick);
resetBtn.addEventListener('click', init);

/*----- functions -----*/
function init() {
  // Initializes state variables at their starting value
  box.forEach((box) => {
    box.style.backgroundColor = 'white';
  });
  currentPlayer = PLAYERS.playerOne;
  winState = false;
  player1Moves = [];
  player2Moves = [];
  playerH2.innerText = `Click any box below to begin the game`;
}

// Kick off the game
init();

function handleClick(event) {
  updateGameBoard(event);
  updateMoves(event);
  switchCurrentPlayer();
  // win logic
}
function switchCurrentPlayer() {
  // toggles between players
  if (currentPlayer === PLAYERS.playerOne) {
    currentPlayer = PLAYERS.playerTwo;
    playerH2.innerText = `Player 2's turn`;
  } else {
    currentPlayer = PLAYERS.playerOne;
    playerH2.innerText = `Player 1's turn`;
  }
}
function updateGameBoard(event) {
  // adds the current player's token to the gameBoard
  event.target.style.backgroundColor = currentPlayer;
}
function updateMoves(event) {
  if (currentPlayer === PLAYERS.playerOne) {
    player1Moves.push(event.target.id);
    // console.log(player1Moves.sort());
  } else {
    player2Moves.push(event.target.id);
    // console.log(player2Moves.sort());
  }
}
function winGame() {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const winCondition = WINNING_COMBINATIONS[i];
    if (player1Moves.sort() === winCondition) {
      console.log(`Player One Wins!`);
    }
    if (player2Moves.sort() === winCondition) {
      console.log(`Player Two Wins!`);
    }
  }
}
winGame();
