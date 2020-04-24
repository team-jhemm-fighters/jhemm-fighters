import { getLocalStorage, findById } from '../common/utils.js';
import { isDead } from '../battlefield/battlefield-utils.js';
import classes from '../data/classes.js';
// classes to modify
const player1Profile = document.getElementById('player1');
const player2Profile = document.getElementById('player2');

// player 1 html
const player1Image = document.getElementById('player-1-picture');
const player1Name = document.getElementById('player-1-name');
const player1Class = document.getElementById('player-1-class');
const player1Hp = document.getElementById('player-1-hp');
const player1Energy = document.getElementById('player-1-energy');
// player 2 html
const player2Image = document.getElementById('player-2-picture');
const player2Name = document.getElementById('player-2-name');
const player2Class = document.getElementById('player-2-class');
const player2Hp = document.getElementById('player-2-hp');
const player2Energy = document.getElementById('player-2-energy');

// DOM elements to add fun images to overlay onto the winner/loser
const player1Flair = document.getElementById('player-1-flair');
const player2Flair = document.getElementById('player-2-flair');

// other html
const resetButton = document.getElementById('reset');


const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');

const player1Dead = isDead(player1.health);

if (player1Dead === true) {
    player1Profile.classList.add('loser');
    player2Profile.classList.add('winner');

    // change overlay images
    player1Flair.src = '/jhemm-fighters/assets/skull.png';
    player2Flair.src = '/jhemm-fighters/assets/laurels.png';

} else {
    player2Profile.classList.add('loser');
    player1Profile.classList.add('winner');

    // change overlay images
    player1Flair.src = '/jhemm-fighters/assets/laurels.png';
    player2Flair.src = '/jhemm-fighters/assets/skull.png';
}

const player1ClassObject = findById(classes, player1.class);
const player2ClassObject = findById(classes, player2.class);


// player 1 content modification
player1Image.src = player1ClassObject.image;
player1Name.textContent = player1.name;
player1Class.textContent = player1.class;
player1Hp.textContent = player1.health;
player1Energy.textContent = player1.energy;

// player 2 content modification
player2Image.src = player2ClassObject.image;
player2Name.textContent = player2.name;
player2Class.textContent = player2.class;
player2Hp.textContent = player2.health;
player2Energy.textContent = player2.energy;

resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = './index.html';
});