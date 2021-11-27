function playerPlay(){

}

function computerPlay() {
    return (random("Rock", "Paper", "Scissors"));
}

function play(playerSelection, computerSelection) {
    insensitivePlayerSelection = playerSelection.toLowerCase;
    if (insensitivePlayerSelection === "rock") {
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
                return ("Error")
                break;
        }
    }
    if (insensitivePlayerSelection === "paper") {
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
                return ("Error")
                break;
        }
    }
    if (insensitivePlayerSelection === "scissors") {
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
                return ("Error")
                break;
        }
    }
}