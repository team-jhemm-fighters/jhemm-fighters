const weakAttack = {
    id: 'action1Id',
    name: 'Weak Attack',
    description: 'You attempt to stab your opponent!',
    minEffectiveRoll: 10,
    damage: 2,
    energyReq: 1
};

const mediumAttack = {
    id: 'action2Id',
    name: 'Medium Attack',
    description: 'You attempt to stab your opponent mediumly!',
    minEffectiveRoll: 8,
    damage: 3,
    energyReq: 2
};

const strongAttack = {
    id: 'action3Id',
    name: 'Strong Attack',
    description: 'You attempt to stab your opponent strongly!',
    minEffectiveRoll: 12,
    damage: 4,
    energyReq: 3
};

const attacks = [
    weakAttack,
    mediumAttack,
    strongAttack
];

export default attacks;