let playerSelection = ''; //player selection var
let computerSelection = ''; // create var for computer
let computerRandom = ''; //create var for number Random

function computerPlay() {  // Function to Return a random Rock, Paper, Scissor selection
    computerRandom = Math.floor(Math.random() * 3); //Random int between 0-2

    if (computerRandom === 0) {
        return computerSelection = 'Rock';
    }
    else if (computerRandom === 1) {
        return computerSelection = 'Paper';
    }
    else {
        return computerSelection = 'Scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        alert(`You Picked ${playerSelection}.  I picked ${computerSelection}. Push, Try Again!`);
    }
    else if (((computerSelection === 'Rock') && (playerSelection === 'Paper')) || ((computerSelection === 'Paper') && (playerSelection === 'Scissors')) || ((computerSelection === 'Scissors') && (playerSelection === 'Rock'))) {
        alert(`You Picked ${playerSelection}.  I picked ${computerSelection}. You Win!`);
    }
    else {
        alert(`You Picked ${playerSelection}.  I picked ${computerSelection}. Loser!`);
    }

}