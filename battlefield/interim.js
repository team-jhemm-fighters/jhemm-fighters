import { getLocalStorage, getTurnOne } from '../common/utils.js';
import { turnOrder } from '../battlefield/battlefield-utils.js';
//Pull Elements From HTML
const navigateButton = document.getElementById('navigate-button');
const nextPlayerSpan = document.getElementById('next-player-span');
const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');
let turnOneComplete = false;
let turnTwoComplete = false;
// If we went to the battlefield and came back once
turnOneComplete = getTurnOne();

if (!player1.hasAttacked && !player2.hasAttacked) {
    turnOrder();
}

// Get Player Data from Local Storage
const turnPattern = getLocalStorage('TURN-PATTERN');

let link = '/interim.html';

// Conditional Turn Logic lasts until round reset
if (turnPattern === 'player1First') {
    if (!turnOneComplete) {
        turn(player1, player2);
    } else if (turnOneComplete && !turnTwoComplete) {
        turn(player2, player1);
    } 
} else {
    if (!turnOneComplete) {
        turn(player2, player1);
    } else if (turnOneComplete && !turnTwoComplete) {
        turn(player1, player2);
    } 
}
// Link gets updated in conditional turn logic
navigateButton.addEventListener('click', () => {
    // to make work on github pages
    // location.href = '/jhemm-fighters' + link;
    // to make work locally
    location.href = link;
});

function turn(attacker, defender) {
    // if attacker hasn't attacked show options
    if (!attacker.hasAttacked) {
        nextPlayerSpan.textContent = 'The next action will be done by ' + attacker.name + '. Pass the device to them before continuing!';
        navigateButton.textContent = 'Go to ' + attacker.name + '\'s turn';
        link = '/player.html?id=' + attacker.id + '&turn=attack';
      
        // if attacker has attacked and defender hasn't defended show defense options
    } else if (attacker.hasAttacked && !defender.hasDefended) {
        nextPlayerSpan.textContent = 'The next action will be done by ' + defender.name + '. Pass the device to them before continuing!';
        navigateButton.textContent = 'Go to ' + defender.name + '\'s turn';
        link = '/player.html?id=' + defender.id + '&turn=defend';
    } else {
        // battle screen
        nextPlayerSpan.textContent = 'Both players have acted -- it\'s time to fight!';
        navigateButton.textContent = 'Go to this rounds battle!';
        link = '/battlefield.html';
    }
}