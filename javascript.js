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

// calculates result of round
function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "win";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "win";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "win";
    }
    else {
        return "loss";
    }
}

// plays a round of rock-paper-scissors
function playRound() {
    let playerSelection = playerPlay();
    console.log(`Player selection: ${playerSelection}`);
    
    if (!checkSelection(playerSelection)) {
        console.log(`Error: Player did not input "Rock", "Paper", or "Scissors"`);
        return;
    }
    document.querySelector('#player-pick').textContent = `You picked: ${playerSelection}`;
    
    let computerSelection = computerPlay();
    console.log(`Computer selection: ${computerSelection}`);
    document.querySelector('#computer-pick').textContent = `Computer picked: ${computerSelection}`;

    let result = getResult(playerSelection, computerSelection)
    console.log(`The result is: ${result}`);
    
    if (result === "win") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (result === "loss") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (result === "tie") {
        console.log(`You Tie! You both picked ${playerSelection}`);
    }
}

playRound();