import { getLocalStorage, setPlayerProfile, findById } from '../common/utils.js';
import classes from '../data/classes.js';
import attacks from '../data/attack.js';
import defenses from '../data/defense.js';

const button = document.getElementById('submit-action');
const actionHtml = document.getElementById('actions');

// player 1 HTML + getting their data from local storage
const player1 = getLocalStorage('player1');
const player1name = document.getElementById('player-1-name');
const player1health = document.getElementById('player-1-health');
const player1energy = document.getElementById('player-1-energy');

// player 2 HTML + getting their data from local storage
const player2 = getLocalStorage('player2');
const player2name = document.getElementById('player-2-name');
const player2health = document.getElementById('player-2-health');
const player2energy = document.getElementById('player-2-energy');

// grabs the current player and whether their attack/defense options are displayed
const searchParams = new URLSearchParams(window.location.search);
const playerId = searchParams.get('id');
const currentTurn = searchParams.get('turn');

let currentPlayer = player1;
let opposingPlayer = player2;

// swaps current/opposing player depending on page url
if (playerId === 'player2') {
    currentPlayer = player2;
    opposingPlayer = player1;
}

const chosenClass = findById(classes, currentPlayer.class);

let actions;
let actionsArray;

determineTurn();

player1name.textContent = currentPlayer.name;
player1health.textContent = currentPlayer.health;
player1energy.textContent = currentPlayer.energy;

player2name.textContent = opposingPlayer.name;
player2health.textContent = opposingPlayer.health;
player2energy.textContent = opposingPlayer.energy;


// creates all available actions for a specific player while disabling unavailable ones
for (let i = 0; i < chosenClass[actionsArray].length; i++) {
    const choosableActions = findById(actions, chosenClass[actionsArray][i]);
    const actionDom = createAction(choosableActions);
    actionHtml.appendChild(actionDom);
}

// locks in player action, sets to local storage, and goes back to interim on click
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

    window.location.href = './interim.html';
});

function determineTurn() {
    if (currentTurn === 'attack') {
        actions = attacks;
        actionsArray = 'atkActions';
        button.textContent = 'Place your Attack';
    }
    else {
        actions = defenses;
        actionsArray = 'defActions';
        button.textContent = 'Ready your Defense';
    }
}

function createAction(action) {
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    label.classList.add('action');
    const radio = document.createElement('input');

    if (currentPlayer.energy < action.energyReq) {
        radio.disabled = true;
    }

    radio.type = 'radio';
    radio.name = 'action';
    radio.required = true;
    radio.value = action.id;
    label.appendChild(radio);
    const actionName = document.createElement('p');
    actionName.textContent = action.name;
    const actionDetails = document.createElement('p');
    if (currentTurn === 'attack') {
        actionDetails.textContent = `Chance To Hit:  ${action.minEffectiveRoll} | Damage: ${action.damage} | Energy Required: ${action.energyReq}`;
    } else {
        actionDetails.textContent = `Defense Rating: ${action.defenseRating} | Energy Required: ${action.energyReq}`;
    }
    const description = document.createElement('p');
    description.textContent = action.description;
    wrapper.append(actionName, description, actionDetails);
    label.append(wrapper);
    return label;
}