const recoverEnergy = {
    id: 'action0',
    name: 'Recover Energy',
    description: 'You attempt to stab your opponent!',
    minEffectiveRoll: 0,
    damage: 0,
    energyReq: -3
};

const silentSilentStrike = {
    id: 'action1',
    name: 'Silent Strike',
    description: 'You appear behind your opponent and attempt to backstab them.',
    minEffectiveRoll: 6,
    damage: 5,
    energyReq: 4
};
const silentDaggerThrow = {
    id: 'action2',
    name: 'Dagger Throw',
    description: 'You attempt to throw a dagger at your enemy.',
    minEffectiveRoll: 3,
    damage: 1,
    energyReq: 1
};
const silentDualWielding = {
    id: 'action3',
    name: 'Dual Wielding',
    description: 'You pull out your two weapons and attempt to overwhelm your opponent.',
    minEffectiveRoll: 4,
    damage: 2,
    energyReq: 2
};
const brawnBullRush = {
    id: 'action4',
    name: 'Bull Rush',
    description: 'You scream and with quickness rush your opponent to catch them off guard.',
    minEffectiveRoll: 5,
    damage: 2,
    energyReq: 2
};
const brawnLightStrike = {
    id: 'action5',
    name: 'Light Strike',
    description: 'You attempt to strike your opponent with one of your lighter weapons.',
    minEffectiveRoll: 3,
    damage: 1,
    energyReq: 1
};
const brawnTwoHandedBlow = {
    id: 'action6',
    name: 'Two Handed Blow',
    description: 'You pull out your gigantic two handed weapon and attempt to destroy your opponent.',
    minEffectiveRoll: 6,
    damage: 4,
    energyReq: 3
};
const casterLightningStrike = {
    id: 'action7',
    name: 'Lightning Strike',
    description: 'You use your energy to call the quick lightning!',
    minEffectiveRoll: 4,
    damage: 1,
    energyReq: 1
};
const casterFireStrike = {
    id: 'action8',
    name: 'Fire Strike',
    description: 'A spout of flame erupts from your hands toward your enemy.',
    minEffectiveRoll: 5,
    damage: 3,
    energyReq: 3
};
const casterBlizzard = {
    id: 'action9',
    name: 'Blizzard',
    description: 'You freeze the water in the air and call down a blizzard.',
    minEffectiveRoll: 3,
    damage: 5,
    energyReq: 7
};
const attacks = [
    recoverEnergy,
    silentDaggerThrow,
    silentDualWielding,
    silentSilentStrike,
    brawnBullRush,
    brawnLightStrike,
    brawnTwoHandedBlow,
    casterBlizzard,
    casterFireStrike,
    casterLightningStrike
];



// const attacks = [
//     recoverEnergy,
//     silentWeak,
//     silentMedium,
//     silentStrong,
//     brawnWeak,
//     brawnMedium,
//     brawnStrong,
//     casterWeak,
//     casterMedium,
//     casterStrong
// ];

export default attacks;


