import { getLocalStorage } from '../common/utils.js';
const navigateButton = document.getElementById('navigate-button');



const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');

let firstPlayer = 'player1';

if (!player1.hasAttacked && !player2.hasAttacked) {
    const flip = Math.random();
    if (flip > .5) {
        firstPlayer = 'player2';
    }
}
navigateButton.textContent = 'Go to: ' + firstPlayer;

    
navigateButton.addEventListener('click', () => {
   
    if (firstPlayer === 'player1') {
        location.href = '../player.html?id=player1';
    } else if (firstPlayer === 'player2') {
        location.href = '../player.html?id=player2';
    }
    
        // window.location.href = '../player.html';
});
