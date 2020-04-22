import { getActions, getLocalStorage, getRoundOne, findById } from '../common/utils.js';
import { applyDamage, calculateDamage, calculateEnergy, isDead } from '../battlefield/battlefield-utils.js';
import attacks from '../data/attack.js';
import defense from '../data/defense.js';


const player1Move = document.getElementById('player1Move');
const player2Move = document.getElementById('player2Move');
const player1Description = document.getElementById('player1Description');
const player2Description = document.getElementById('player2Description');
const finalStats = document.getElementById('finalStats');
const turnOrder = getLocalStorage('TURN-PATTERN');

const roundOneDone = getRoundOne();

// if (turnOrder === 'player1First') {
// const player1 = getLocalStorage('player1');
// const player2 = getLocalStorage('player2');
// //} else 
// const player1 = getLocalStorage('player2');
// const player2 = getLocalStorage('player1');

const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');
const player1AttackObject = findById(attacks, player1.attackId);
const player2DefenseObject = findById(defense, player2.defendId);
const player1DefenseObject = findById(defense, player1.defendId);
const player2AttackObject = findById(attacks, player2.attackId);

if (turnOrder === 'player1First') {
    player1Move.textContent = player1AttackObject.name;
    player2Move.textContent = player2DefenseObject.name;
    player1Description.textContent = player1AttackObject.description;
    player2Description.textContent = player2DefenseObject.description;
    applyDamage(player1, player2);
} else {
    player1Move.textContent = player1DefenseObject.name;
    player2Move.textContent = player2AttackObject.name;
    player1Description.textContent = player1DefenseObject.description;
    player2Description.textContent = player2AttackObject.description;
    applyDamage(player2, player1);
}

const buttonLink = document.getElementById('link-button');


function setRoundOneTrue() {
    const temp = JSON.stringify(true);
    localStorage.setItem('round1', temp);
}
function setRoundTwoTrue() {
    const temp = JSON.stringify(true);
    localStorage.setItem('round2', temp);
}


buttonLink.addEventListener('click', () => {


    const player1Dead = isDead(player1.health);
    const player2Dead = isDead(player2.health); 

    let link = '';
    if (player1Dead || player2Dead) {
        link = '../results.html';
    } else {
        link = '../interim.html';
    }

    if (roundOneDone === true) {
        setRoundTwoTrue();
    }
    
    setRoundOneTrue();

    
    location.href = link;
});