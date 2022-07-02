const options = ["Rock", "Paper", "Scissors"];

// gets player's selection
function getPlayerSelection() {
    let selection = fixSelection(prompt('Pick "Rock", "Paper", or "Scissors".'));
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
    return false;
}

// gets computer's selection
function getComputerSelection() {
    let selection = options[Math.floor(Math.random() * 3)];
    return selection;
}

// calculates result of round, returning win/loss/tie
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
    let playerSelection = getPlayerSelection();
    console.log(`Player selection: ${playerSelection}`);
    
    if (!checkSelection(playerSelection)) {
        console.log(`Error: Player did not input "Rock", "Paper", or "Scissors"`);
        return;
    }
    document.querySelector('#player-pick').textContent = `You picked: ${playerSelection}`;
    
    let computerSelection = getComputerSelection();
    console.log(`Computer selection: ${computerSelection}`);
    document.querySelector('#computer-pick').textContent = `Computer picked: ${computerSelection}`;

    let result = getResult(playerSelection, computerSelection)
    console.log(`The result is: ${result}`);
    let resultText = getResultText(result, playerSelection, computerSelection);
    console.log(resultText);

    document.querySelector('#result').textContent = resultText;
}

function game() {
    let numWin = 0;
    let numLoss = 0;
    let numTie = 0;
    
    playRound();
}

game();