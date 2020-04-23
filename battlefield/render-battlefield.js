import { getLocalStorage, getTurnOne, findById } from '../common/utils.js';
import { applyDamage, isDead } from '../battlefield/battlefield-utils.js';
import attacks from '../data/attack.js';
import defense from '../data/defense.js';

// DOM elements for updated stat rendering, identical to elements/variables used on player page -- can probably be refactored along with player page dom manipulation into a renderStats() utility of some kind
const player1name = document.getElementById('player-1-name');
const player1health = document.getElementById('player-1-health');
const player1energy = document.getElementById('player-1-energy');

const player2name = document.getElementById('player-2-name');
const player2health = document.getElementById('player-2-health');
const player2energy = document.getElementById('player-2-energy');



// continuing on with battlefield-specific DOM elements...

const player1Move = document.getElementById('player1Move');
const player2Move = document.getElementById('player2Move');
const player1Description = document.getElementById('player1Description');
const player2Description = document.getElementById('player2Description');
const finalStats = document.getElementById('finalStats');
let turnOrder = getLocalStorage('TURN-PATTERN');

const roundOneDone = getTurnOne();

// When battlefield is rendered changes order of events depending on turnOrder/roundOneDone
if (roundOneDone === true) {
    if (turnOrder === 'player1First') {
        turnOrder = 'player2First';
    } else if (turnOrder === 'player2First') {
        turnOrder = 'player1First';
    }
}

// Grabs All the Stuff We Need
const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');


let arrayDamage;

if (turnOrder === 'player1First') {
    const player1AttackObject = findById(attacks, player1.attackId);
    const player2DefenseObject = findById(defense, player2.defendId);
    player1Move.textContent = `${player1.name} used ${player1AttackObject.name} against ${player2.name}!`;
    player2Move.textContent = `${player2.name} defended with ${player2DefenseObject.name}.`;
    player1Description.textContent = player1AttackObject.description;
    player2Description.textContent = player2DefenseObject.description;
    
    arrayDamage = applyDamage(player1, player2);
    
} else {
    const player1DefenseObject = findById(defense, player1.defendId);
    const player2AttackObject = findById(attacks, player2.attackId);
    player1Move.textContent = `${player1.name} defended with ${player1DefenseObject.name}.`;
    player2Move.textContent = `${player2.name} used ${player2AttackObject.name} against ${player1.name}!`;
    player1Description.textContent = player1DefenseObject.description;
    player2Description.textContent = player2AttackObject.description;
    
    arrayDamage = applyDamage(player2, player1);
} 

const randomRollNumber = arrayDamage[0];
const damageDealt = arrayDamage[1];
const numberNeeded = arrayDamage[2];
finalStats.textContent = 'The number the attacker rolled was ' + randomRollNumber + ', and they needed ' + numberNeeded + ' to hit. The defender took ' + damageDealt + ' damage.';
renderStats();


const buttonLink = document.getElementById('link-button');

buttonLink.addEventListener('click', () => {


    const player1Dead = isDead(player1.health);
    const player2Dead = isDead(player2.health); 

    let link = '';
    if (player1Dead || player2Dead) {

        link = '/results.html';
    } else {
        link = '/interim.html';

    }

    if (roundOneDone === true) {
        setRoundTwoTrue();
    }
    
    setRoundOneTrue();

    
    // location.href = link;

    location.href = '/jhemm-fighters' + link;
});

function setRoundOneTrue() {
    const temp = JSON.stringify(true);
    localStorage.setItem('round1', temp);
}
function setRoundTwoTrue() {
    const temp = JSON.stringify(true);
    localStorage.setItem('round2', temp);
}

// here's a very basic renderStats() function, to get refactoring started
function renderStats() {
    player1name.textContent = player1.name;
    player1health.textContent = player1.health;
    player1energy.textContent = player1.energy;

    player2name.textContent = player2.name;
    player2health.textContent = player2.health;
    player2energy.textContent = player2.energy;
}
