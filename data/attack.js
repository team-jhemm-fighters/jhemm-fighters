const weakAttack = {
    id: 'action1',
    name: 'Weak Attack',
    description: 'You attempt to stab your opponent!',
    minEffectiveRoll: 1,
    damage: 2,
    energyReq: 1
};

const mediumAttack = {
    id: 'action2',
    name: 'Medium Attack',
    description: 'You attempt to stab your opponent mediumly!',
    minEffectiveRoll: 2,
    damage: 3,
    energyReq: 2
};

const strongAttack = {
    id: 'action3',
    name: 'Strong Attack',
    description: 'You attempt to stab your opponent strongly!',
    minEffectiveRoll: 3,
    damage: 4,
    energyReq: 3
};

const attacks = [
    weakAttack,
    mediumAttack,
    strongAttack
];

export default attacks;