import { getActions, getLocalStorage, findById, getRoundOne, getRoundTwo } from '../common/utils.js';
import attacks from '../data/attack.js';
import defense from '../data/defense.js';
const buttonLink = document.getElementById('link-button');

const actions = getActions();
const player1 = getLocalStorage('player1');
const player2 = getLocalStorage('player2');

function setRoundOneTrue() {
    const temp = JSON.stringify(true);
    localStorage.setItem('round1', temp);
}
function setRoundTwoTrue() {
    const temp = JSON.stringify(true);
    localStorage.setItem('round2', temp);
}


buttonLink.addEventListener('click', () => {

    const roundOneDone = getRoundOne();

    if (roundOneDone === true) {
        setRoundTwoTrue();
    }
    
    setRoundOneTrue();

    location.href = '../interim.html';
});

export function renderBattlefield(a, b) {

    if (actions.length === 2) {
        const damageDone = calculateDamage(player1.attackId, player2.defendId);
    } else if (actions.length === 4) {
    
    }
}

export function calculateDamage(attackAction, defendAction) {
    let damageNum = 0;
    const attackObject = findById(attacks, attackAction);
    const defendObject = findById(defense, defendAction);

    const randomNum = Math.ceil(Math.random() * 10);

    const hitChance = attackObject.minEffectiveRoll + defendObject.defenseRating;

    if (hitChance < randomNum) {
        // attack hits
        damageNum = attackObject.damage;
    }
    
    return damageNum;
}