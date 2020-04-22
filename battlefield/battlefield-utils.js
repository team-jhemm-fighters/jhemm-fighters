import { findById, setPlayerProfile } from '../common/utils.js';
import attacks from '../data/attack.js';
import defense from '../data/defense.js';


export function turnOrder() {
    let turnPattern = 'player1First';
    const flip = Math.random();
    if (flip > .5) {
        turnPattern = 'player2First';
    }
    console.log(flip, turnPattern);
    const temp = JSON.stringify(turnPattern);
    localStorage.setItem('TURN-PATTERN', temp);
}

export function applyDamage(attackingPlayer, defendingPlayer) {

    const damageNum = calculateDamage(attackingPlayer.attackId, defendingPlayer.defendId);
    defendingPlayer.health = defendingPlayer.health - damageNum;
    const energyUseAttacker = calculateEnergy(attacks, attackingPlayer.attackId);
    const energyUseDefender = calculateEnergy(defense, defendingPlayer.defendId);

    attackingPlayer.energy = attackingPlayer.energy - energyUseAttacker;
    defendingPlayer.energy = defendingPlayer.energy - energyUseDefender;
    console.log('a', attackingPlayer, 'd', defendingPlayer);

    setPlayerProfile(attackingPlayer.id, attackingPlayer);
    setPlayerProfile(defendingPlayer.id, defendingPlayer);
 
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

export function calculateEnergy(array, action) {
   
    const actionObject = findById(array, action);
    
    const energyCost = actionObject.energyReq;

    return energyCost;
}


export function isDead(hp) {
    if (hp <= 0) {
        return true;
    } else {
        return false;
    }
}

export function 