import { getLocalStorage, setActions } from '../common/utils.js';

const button = document.getElementById('submit-action');
const searchParams = new URLSearchParams(window.location.search);
const playerId = searchParams.get('id');
const playername = document.getElementById('name');

const temp = getLocalStorage(playerId);

playername.textContent = temp.name;



button.addEventListener('click', () => {
    const selectedAction = document.querySelector('input[type=radio]:checked');
    
    setActions(selectedAction.value);
   
});