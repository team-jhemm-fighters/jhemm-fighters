import { getLocalStorage } from '../common/utils.js';
const navigateButton = document.getElementById('navigate-button');



const player1Actions = getLocalStorage();
const player2Actions = getLocalStorage();

let firstPlayer = 'player1';

if (!player1Actions && !player2Actions) {
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
