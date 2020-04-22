const rogue = {
    id: 'rogue',
    name: 'Rogue',
    image: '../assets/rogue.png',
    baseHp: 5,
    baseEnergy: 3,

    atkActions: [
        'action0',
        'action1',
        'action2',
        'action3'
    ],
    defActions: [
        'action0',
        'action1',
        'action2',
        'action3'
    ]
};

const brawn = {
    id: 'brawn',
    name: 'The Brawn',
    image: '../assets/rogue.png',
    baseHp: 5,
    baseEnergy: 3,

    atkActions: [
        'action0',
        'action4',
        'action5',
        'action6'
    ],
    defActions: [
        'action0',
        'action4',
        'action5',
        'action6'
    ]
};

const caster = {
    id: 'caster',
    name: 'The Caster',
    image: '../assets/rogue.png',
    baseHp: 5,
    baseEnergy: 3,

    atkActions: [
        'action0',
        'action7',
        'action8',
        'action9'
    ],
    defActions: [
        'action0',
        'action7',
        'action8',
        'action9'
    ]
};
const classes = [
    rogue,
    brawn,
    caster
];
export default classes;