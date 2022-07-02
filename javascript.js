const options = ["Rock", "Paper", "Scissors"];
const playerPickText = document.querySelector('#player-pick');
const computerPickText = document.querySelector('#computer-pick');
const resultText = document.querySelector('#result');

// gets player's selection
function getPlayerSelection() {
    let selection = fixSelection(prompt('Pick "Rock", "Paper", or "Scissors".'));
    console.log(`Player selection: ${selection}`);
    return selection;
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
    console.log(`Error: Player did not input "Rock", "Paper", or "Scissors"`);
    return false;
}

// gets computer's selection
function getComputerSelection() {
    let selection = options[Math.floor(Math.random() * 3)];
    console.log(`Computer selection: ${selection}`);
    return selection;
}

// calculates result of round, returning win/loss/tie
function getResult(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = "tie";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "win";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "win";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "win";
    }
    else {
        result = "loss";
    }

    console.log(`The result is: ${result}`);
    return result;
}

function getResultText(result, playerSelection, computerSelection) {
    let text;
    if (result === "win") {
        text = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (result === "loss") {
        text = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (result === "tie") {
        text = `You Tie! You both picked ${playerSelection}`;
    }
    return text;
}

// plays a round of rock-paper-scissors
function playRound() {
    playerPickText.textContent = '';
    computerPickText.textContent = '';
    resultText.textContent = '';

    let playerSelection = getPlayerSelection();
    if (!checkSelection(playerSelection)) {
        resultText.textContent = 'Error, choose either "Rock", "Paper", or "Scissors"';
        return;
    }
    playerPickText.textContent = `You picked: ${playerSelection}`;
    
    let computerSelection = getComputerSelection();
    computerPickText.textContent = `Computer picked: ${computerSelection}`;

    let result = getResult(playerSelection, computerSelection)
    resultText.textContent = getResultText(result, playerSelection, computerSelection);
}

function game() {
    let numWin = 0;
    let numLoss = 0;
    let numTie = 0;

    playRound();
}

game();