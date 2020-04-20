import classes from '../data/classes.js';
import { findById, setPlayerProfile } from '../common/utils.js';
const playerForms = document.getElementById('character-selector');





playerForms.addEventListener('submit', (event) => {
    event.preventDefault();
    const playerData = new FormData(playerForms);
    
    makeUsers(playerData);

}   
);

function makeUsers(playerData) {
    
    const player1Class = playerData.get('class1');
    const player2Class = playerData.get('class2');

    const player1Name = playerData.get('player1name');
    const player2Name = playerData.get('player2name');

    const player1Character = findById(classes, player1Class);
    const player2Character = findById(classes, player2Class);

    const playerObject1 = { 
        name: player1Name,
        class: player1Class,
        health: player1Character.baseHp,
        energy: player1Character.baseEnergy

    };
    const playerObject2 = { 
        name: player2Name,
        class: player2Class,
        health: player2Character.baseHp,
        energy: player2Character.baseEnergy
    

    };
    setPlayerProfile('player1', playerObject1);
    setPlayerProfile('player2', playerObject2);
}
