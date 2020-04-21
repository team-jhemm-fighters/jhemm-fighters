export function turnOrder() {
    let nextPlayer = 'player1';
    const flip = Math.random();
    if (flip > .5) {
        nextPlayer = 'player2';
    }
    return nextPlayer;
}