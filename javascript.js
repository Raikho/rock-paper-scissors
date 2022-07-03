const options = ["Rock", "Paper", "Scissors"];
const playerPickText = document.querySelector('#player-pick');
const computerPickText = document.querySelector('#computer-pick');
const resultText = document.querySelector('#result');
const scoreText = document.querySelector('#scores');
let scores = [0, 0, 0];

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

    let playerSelection = document.form.choice.value;
    playerPickText.textContent = `You picked: ${playerSelection}`;
    
    let computerSelection = getComputerSelection();
    computerPickText.textContent = `Computer picked: ${computerSelection}`;

    let result = getResult(playerSelection, computerSelection)
    resultText.textContent = getResultText(result, playerSelection, computerSelection);

    updateScores(result);
    return result;
}

// update score array based on result
function updateScores(result) {
    if (result === "win") {
        scores[0]++;
    }
    else if (result === "loss") {
        scores[1]++;
    }
    else if (result === "tie") {
        scores[2]++;
    }
    scoreText.textContent = `Score: ${scores[0]} Wins, ${scores[1]} Losses, ${scores[2]} Ties`;
}
