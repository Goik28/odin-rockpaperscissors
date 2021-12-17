const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const round1 = document.getElementById('li1');
const round2 = document.getElementById('li2');
const round3 = document.getElementById('li3');
const round4 = document.getElementById('li4');
const round5 = document.getElementById('li5');

rockButton.addEventListener('click', game);
paperButton.addEventListener('click', game);
scissorsButton.addEventListener('click', game);

function logPlays(round, playedResult, computerSelection) {
    document.getElementById(round).innerHTML = `Computer choosed ${computerSelection}.`;
    document.getElementById(round).innerHTML += ` ${playedResult}`;
}

function game(e) {
    let playerWinCounter = 0;
    let computerWinCounter = 0;
    for (let round = 0; round < 5; round++) {
        let message = '';
        const computerSelected = computerSelection();
        switch (playerSelection(e)) {
            case 'rock':
                message = rockAgainst(computerSelected);
            case 'paper':
                message = paperAgainst(computerSelected);
            case 'scissors':
                message = scissorsAgainst(computerSelected);
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
            round--;
            window.alert(message);
        }
    }
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
            return ("It's a tie")
            break;
        case "Paper":
            return ("You lost! Paper beats Rock")
            break;
        case "Scissors":
            return ("You won! Rock beats Scissors")
            break;
        default:
            return ("Input not valid")
            break;
    }
}

function paperAgainst(computerSelection) {
    switch (computerSelection) {
        case "Rock":
            return ("You won! Paper beats Rock")
            break;
        case "Paper":
            return ("It's a tie")
            break;
        case "Scissors":
            return ("You Lost! Scissors beats Paper")
            break;
        default:
            return ("Input not valid")
            break;
    }
}

function scissorsAgainst(computerSelection) {
    switch (computerSelection) {
        case "Rock":
            return ("You lost! Rock beats Scissors")
            break;
        case "Paper":
            return ("You won! Scissors beats Paper")
            break;
        case "Scissors":
            return ("It's a tie")
            break;
        default:
            return ("Input not valid")
            break;
    }
}

function gameEnd(playerCounter, computerCounter) {
    if (playerWinCounter > computerWinCounter) {
        window.alert("You win! " + playerWinCounter + " x " + computerWinCounter + " for you.");
    } else if (playerWinCounter < computerWinCounter) {
        window.alert("You lost! " + playerWinCounter + " x " + computerWinCounter + " for the computer.");
    } else {
        window.alert("It was a tie! " + playerWinCounter + " x " + computerWinCounter + " for no one.")
    }
}