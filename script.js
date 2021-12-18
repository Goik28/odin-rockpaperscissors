const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const newGameButton = document.getElementById('newGame');

let round = 0;
let playerWinCounter = 0;
let computerWinCounter = 0;

rockButton.addEventListener('click', game);
paperButton.addEventListener('click', game);
scissorsButton.addEventListener('click', game);
newGameButton.addEventListener('click', resetGame);

function logPlays(round, playedResult, computerSelection) {
    document.getElementById(round).innerHTML = 'Turn ' + round.charAt(2) +' - ';
    document.getElementById(round).innerHTML += `Computer choosed ${computerSelection}.`;
    document.getElementById(round).innerHTML += ` ${playedResult}`;
}

function game(e) {
    let message = '';
    const computerSelected = computerSelection();
    switch (playerSelection(e)) {
        case 'rock':
            message = rockAgainst(computerSelected);
            break;
        case 'paper':
            message = paperAgainst(computerSelected);
            break;
        case 'scissors':
            message = scissorsAgainst(computerSelected);
            break;
    }
    if (message.includes("won")) {
        playerWinCounter++;
        logPlays("li" + (round + 1), message, computerSelected);
    }
    if (message.includes("lost")) {
        computerWinCounter++;
        logPlays("li" + (round + 1), message, computerSelected);
    }
    if (message.includes("tie")) {
        logPlays("li" + (round + 1), message + ' This round will be played again.', computerSelected);
        round--;
    }
    round += 1;
    gameEnd();
}

function playerSelection(e) {
    return (e.target.id);
}

function computerSelection() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function rockAgainst(computerSelection) {
    switch (computerSelection) {
        case "Rock":
            return ("It's a tie.")
            break;
        case "Paper":
            return ("You lost! Paper beats Rock.")
            break;
        case "Scissors":
            return ("You won! Rock beats Scissors.")
            break;
    }
}

function paperAgainst(computerSelection) {
    switch (computerSelection) {
        case "Rock":
            return ("You won! Paper beats Rock.")
            break;
        case "Paper":
            return ("It's a tie.")
            break;
        case "Scissors":
            return ("You lost! Scissors beats Paper.")
            break;
    }
}

function scissorsAgainst(computerSelection) {
    switch (computerSelection) {
        case "Rock":
            return ("You lost! Rock beats Scissors.")
            break;
        case "Paper":
            return ("You won! Scissors beats Paper.")
            break;
        case "Scissors":
            return ("It's a tie.")
            break;
    }
}

function gameEnd() {
    if (playerWinCounter == 3) {
        document.getElementById('result').innerHTML = 'Result: You won!';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        newGameButton.disabled = false;
    }
    if (computerWinCounter == 3) {
        document.getElementById('result').innerHTML = 'Result: You lost!';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        newGameButton.disabled = false;
    }

}

function resetGame() {
    round = 0;
    playerWinCounter = 0;
    computerWinCounter = 0;
    document.querySelectorAll('li').forEach(element => {
        element.innerHTML = '';
    });
    document.getElementById('result').innerHTML = 'Result:'
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    newGameButton.disabled = true;
}