const options = ["Rock", "Paper", "Scissors"];
let scores = [0, 0, 0];
let userSelection = '';

const resultText = document.querySelector('.result');
const scoreText = document.querySelector('.scores');

const userButtons = document.querySelectorAll('div.user');
const computerButtons = document.querySelectorAll('div.comp');
const playButton = document.querySelector('button.play');
userButtons.forEach(button => button.addEventListener('click', makeUserSelection));
playButton.addEventListener('click', playRound);

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

function setResultText(result) {
    if (result === 'win')
        resultText.textContent = 'You Win!';
    else if (result === 'loss')
        resultText.textContent = 'You Lose!';
    else if (result === 'tie')
        resultText.textContent = "It's a Tie!";
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
    if (userSelection === '') {
        scoreText.textContent = "Please select Rock, Paper, or Scissors.";
        return;
    }
    let computerSelection = getComputerSelection();

    let result = getResult(userSelection, computerSelection)
    setResultText(result);
    updateScores(result);
}