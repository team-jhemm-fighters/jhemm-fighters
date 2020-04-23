const recoverEnergy = {
    id: 'action0',
    name: 'Recover Energy',
    description: 'something happens',
    defenseRating: 0,
    health: 0,
    energyReq: -3
};

const silentSmokeBomb = {
    id: 'action1',
    name: 'Smoke Bomb',
    description: 'You throw a smokeBomb at your feet and hide from your attacker!',
    defenseRating: 2,
    health: 0,
    energyReq: 2
};
const silentMirrorImage = {
    id: 'action2',
    name: 'Mirror Image',
    description: 'You use your illusion skills to make a mirror image of yourself!',
    defenseRating: 4,
    health: 0,
    energyReq: 4
};
const silentDodge = {
    id: 'action3',
    name: 'Dodge',
    description: 'You attempt to slide away from your opponents attack.',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};
const casterHealingLight = {
    id: 'action7',
    name: 'Healing Light',
    description: 'You call out to your arcane powers to heal your wounds and protect you from harm.',
    defenseRating: 1,
    health: 2,
    energyReq: 2
};
const casterFrostShield = {
    id: 'action8',
    name: 'Frost Shield',
    description: 'You surround yourself with a barrier made of frost.',
    defenseRating: 3,
    health: 0,
    energyReq: 5
};
const casterLightningDodge = {
    id: 'action9',
    name: 'Lightning Dodge',
    description: 'You send lightning through your body to dodge out of the way.',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};
const brawnUnstoppable = {
    id: 'action4',
    name: 'Unstoppable',
    description: 'You plant your feet and prepare to be assaulted.',
    defenseRating: 3,
    health: 0,
    energyReq: 3
};
const brawnDodge = {
    id: 'action5',
    name: 'Dodge',
    description: 'You attempt to do a barrel roll!',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};
const brawnRaiseShield = {
    id: 'action6',
    name: 'Raise Shield',
    description: 'You raise your shield to catch an attack being sent at you.',
    defenseRating: 2,
    health: 0,
    energyReq: 2
};
const defense = [
    recoverEnergy,
    silentDodge,
    silentMirrorImage,
    silentSmokeBomb,
    brawnDodge,
    brawnRaiseShield,
    brawnUnstoppable,
    casterFrostShield,
    casterLightningDodge,
    casterHealingLight
];
export default defense;

// const defense = [
//     recoverEnergy,
//     silentWeakDodge,
//     silentMediumDodge,
//     silentStrongDodge,
//     brawnWeakDodge,
//     brawnMediumDodge,
//     brawnStrongDodge,
//     casterWeakDodge,
//     casterMediumDodge,
//     casterStrongDodge
// ];

// export default defense;