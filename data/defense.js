const casterHealingLight = {
    id: 'healinglight',
    name: 'Healing Light',
    description: 'You call out to your arcane powers to heal your wounds and protect you from harm.',
    defenseRating: 1,
    health: 2,
    energyReq:2
};

const casterFrostShield = {
    id: 'frostshield',
    name: 'Frost Shield',
    description: 'You surround yourself with a barrier made of frost.',
    defenseRating: 3,
    health: 0,
    energyReq: 5
};

const casterLightningDodge = {
    id: 'lightningdodge',
    name: 'Lightning Dodge',
    description: 'You send lightning through your body to dodge out of the way.',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};

const defense = [
    casterHealingLight,
    casterFrostShield,
    casterLightningDodge
];

export default defense;