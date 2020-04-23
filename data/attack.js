const recoverEnergy = {
    id: 'action0',
    name: 'Recover Energy',
    image: '..assets/restoreenergy.jpg',
    description: 'You attempt to stab your opponent!',
    minEffectiveRoll: 0,
    damage: 0,
    energyReq: -3
};

const silentSilentStrike = {
    id: 'action1',
    name: 'Silent Strike',
    image: '..assets/silentstrike.jpg',
    description: 'You appear behind your opponent and attempt to backstab them.',
    minEffectiveRoll: 6,
    damage: 5,
    energyReq: 4
};
const silentDaggerThrow = {
    id: 'action2',
    name: 'Dagger Throw',
    image: '..assets/daggerthrow.jpg',
    description: 'You attempt to throw a dagger at your enemy.',
    minEffectiveRoll: 3,
    damage: 1,
    energyReq: 1
};
const silentDualWielding = {
    id: 'action3',
    name: 'Dual Wielding',
    image: '..assets/dualwielding.jpg',
    description: 'You pull out your two weapons and attempt to overwhelm your opponent.',
    minEffectiveRoll: 4,
    damage: 2,
    energyReq: 2
};
const brawnBullRush = {
    id: 'action4',
    name: 'Bull Rush',
    image: '..assets/bullrush.jpg',
    description: 'You scream and with quickness rush your opponent to catch them off guard.',
    minEffectiveRoll: 5,
    damage: 2,
    energyReq: 2
};
const brawnLightStrike = {
    id: 'action5',
    name: 'Light Strike',
    image: '..assets/lightstrike.jpg',
    description: 'You attempt to strike your opponent with one of your lighter weapons.',
    minEffectiveRoll: 3,
    damage: 1,
    energyReq: 1
};
const brawnTwoHandedBlow = {
    id: 'action6',
    name: 'Two Handed Blow',
    image: '..assets/twohandedstrike.jpg',
    description: 'You pull out your gigantic two handed weapon and attempt to destroy your opponent.',
    minEffectiveRoll: 6,
    damage: 4,
    energyReq: 3
};
const casterLightningStrike = {
    id: 'action7',
    name: 'Lightning Strike',
    image: '..assets/lightningstrike.jpg',
    description: 'You use your energy to call the quick lightning!',
    minEffectiveRoll: 4,
    damage: 1,
    energyReq: 1
};
const casterFireStrike = {
    id: 'action8',
    name: 'Fire Strike',
    image: '..assets/firestrike.jpg',
    description: 'A spout of flame erupts from your hands toward your enemy.',
    minEffectiveRoll: 5,
    damage: 3,
    energyReq: 3
};
const casterBlizzard = {
    id: 'action9',
    name: 'Blizzard',
    image: '..assets/blizzard.jpg',
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

export default attacks;


