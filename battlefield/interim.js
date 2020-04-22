import { getLocalStorage, getRoundOne, getRoundTwo, setPlayerProfile } from '../common/utils.js';

const navigateButton = document.getElementById('navigate-button');
const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');


let turnOneComplete = false;
let turnTwoComplete = false;

turnOneComplete = getRoundOne();
turnTwoComplete = getRoundTwo();

let link = '';

function turnOne(player1, player2) {
    //player 1 chooses attack
    if (!player1.hasAttacked) {
        navigateButton.textContent = 'Go to: ' + player1.name;
        link = '../player.html?id=player1&turn=attack';
        //player 2 chooses defense
    } else if (player1.hasAttacked === true && player2.hasDefended === false) {
        navigateButton.textContent = 'Go to: ' + player2.name;
        link = '../player.html?id=player2&turn=defend';
    } else {
        //battle screen
        navigateButton.textContent = 'Go to: Battle 1a';
        link = '../battlefield.html';
    }
}

function turnTwo(player1, player2) {
    if (!player1.hasAttacked) {
        navigateButton.textContent = 'Go to: ' + player1.name;
        link = '../player.html?id=player2&turn=attack';
        //player 2 chooses defense
    } else if (player1.hasAttacked === true && player2.hasDefended === false) {
        navigateButton.textContent = 'Go to: ' + player2.name;
        link = '../player.html?id=player1&turn=defend';
    } else {
        //battle screen
        navigateButton.textContent = 'Go to: Battle final this round';
        link = '../battlefield.html';
        
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

if (!turnOneComplete) {
    turnOne(player1, player2);
} else if (turnOneComplete && !turnTwoComplete) {
    turnTwo(player2, player1);
} else {
    roundComplete();
}


navigateButton.addEventListener('click', () => {
    location.href = link;
});









// let turnCounter = 0;
// let nextPlayer = 'player1';
// let nextTurn = 'attack';
// let turnComplete = false;
// if ((player1.hasAttacked && player2.hasDefended) || (player2.hasAttacked && player1.hasDefended)){
//     turnComplete = true;
// }
// if (!player1.hasAttacked && !player2.hasAttacked) {
//     const flip = Math.random();
//     if (flip > .5) {
//         nextPlayer = 'player2';
//     }
//     navigateButton.textContent = 'Go to: ' + nextPlayer;
// } else if (player1.hasAttacked && !player2.hasDefended && !turnComplete) {
//     nextPlayer = 'player2';
//     nextTurn = 'defend';
//     navigateButton.textContent = 'Go to: ' + nextPlayer;
// } else if (player2.hasAttacked && !player1.hasDefended && !turnComplete) {
//     nextPlayer = 'player1';
//     nextTurn = 'defend';
//     navigateButton.textContent = 'Go to: ' + nextPlayer;
// } 
// else if (actions.length === 2) {
//     nextTurn = 'Battle 1a';
//     nextPlayer = 'Battle 1a';
//     navigateButton.textContent = nextTurn;
// } 
// else if (player1.hasAttacked && !player2.hasAttacked && turnComplete) {
//     nextPlayer = 'player2';
//     nextTurn = 'attack';
//     navigateButton.textContent = 'Go to: ' + nextPlayer;
// } else if (player2.hasAttacked && !player1.hasAttacked && turnComplete) {
//     nextPlayer = 'player1';
//     nextTurn = 'attack';
//     navigateButton.textContent = 'Go to: ' + nextPlayer;
// } else if (player2.hasAttacked && player1.hasAttacked && !player1.hasDefended && turnComplete) {
//     nextPlayer = 'player1';
//     nextTurn = 'defend';
//     navigateButton.textContent = 'Go to: ' + nextPlayer;
// } else if (player2.hasAttacked && player1.hasAttacked && !player2.hasDefended && turnComplete) {
//     nextPlayer = 'player2';
//     nextTurn = 'defend';
//     navigateButton.textContent = 'Go to: ' + nextPlayer;
// } else {
//     nextTurn = 'Final Battle';
//     nextPlayer = 'FinalBattle';
//     navigateButton.textContent = nextTurn;
// }
