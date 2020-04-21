import { getLocalStorage, setActions, setPlayerProfile } from '../common/utils.js';

const button = document.getElementById('submit-action');
const searchParams = new URLSearchParams(window.location.search);
const playerId = searchParams.get('id');
const playername = document.getElementById('name');

const currentPlayer = getLocalStorage(playerId);

playername.textContent = currentPlayer.name;



button.addEventListener('click', () => {
    const selectedAction = document.querySelector('input[type=radio]:checked');

    currentPlayer.hasAttacked = true;
    setPlayerProfile(playerId, currentPlayer);
    setActions(selectedAction.value);

    window.location.href = '../battlefield.html';
   
});