const silent = {
    id: 'silent',
    name: 'The Silent',
    image: '/jhemm-fighters/assets/silent1.jpg',
    baseHp: 13,
    baseEnergy: 13,

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
    image: '/jhemm-fighters/assets/brawn1.jpg',
    baseHp: 18,
    baseEnergy: 8,

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
    image: '/jhemm-fighters/assets/caster1.jpg',
    baseHp: 9,
    baseEnergy: 17,

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
    silent,
    brawn,
    caster
];
export default classes;