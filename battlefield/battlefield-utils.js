import { findById, setPlayerProfile } from '../common/utils.js';
import attacks from '../data/attack.js';
import defense from '../data/defense.js';


export function turnOrder() {
    let nextPlayer = 'player1';
    const flip = Math.random();
    if (flip > .5) {
        nextPlayer = 'player2';
    }
    return nextPlayer;
}

export function applyDamage(attackingPlayer, defendingPlayer) {


    const damageNum = calculateDamage(attackingPlayer.attackId, defendingPlayer.defendId);

    defendingPlayer.health = defendingPlayer.health - damageNum;
console.log(damageNum);
    const energyUseAttacker = calculateEnergy(attacks, attackingPlayer.attackId);
    const energyUseDefender = calculateEnergy(defense, defendingPlayer.defendId);

    attackingPlayer.energy = attackingPlayer.energy - energyUseAttacker;
    defendingPlayer.energy = defendingPlayer.energy - energyUseDefender;

    setPlayerProfile(attackingPlayer.id, attackingPlayer);
    setPlayerProfile(defendingPlayer.id, defendingPlayer);
 
}

export function calculateDamage(attackAction, defendAction) {
    let damageNum = 0;
    const attackObject = findById(attacks, attackAction);
    const defendObject = findById(defense, defendAction);

    const randomNum = Math.ceil(Math.random() * 10);

    const hitChance = attackObject.minEffectiveRoll + defendObject.defenseRating;
console.log(attackObject.minEffectiveRoll, defendObject.defenseRating, hitChance);
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
