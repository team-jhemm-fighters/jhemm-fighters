# JHEMM Fighters

_Planning doc_

## Gameplay overview

Players alternate attack/defend rounds; moves in player stage determined by round status

Battlefield generates random number from 1-10

Attacker's move hits if `minEffectiveRoll` threshold reached; defender's move modifies `minEffectiveRoll` to change hit rate

Game ends when one/both player HP hits zero

## MVP

_Minimum Viable Product_

- Players can create "profiles" with their name, character name, and selection of 1 out of 2-3 unique classes
- Game successfully and accurately redirects between pages
- Game generates and saves random turn order for duration of game session
- Game successfully alternates attack and defense turns
- Players' attack and defense actions are executed as designed
- Game accurately identifies and returns winner on a results page
- **Game is playable from start to finish**

## File architecture

HTML pages:

```
Index/splash page
|-- Profile creation page
|-- Interim/Battle page
|-- Player 1 stage
|-- Player 2 stage
|-- Results page

About Me page: separate page or fold into index?
```

## Data architecture

### States to track

- Player profiles
    - `playername`
    - game-win stats
- Round stats (mostly current round #)
- Current game profile
    - localStorage name: `charactername`
    - Name
    - Position (player 1 or player 2)
    - Selected class
    - Health
    - Energy
    - Game wins (stretch)
- This Round - player actions - one for each player
    - localStorage name: `p1/p2 actions`
    - Attack turn choice
    - Defense turn choice

### Data flow

```
Init player profile
-> player stage:
    --> get profiles (for class image, actions, and stats)
    --> generate choices based on actions
    --> set p1/p2 action in lS
-> interim/battlefield stage:
    --> get profiles
        --> new game: determine turn order (p1/p2), set profiles
        --> check player profiles for energy
            ----> if player energy <= 0, force a "rest" turn
    --> get p1/p2 actions
        ----> if actions not present for one player, direct to appropriate player stage
        ----> if actions present for both players...
            ------> get action data from db
            ------> execute actions
            ------> set updated profiles
            ------> reset p1/p2 actions after BOTH attack and defense turns have been taken
    --> check updated profile stats
        ----> if HP for one/both players <= 0, redirect to results page
        ----> otherwise, redirect to interim page for next player turn
```

### DB entry structure

#### DB1: classes

```js
const rogue = {
    id: 'rogue',
    name: 'Rogue',
    image: './assets/class-portaits/rogue.jpg' /* or whatever path */,
    baseHp: 15,
    baseEnergy: 10,
    atkActions: [
        actionId,
        actionId,
        actionId
    ],
    defActions: [
        actionId,
        actionId,
        actionId
    ]
}
```

#### DB2: atkActions

```js
const atkAction = {
    id: actionId,
    name: `here's what it's called`,
    description: `here's what it does`,
    minEffectiveRoll: 5 /* minimum randomized number needed for successful attack */ ,
    damage: 3 /* damage inflicted by successful attack */ ,
    energyReq: 2
}
```

#### DB3: defActions

```js
const defAction = {
    id: actionId,
    name: `here's what it's called`,
    description: `here's what it does`,
    rollModifier: 2 /* add to attack roll to change minimum efective roll */ ,
    energyReq: 2
}
```

## Itemization of features

### Profile creation

1. Basic HTML page structure with appropriate containers in place for scripting
    1. Form elements with text and radio inputs
    1. Button(s) to set localStorage and proceed with game
1. Connect script to page, `console.log` to verify connection
1. Create event listeners for forms, `console.log` data from each form to verify submit-ability
1. 

## Stretch goals

- Dynamic text for round result
- Intro screen music lol
    - https://www.youtube.com/watch?v=74ZXp_5M_7c
- Guy Fieri power mode
