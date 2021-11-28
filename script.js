function playerPlay() {
    return window.prompt("Write your choice (Rock, Paper, Scissors)");
}

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    let insensitivePlayerSelection = `${playerSelection}`.toLowerCase();
    if (insensitivePlayerSelection == "rock") {
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
    if (insensitivePlayerSelection == "paper") {
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
    if (insensitivePlayerSelection == "scissors") {
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
    return ("algo errado");
}

function game() {
    let playerWinCounter = 0;
    let computerWinCounter = 0;
    window.alert("This is a 5 round game of Rock-Paper-Scissors");
    for (let index = 0; index <= 4; index++) {
        let message = playRound(playerPlay(), computerPlay());
        if (message.includes("won")) {
            playerWinCounter++;
            window.alert(message);
        }
        if (message.includes("lost")) {
            computerWinCounter++;
            window.alert(message);
        }
        if (message.includes("tie")) {
            window.alert(message);
        }
    }
    if (playerWinCounter > computerWinCounter) {
        window.alert("You win! " + playerWinCounter + " x " + computerWinCounter + " for you.");
    } else if (playerWinCounter < computerWinCounter) {
        window.alert("You lost! " + playerWinCounter + " x " + computerWinCounter + " for the computer.");
    } else {
        window.alert("It was a tie! " + playerWinCounter + " x " + computerWinCounter + " for no one.")
    }
}