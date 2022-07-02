// TODO: create function for player selection

// create function for computer selection
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let computerSelection = options[Math.floor(Math.random() * 3)];
    console.log(`Computer selection: ${computerSelection}`);
}
// TODO: create function to calculate winner

// TODO: run game
computerPlay();