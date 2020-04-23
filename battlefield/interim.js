import { getLocalStorage, getTurnOne, getTurnTwo, setPlayerProfile } from '../common/utils.js';
import { turnOrder } from '../battlefield/battlefield-utils.js';
//Pull Elements From HTML
const navigateButton = document.getElementById('navigate-button');
const nextPlayerSpan = document.getElementById('next-player-span');
const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');

if (!player1.hasAttacked && !player2.hasAttacked) {
    turnOrder();
}
// Get Player Data from Local Storage
const turnPattern = getLocalStorage('TURN-PATTERN');

// At the start of a round both turns should be false
let turnOneComplete = false;
let turnTwoComplete = false;

// If we went to the battlefield and came back once
turnOneComplete = getTurnOne();
// If we go to the battle field and cam
turnTwoComplete = getTurnTwo();

let link = '/interim.html';


// Conditional Turn Logic lasts until round reset
if (turnPattern === 'player1First') {
    if (!turnOneComplete) {
        turn(player1, player2);
    } else if (turnOneComplete && !turnTwoComplete) {
        turn(player2, player1);
    } else {
        roundComplete();
    }
} else {
    if (!turnOneComplete) {
        turn(player2, player1);
    } else if (turnOneComplete && !turnTwoComplete) {
        turn(player1, player2);
    } else {
        roundComplete();
    }
}
// Link gets updated in conditional turn logic
navigateButton.addEventListener('click', () => {
    location.href = '/jhemm-fighters' + link;
    //location.href = link;
    
});



function turn(attacker, defender) {
    //change to better variable names i.e. attacker = firstPlayer
    //player 1 chooses attack
    if (!attacker.hasAttacked) {
        nextPlayerSpan.textContent = 'The next action will be done by ' + attacker.name + '. Pass the device to them before continuing!';
        navigateButton.textContent = 'Go to ' + attacker.name + '\'s turn';
        link = '/player.html?id=' + attacker.id + '&turn=attack';
      
        //player 2 chooses defense
    } else if (attacker.hasAttacked && !defender.hasDefended) {
        nextPlayerSpan.textContent = 'The next action will be done by ' + defender.name + '. Pass the device to them before continuing!';
        navigateButton.textContent = 'Go to ' + defender.name + '\'s turn';
        link = '/player.html?id=' + defender.id + '&turn=defend';
    } else {
        //battle screen
        nextPlayerSpan.textContent = 'Both players have acted -- it\'s time to fight!';
        navigateButton.textContent = 'Go to this rounds battle!';
        link = '/battlefield.html';
    }
}

function roundComplete() {
    
    localStorage.removeItem('round1');
    localStorage.removeItem('round2');

    player1.hasAttacked = false;
    player1.hasDefended = false;

    player2.hasDefended = false;
    player2.hasAttacked = false;

    player1.attackId = '';
    player1.defendId = '';

    player2.attackId = '';
    player2.defendId = '';

    setPlayerProfile('player1', player1);
    setPlayerProfile('player2', player2);
    

}
