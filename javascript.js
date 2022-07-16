const options = ["Rock", "Paper", "Scissors"];
const computerPickText = document.querySelector('#computer-pick');
const resultText = document.querySelector('#result');
const scoreText = document.querySelector('.scores');
let scores = [0, 0, 0];

const userButtons = document.querySelectorAll('div.user');
const computerButtons = document.querySelectorAll('div.comp');
const playButton = document.querySelector('button.play');
userButtons.forEach(button => button.addEventListener('click', makeUserSelection));
playButton.addEventListener('click', playRound);

let userSelection = '';

function clearText() {
    computerPickText.textContent = '';
    resultText.textContent = '';
}

function makeUserSelection(event) {
    let value = this.dataset.value;
    userSelection = value;
    selectButtonHighlight(userButtons, value);
}

function getComputerSelection() {
    let selection = options[Math.floor(Math.random() * 3)];
    console.log(`Computer selection: ${selection}`);
    selectButtonHighlight(computerButtons, selection);
    return selection;
}

function selectButtonHighlight(buttons, value) {
    buttons.forEach(button => {
        let buttonValue = button.dataset.value;
        if (buttonValue === value)
            button.classList.add('selected');
        else
            button.classList.remove('selected');
    });
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