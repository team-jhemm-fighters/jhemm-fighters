import { getLocalStorage, getActions } from '../common/utils.js';
const navigateButton = document.getElementById('navigate-button');
const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');
const actions = getActions();
// let turnCounter = 0;
let nextPlayer = 'player1';
let nextTurn = 'attack';
let turnComplete = false;
if ((player1.hasAttacked && player2.hasDefended) || (player2.hasAttacked && player1.hasDefended)){
    turnComplete = true;
}
if (!player1.hasAttacked && !player2.hasAttacked) {
    const flip = Math.random();
    if (flip > .5) {
        nextPlayer = 'player2';
    }
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} else if (player1.hasAttacked && !player2.hasDefended && !turnComplete) {
    nextPlayer = 'player2';
    nextTurn = 'defend';
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} else if (player2.hasAttacked && !player1.hasDefended && !turnComplete) {
    nextPlayer = 'player1';
    nextTurn = 'defend';
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} 
else if (actions.length === 2) {
    nextTurn = 'Battle 1a';
    nextPlayer = 'Battle 1a';
    navigateButton.textContent = nextTurn;
} 
else if (player1.hasAttacked && !player2.hasAttacked && turnComplete) {
    nextPlayer = 'player2';
    nextTurn = 'attack';
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} else if (player2.hasAttacked && !player1.hasAttacked && turnComplete) {
    nextPlayer = 'player1';
    nextTurn = 'attack';
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} else if (player2.hasAttacked && player1.hasAttacked && !player1.hasDefended && turnComplete) {
    nextPlayer = 'player1';
    nextTurn = 'defend';
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} else if (player2.hasAttacked && player1.hasAttacked && !player2.hasDefended && turnComplete) {
    nextPlayer = 'player2';
    nextTurn = 'defend';
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} else {
    nextTurn = 'Final Battle';
    nextPlayer = 'FinalBattle';
    navigateButton.textContent = nextTurn;
}
navigateButton.addEventListener('click', () => {
    if (nextPlayer === 'player1') {
        location.href = '../player.html?id=player1&turn=' + nextTurn;
    } else if (nextPlayer === 'player2') {
        location.href = '../player.html?id=player2&turn=' + nextTurn;
    } else {
        console.log(`here's the battlefield!!!!`);
        //renderBattlefield();
    }
        // window.location.href = '../player.html';
});
