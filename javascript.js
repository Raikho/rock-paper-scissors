// TODO: create function for player selection
// gets player's selection
function playerPlay() {
    let playerSelection = fixSelection(prompt("pick"));

    console.log(`Player selection: ${playerSelection}`);
}

// make case insensitive
function fixSelection(string) {
    let first = string.slice(0, 1).toUpperCase();
    let rest = string.slice(1).toLowerCase();
    return first + rest;
}

// TODO: create function to make selection case insensitive

// gets computer's selection
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let computerSelection = options[Math.floor(Math.random() * 3)];
    console.log(`Computer selection: ${computerSelection}`);
}
// TODO: create function to calculate winner

// TODO: run game
playerPlay();
computerPlay();