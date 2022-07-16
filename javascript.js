const options = ["Rock", "Paper", "Scissors"];
const computerPickText = document.querySelector('#computer-pick');
const resultText = document.querySelector('#result');
const scoreText = document.querySelector('.scores');
let scores = [0, 0, 0];

const userButtons = document.querySelectorAll('div.user');
const playButton = document.querySelector('button.play');
userButtons.forEach(button => button.addEventListener('click', makeUserSelection));
playButton.addEventListener('click', playRound);

let userSelection = '';

function makeUserSelection(event) {
    let thisValue = this.dataset.value;
    userSelection = thisValue;
    userButtons.forEach(button => {
        let value = button.dataset.value;
        if (value === thisValue)
            button.classList.add('selected');
        else
            button.classList.remove('selected');
    });
}

function clearText() {
    computerPickText.textContent = '';
    resultText.textContent = '';
}

function getComputerSelection() {
    let selection = options[Math.floor(Math.random() * 3)];
    console.log(`Computer selection: ${selection}`);
    return selection;
}

function getResult(userSelection, computerSelection) {
    let result;
    if (userSelection === computerSelection) {
        result = "tie";
    }
    else if (userSelection === "Rock" && computerSelection === "Scissors") {
        result = "win";
    }
    else if (userSelection === "Paper" && computerSelection === "Rock") {
        result = "win";
    }
    else if (userSelection === "Scissors" && computerSelection === "Paper") {
        result = "win";
    }
    else {
        result = "loss";
    }

    console.log(`The result is: ${result}`);
    return result;
}

function getResultText(result, userSelection, computerSelection) {
    let text;
    if (result === "win") {
        text = `You Win! ${userSelection} beats ${computerSelection}`;
    }
    else if (result === "loss") {
        text = `You Lose! ${computerSelection} beats ${userSelection}`;
    }
    else if (result === "tie") {
        text = `You Tie! You both picked ${userSelection}`;
    }
    return text;
}

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

function playRound() {
    console.log('clicked play');

    clearText();

    if (userSelection === '') {
        scoreText.textContent = "Please select Rock, Paper, or Scissors.";
        return;
    }

    let computerSelection = getComputerSelection();
    computerPickText.textContent = `Computer picked: ${computerSelection}`;

    let result = getResult(userSelection, computerSelection)
    resultText.textContent = getResultText(result, userSelection, computerSelection);

    updateScores(result);
}