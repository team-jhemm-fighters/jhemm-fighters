import { getLocalStorage } from '../common/utils.js';
const navigateButton = document.getElementById('navigate-button');



const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');

let nextPlayer = 'player1';

if (!player1.hasAttacked && !player2.hasAttacked) {
    const flip = Math.random();
    if (flip > .5) {
        nextPlayer = 'player2';
    }
} else if (player1.hasAttacked && !player2.hasAttacked) {
    nextPlayer = 'player2';
} else if (player2.hasAttacked && !player1.hasAttacked) {
    nextPlayer = 'player1';
} else {
    nextPlayer = 'Battle!';
}

navigateButton.textContent = 'Go to: ' + nextPlayer;

    
navigateButton.addEventListener('click', () => {
   
    if (nextPlayer === 'player1') {
        location.href = '../player.html?id=player1';
    } else if (nextPlayer === 'player2') {
        location.href = '../player.html?id=player2';
    } else {
        console.log(`here's the battlefield!!!!`);
        /* set view to battlefield */
    }
    
        // window.location.href = '../player.html';
});
