let playerSelection = ''; //player selection var
let computerSelection = ''; // create var for computer
let computerRandom = ''; //create var for number Random
let pSelection = document.getElementById('guessField'); // Get Guessing Field
let pButton = document.getElementById('guessButton'); //Guessing Button

pButton.addEventListener('click', playRound);

function computerPlay() {  // Function to Return a random Rock, Paper, Scissor selection
    computerRandom = Math.floor(Math.random() * 3); //Random int between 0-2

    if (computerRandom === 0) { // if Random is 0 = Rock
        return computerSelection = 'Rock';
    }
    else if (computerRandom === 1) { // if Random is 1 = Paper
        return computerSelection = 'Paper';
    }
    else {
        return computerSelection = 'Scissors'; // if Random is 2 = Scissors
    }
}


function playRound() {
    computerSelection = computerPlay();
    playerSelection = pSelection.value;

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        alert(`You Picked ${playerSelection}.  I picked ${computerSelection}. Push, Try Again!`);
    }
    else if (((computerSelection.toLowerCase() === 'rock') && (playerSelection.toLowerCase() === 'paper')) || ((computerSelection.toLowerCase() === 'paper') && (playerSelection.toLowerCase() === 'scissors')) || ((computerSelection.toLowerCase() === 'scissors') && (playerSelection.toLowerCase() === 'rock'))) {
        alert(`You Picked ${playerSelection}.  I picked ${computerSelection}. You Win!`);
    }
    else {
        alert(`You Picked ${playerSelection}.  I picked ${computerSelection}. Loser!`);
    }

}

function gameFive() {
    for (let i = 0; i < 5; i++) {
        playRound;
        
    }
}