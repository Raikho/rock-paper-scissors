let options = ["Rock", "Paper", "Scissors"];

// gets player's selection
function playerPlay() {
    let playerSelection = fixSelection(prompt("pick"));
    return playerSelection;
}

// make case insensitive
function fixSelection(string) {
    let first = string.slice(0, 1).toUpperCase();
    let rest = string.slice(1).toLowerCase();
    return first + rest;
}

// check if string is one of the options
function checkSelection(string) {
    for (let i = 0; i < options.length; i++) {
        if (string === options[i]) {
            return true;
        }
    }
    return false;
}

// gets computer's selection
function computerPlay() {
    let computerSelection = options[Math.floor(Math.random() * 3)];
    return computerSelection;
}

// TODO: create function to calculate winner

// TODO: run game
let playerSelection = playerPlay();
console.log(`Player selection: ${playerSelection}`);

if (!checkSelection(playerSelection)) {
    console.log(`Error: Player did not input "Rock", "Paper", or "Scissors"`);
}

let computerSelection = computerPlay();
console.log(`Computer selection: ${computerSelection}`);
