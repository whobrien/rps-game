//let guessPlyr = ''; //player selection var
//let computerSelection = ''; // create var for computer
//let computerRandom = ''; //create var for number Random
//const pSelection = document.getElementById('guessField'); // Get Guessing Field
//const pButton = document.getElementsByClassName('rock'); //Guessing Button
const roundDisplay = document.getElementById('display'); //Display for who won round
const displayCOM = document.getElementById('displayCom'); //Keep track of computer score
const displayPlyr = document.getElementById('displayPlyr'); //Keep track of plyr score
const displayCat = document.getElementById('displayCat'); //Keep track of pushes score
const roundTrack = document.getElementById('rounds'); //Keep track of who won round score
const pushed = document.querySelectorAll('button');

for (i of pushed) {
    i.addEventListener('click', function() {
        gameFive(this);
    });
}

function computerPlay() {  // Function to Return a random Rock, Paper, Scissor selection
    computerRandom = Math.floor(Math.random() * 3); //Random int between 0-2

    if (computerRandom === 0) { // if Random is 0 = Rock
        return 'Rock';
    }
    else if (computerRandom === 1) { // if Random is 1 = Paper
        return 'Paper';
    }
    else {
        return 'Scissors'; // if Random is 2 = Scissors
    }
}


function playRound(userGuess) {
    const guessCom = computerPlay();
    const guessPlyr = userGuess;

    if (guessPlyr.toLowerCase() === guessCom.toLowerCase()) {
        roundDisplay.textContent = `You Picked ${guessPlyr}.  I picked ${guessCom}. Push, Try Again!`;
        return 'Cat';
    }
    else if (((guessCom.toLowerCase() === 'rock') && (guessPlyr.toLowerCase() === 'paper')) || ((guessCom.toLowerCase() === 'paper') && (guessPlyr.toLowerCase() === 'scissors')) || ((guessCom.toLowerCase() === 'scissors') && (guessPlyr.toLowerCase() === 'rock'))) {
        roundDisplay.textContent = `You Picked ${guessPlyr}.  I picked ${guessCom}. You Win!`;
        return 'Player';
    }
    else {
        roundDisplay.textContent = `You Picked ${guessPlyr}.  I picked ${guessCom}. Loser!`;
        return 'Computer';
    }

}

function gameFive(event) {
    const pick = event.textContent;
    
    //for (let i = 0; i < 5; i++) {
        let result = playRound(pick); 

        if (result === 'Cat') {
            let dcat = displayCat.textContent;
            let cat = dcat[5];
            cat++;
            console.log('Cat Won');
            displayCat.textContent = `Cat: ${cat}`;
            let sel = roundTrack.textContent[7];
            sel++;
            roundTrack.textContent = `Round: ${sel}`;
            
        }
        else if (result === 'Player') {
            let dplyr = displayPlyr.textContent;
            let player = dplyr[5];
            player++;
            console.log('Player Won');
            displayPlyr.textContent = `You: ${player}`;
            let sel = roundTrack.textContent[7];
            sel++;
            roundTrack.textContent = `Round: ${sel}`;
        }
        else {
            let dcom = displayCOM.textContent;
            let com = dcom[4];
            com++;
            console.log('Computer Won');
            displayCOM.textContent = `Me: ${com}`;
            let sel = roundTrack.textContent[7];
            sel++;
            roundTrack.textContent = `Round: ${sel}`;
        }
    }
// }