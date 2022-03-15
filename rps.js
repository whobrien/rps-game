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
let scoreCat = 0;
let scorePlyr = 0;
let scoreCom = 0;

const pPick = window.addEventListener('click', gameFive); //click to play

console.log(pPick);

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


function playRound() {
    const guessCom = computerPlay();
    const guessPlyr = window.prompt('Type Rock, Paper or Scissors, then press OK.');

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

function gameFive() {
    let scoreCat = 0;
    let scorePlyr = 0;
    let scoreCom = 0;
    
    //for (let i = 0; i < 5; i++) {
        let result = playRound(); 

        if (result === 'Cat') {
            scoreCat++;
            console.log('Cat Won');
            displayCat.textContent = `Cat: ${scoreCat}`;
        }
        else if (result === 'Player') {
            scorePlyr++;
            console.log('Player One');
            displayPlyr.textContent = `Player: ${scorePlyr}`;
        }
        else {
            scoreCom++;
            console.log('Computer Won');
            displayCOM.textContent = `Computer: ${scoreCom}`;
        }
    }
// }