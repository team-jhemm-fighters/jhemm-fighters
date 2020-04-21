import { getLocalStorage, setActions, setPlayerProfile } from '../common/utils.js';

const button = document.getElementById('submit-action');
const searchParams = new URLSearchParams(window.location.search);
const playerId = searchParams.get('id');
const currentTurn = searchParams.get('turn');

const playername = document.getElementById('name');

const currentPlayer = getLocalStorage(playerId);

playername.textContent = currentPlayer.name;

// generate elements dynamically based on currentPlayer and currentTurn
// currentPlayer for moveset & stats
// 

button.addEventListener('click', () => {
    const selectedAction = document.querySelector('input[type=radio]:checked');

    if (currentTurn === 'attack') {
        currentPlayer.hasAttacked = true;
    } else {
        currentPlayer.hasDefended = true;
    }
    setPlayerProfile(playerId, currentPlayer);
    setActions(selectedAction.value);

    window.location.href = '../battlefield.html';
});