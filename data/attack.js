const recoverEnergy = {
    id: 'action0',
    name: 'Recover Energy',
    description: 'You attempt to stab your opponent!',
    minEffectiveRoll: 0,
    damage: 0,
    energyReq: -3
};


const silentWeak = {
    id: 'action1',
    name: 'Silent Weak Attack',
    description: 'You attempt to stab your opponent!',
    minEffectiveRoll: 1,
    damage: 2,
    energyReq: 1
};

const silentMedium = {
    id: 'action2',
    name: 'Silent Medium Attack',
    description: 'You attempt to stab your opponent mediumly!',
    minEffectiveRoll: 2,
    damage: 3,
    energyReq: 2
};

const silentStrong = {
    id: 'action3',
    name: 'Silent Strong Attack',
    description: 'You attempt to stab your opponent strongly!',
    minEffectiveRoll: 3,
    damage: 4,
    energyReq: 3
};

const brawnWeak = {
    id: 'action4',
    name: 'Brawn Weak Attack',
    description: 'something happens',
    minEffectiveRoll: 3,
    damage: 4,
    energyReq: 3
};

const brawnMedium = {
    id: 'action5',
    name: 'Brawn Medium Attack',
    description: 'something happens',
    minEffectiveRoll: 3,
    damage: 4,
    energyReq: 3
};

const brawnStrong = {
    id: 'action6',
    name: 'Brawn Strong Attack',
    description: 'something happens',
    minEffectiveRoll: 3,
    damage: 4,
    energyReq: 3
};

const casterWeak = {
    id: 'action7',
    name: 'Caster Weak Attack',
    description: 'something happens',
    minEffectiveRoll: 3,
    damage: 4,
    energyReq: 3
};

const casterMedium = {
    id: 'action8',
    name: 'Caster Medium Attack',
    description: 'something happens',
    minEffectiveRoll: 3,
    damage: 4,
    energyReq: 3
};

const casterStrong = {
    id: 'action9',
    name: 'Caster Strong Attack',
    description: 'something happens',
    minEffectiveRoll: 3,
    damage: 4,
    energyReq: 3
};



const attacks = [
    recoverEnergy,
    silentWeak,
    silentMedium,
    silentStrong,
    brawnWeak,
    brawnMedium,
    brawnStrong,
    casterWeak,
    casterMedium,
    casterStrong
];

export default attacks;