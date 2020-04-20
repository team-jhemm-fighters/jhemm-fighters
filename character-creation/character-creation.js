import classes from '../data/classes.js';

const playerForms = document.getElementById('character-selector');





playerForms.addEventListener('submit', (event) => {
    event.preventDefault();
    const playerData = new FormData(playerForms);
    const player1Character = playerData.get('characters1');
    const player2Character = playerData.get('characters2');
    const player1Name = playerData.get('player1name');
    const player2Name = playerData.get('player2name');
    // makeusers in localstorage
    // const
    
});
