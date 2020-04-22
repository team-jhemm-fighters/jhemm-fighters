import { getLocalStorage, setActions, setPlayerProfile } from '../common/utils.js';
import attacks from '../data/attack';
import defenses from '../data/defense';

const button = document.getElementById('submit-action');
const searchParams = new URLSearchParams(window.location.search);
const playerId = searchParams.get('id');
const currentTurn = searchParams.get('turn');

const playername = document.getElementById('name');
const actionHtml = document.getElementById('actions');

const currentPlayer = getLocalStorage(playerId);

playername.textContent = currentPlayer.name;

// generate elements dynamically based on currentPlayer and currentTurn
// currentPlayer for moveset & stats
// 



for (let i = 0; i < currentPlayer.atkActions.length; i++) {
    const action = currentPlayer.atkActions[i];
    const actionDom = createAction(action);
    actionHtml.appendChild(actionDom);
}

button.addEventListener('click', () => {
    
    const selectedAction = document.querySelector('input[type=radio]:checked');

    if (currentTurn === 'attack') {
        currentPlayer.hasAttacked = true;
        currentPlayer.attackId = selectedAction.value;
    } else {
        currentPlayer.hasDefended = true;
        currentPlayer.defendId = selectedAction.value;
    }
    setPlayerProfile(playerId, currentPlayer);
    setActions(selectedAction.value);

    window.location.href = '../interim.html';
});

function createAction(action) {
    const label = document.createElement('label');
    label.classList.add('action');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'action';
    radio.required = true;
    radio.value = action.id;
    label.appendChild(radio);
    const description = document.createElement('span');
    description.textContent = action.description;
    label.appendChild(description);
    return label;
}