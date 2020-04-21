import { getLocalStorage } from '../common/utils.js';
const navigateButton = document.getElementById('navigate-button');

const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');

// let turnCounter = 0;

let nextPlayer = 'player1';
let nextTurn = 'attack';

if (!player1.hasAttacked && !player2.hasAttacked) {
    const flip = Math.random();
    if (flip > .5) {
        nextPlayer = 'player2';
    }
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} else if (player1.hasAttacked && !player2.hasDefended) {
    nextPlayer = 'player2';
    nextTurn = 'defend';
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} else if (player2.hasAttacked && !player1.hasDefended) {
    nextPlayer = 'player1';
    nextTurn = 'defend';
    navigateButton.textContent = 'Go to: ' + nextPlayer;
} else {
    nextTurn = 'Battle!';
    navigateButton.textContent = nextTurn;
}
    
navigateButton.addEventListener('click', () => {
   
    if (nextPlayer === 'player1') {
        location.href = '../player.html?id=player1&turn=' + nextTurn;
    } else if (nextPlayer === 'player2') {
        location.href = '../player.html?id=player2&turn=' + nextTurn;
    } else {
        console.log(`here's the battlefield!!!!`);
        /* set view to battlefield */
    }
    
        // window.location.href = '../player.html';
});

// battlefield functionality

// update DOM to show battlefield elements

// execute actions from players' turns

// calculate results

// only after BOTH players have attacked AND defended, reset counter to 0(?), reset players' actions in profile and action lS objects