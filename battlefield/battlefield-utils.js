import { findById, setPlayerProfile } from '../common/utils.js';
import attacks from '../data/attack.js';
import defense from '../data/defense.js';

// function to generate which player will go first
export function turnOrder() {
    let turnPattern = 'player1First';
    const flip = Math.random();
    if (flip > .5) {
        turnPattern = 'player2First';
    }
    const temp = JSON.stringify(turnPattern);
    localStorage.setItem('TURN-PATTERN', temp);
}

// change health and energy based on battle results
export function applyBattleResults(attackingPlayer, defendingPlayer) {

    const damageNum = calculateDamage(attackingPlayer.attackId, defendingPlayer.defendId);
    defendingPlayer.health = defendingPlayer.health - damageNum[1];

    const energyUseAttacker = calculateEnergy(attacks, attackingPlayer.attackId);
    const energyUseDefender = calculateEnergy(defense, defendingPlayer.defendId);

    attackingPlayer.energy = attackingPlayer.energy - energyUseAttacker;
    defendingPlayer.energy = defendingPlayer.energy - energyUseDefender;
   
    setPlayerProfile(attackingPlayer.id, attackingPlayer);
    setPlayerProfile(defendingPlayer.id, defendingPlayer);
    return damageNum;
}

export function calculateDamage(attackAction, defendAction) {
    let damageNum = 0;
    const attackObject = findById(attacks, attackAction);
    const defendObject = findById(defense, defendAction);
    const randomNum = Math.ceil(Math.random() * 10);
    
    // calculate number attacker needs to hit
    const hitChance = attackObject.minEffectiveRoll + defendObject.defenseRating;

    if (hitChance <= randomNum) {
        // attack hits
        damageNum = attackObject.damage;
    }
    const numbers = [randomNum, damageNum, hitChance];
    return numbers;
}

export function calculateEnergy(array, action) {
    const actionObject = findById(array, action);
    const energyCost = actionObject.energyReq;

    return energyCost;
}

// checks whether hp is 0 or below
export function isDead(hp) {
    if (hp <= 0) {
        return true;
    } else {
        return false;
    }
}

// reset our state on certain objects
export function roundComplete(player1, player2) {
    localStorage.removeItem('round1');

    player1.hasAttacked = false;
    player1.hasDefended = false;

    player2.hasDefended = false;
    player2.hasAttacked = false;

    player1.attackId = '';
    player1.defendId = '';

    player2.attackId = '';
    player2.defendId = '';

    setPlayerProfile('player1', player1);
    setPlayerProfile('player2', player2);
}