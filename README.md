# jhemm-fighters v. 1.00
## Joey Leaptrott, Hunter Danielson, Erik Ford, Melissa Smoot, Max Lamb
Jhemm Fighters is a browser-based local multiplayer arena combat game. Each player will create their character by selecting a class, and do battle against another by managing their respective energies to perform moves. 

Our main problem domain was figuring out how to to create our 
in vanilla JS, how do you execute this type of game structure (turn-based combat). Using a complex set of conditionals statements, we created game logic that is able to generate the correct turn order (player 1 attacks, player 2 defends THEN player 2 attacks player 1 defends, or vice versa) and remain consistent to the end of the round while using local storage to account for changing stats.