import classes from '../data/classes.js';
import { findById, setPlayerProfile } from '../common/utils.js';

const playerForms = document.getElementById('character-selector');


playerForms.addEventListener('submit', (event) => {
    event.preventDefault();
    // Grab Form Data
    const playerData = new FormData(playerForms);
    // Put Player Information into Local Storage
    makeUsers(playerData);
    
    window.location.href = './interim.html';
});

// Initialize makeUsers with FormData
function makeUsers(playerData) {
    
    const player1Class = playerData.get('class1');
    const player2Class = playerData.get('class2');

    const player1Name = playerData.get('player1name');
    const player2Name = playerData.get('player2name');

    const player1Character = findById(classes, player1Class);
    const player2Character = findById(classes, player2Class);
    // Player Object Structures
    const player1Object = { 
        id: 'player1',
        name: player1Name,
        class: player1Class,
        health: player1Character.baseHp,
        energy: player1Character.baseEnergy,
        hasAttacked: false,
        attackId: '',
        hasDefended: false,
        defendId: ''
    };
    const player2Object = { 
        id: 'player2',
        name: player2Name,
        class: player2Class,
        health: player2Character.baseHp,
        energy: player2Character.baseEnergy,
        hasAttacked: false,
        attackId: '',
        hasDefended: false,
        defendId: ''
    };
    // Sets Player Objects to Local Storage
    setPlayerProfile('player1', player1Object);
    setPlayerProfile('player2', player2Object);
}
