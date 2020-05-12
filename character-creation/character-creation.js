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
    // this could be refactored into a 'makeInitialPlayer' function
    const player1Object = makeInitialPlayer(player1Name, player1Class, player1Character, 'player1');
    const player2Object = makeInitialPlayer(player2Name, player2Class, player2Character, 'player2');

    // Sets Player Objects to Local Storage
    setPlayerProfile('player1', player1Object);
    setPlayerProfile('player2', player2Object);
}

function makeInitialPlayer(playerName, playerClass, playerCharacter, id) {
    return {
        id,
        name: playerName,
        class: playerClass,
        image: playerCharacter.image,
        health: playerCharacter.baseHp,
        energy: playerCharacter.baseEnergy,
        hasAttacked: false,
        attackId: '',
        hasDefended: false,
        defendId: ''
    };
}

