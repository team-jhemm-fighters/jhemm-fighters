import { getLocalStorage, setActions, setPlayerProfile, findById } from '../common/utils.js';
import classes from '../data/classes.js';
import attacks from '../data/attack.js';
import defenses from '../data/defense.js';

const button = document.getElementById('submit-action');
const searchParams = new URLSearchParams(window.location.search);
const playerId = searchParams.get('id');
const currentTurn = searchParams.get('turn');

const playername = document.getElementById('name');
const actionHtml = document.getElementById('actions');

const currentPlayer = getLocalStorage(playerId);
console.log(currentTurn);

playername.textContent = currentPlayer.name;

// generate elements dynamically based on currentPlayer and currentTurn
// currentPlayer for moveset & stats
// 

const chosenClass = findById(classes, currentPlayer.class);
let actions;
let actionsArray;
if (currentTurn === 'attack') {
    actions = attacks;
    actionsArray = 'atkActions';
} else {
    actions = defenses;
    actionsArray = 'defActions';
}


for (let i = 0; i < chosenClass[actionsArray].length; i++) {
    const choosableActions = findById(actions, chosenClass[actionsArray][i]);
    const actionDom = createAction(choosableActions);
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
    const actionName = document.createElement('p');
    actionName.textContent = action.name;
    const actionDetails = document.createElement('p');
    if (currentTurn === 'attack') {
        actionDetails.textContent = `Chance To Hit:  ${action.minEffectiveRoll} Damage: ${action.damage} Energy Required: ${action.energyReq}`;
    } else {
        actionDetails.textContent = `Defense Rating: ${action.defenseRating} Energy Required: ${action.energyReq}`;
    }
    const description = document.createElement('p');
    description.textContent = action.description;
    label.append(actionName, description, actionDetails);
    return label;
}