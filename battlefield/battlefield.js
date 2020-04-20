import { getLocalStorage } from '../common/utils.js';
const navigateButton = document.getElementById('navigate-button');

const player1Actions = getLocalStorage();
const player2Actions = getLocalStorage();

if (!player1Actions && !player2Actions) {
    let coin = 'tails';
    const flip = Math.random();
    if (flip > .5) {
        coin = 'heads';
    }
    console.log(coin);
}