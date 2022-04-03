console.log("Game starts");

/* The selectors for HTML */
const btnRock = document.querySelector('#rock');
const btnScissors = document.querySelector('#scissors');
const btnPaper = document.querySelector('#paper');
const msg = document.querySelector('.message');
const scr = document.querySelector('.scorecard');
const winnercard = document.querySelector('.winnercard');

/* Creates a random computer play */
function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    if (random == 0)
     return 'rock';
     else if (random == 1)
     return 'paper';
     else if (random == 2)
     return 'scissors';
}

/* Decides the winner between de user selection and the computer selection */
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'rock'){
        if(computerSelection.toLowerCase() == 'paper')
            return "You Lose! Paper beats Rock";
        if(computerSelection.toLowerCase() == 'scissors')
        return "You Win! Rock beats Scissors";
        if(computerSelection.toLowerCase() == 'rock')
        return "Draw!";
    }
    if (playerSelection.toLowerCase() === 'paper'){
        if(computerSelection.toLowerCase() == 'scissors')
            return "You Lose! Scissors beats Paper";
        if(computerSelection.toLowerCase() == 'rock')
        return "You Win! Paper beats Rock";
        if(computerSelection.toLowerCase() == 'paper')
        return "Draw!";
    }
    if (playerSelection.toLowerCase() === 'scissors'){
        if(computerSelection.toLowerCase() == 'rock')
            return "You Lose! Rock beats scissors";
        if(computerSelection.toLowerCase() == 'paper')
        return "You Win! Scissors beats Paper";
        if(computerSelection.toLowerCase() == 'scissors')
        return "Draw!";
    }

}

/* Inserts the current score into the  HTML "score" div */
function scorecard(mesg, scrplayer, scrcomputer){
    msg.textContent = mesg;
    scr.textContent =  `The score is 
                        You ${scrplayer} - ${scrcomputer} Computer`;
}

/* Inserts the Winner into the HTML "winner" div */
function showWinner(message){
    winnercard.textContent = message;
}

/* Variables used at the start of the game and the game-start message */
let round = '';
let scorePlayer = 0;
let scoreComputer = 0;
let initialMessage = "Make you choice";
scorecard(initialMessage, scorePlayer, scoreComputer);

                       
/* Event listener for the 3 individual buttons*/


/* Event Listener for the "rock" command */
btnRock.addEventListener('click', function(){

    if(scorePlayer == 5 || scoreComputer == 5){
        scorePlayer = 0;
        scoreComputer = 0;
        showWinner('');
    }

    round = playRound('rock',computerPlay());

    if (round.split("!")[0] === "You Lose"){
        scoreComputer++;
        if(scoreComputer == 5){
            showWinner("YOU LOST THE GAME");
        }
        scorecard(round, scorePlayer, scoreComputer);

    } else if(round.split("!")[0] ===  "You Win"){
        scorePlayer++;
        if(scorePlayer == 5){
            showWinner("YOU WON THE GAME");
        }
            scorecard(round, scorePlayer, scoreComputer);
    }

  else if (round.split("!")[0] === "Draw"){
        scorecard(round,scorePlayer, scoreComputer);

}


    });

/* Event Listener for the "scissors" command */
btnScissors.addEventListener('click', function(){  
    if(scorePlayer == 5 || scoreComputer == 5){
        scorePlayer = 0;
        scoreComputer = 0;
        showWinner('');
    }
    round = playRound('scissors',computerPlay());

    if (round.split("!")[0] === "You Lose"){
        scoreComputer++;
        if(scoreComputer == 5){
            showWinner("YOU LOST THE GAME");
        }
        scorecard(round, scorePlayer, scoreComputer);

    } else if(round.split("!")[0] === "You Win"){ 
        scorePlayer++;
        if(scorePlayer == 5){
            showWinner("YOU WON THE GAME");
}
        scorecard(round, scorePlayer, scoreComputer);
    }
    else if (round.split("!")[0] === "Draw"){
        scorecard(round,scorePlayer, scoreComputer);
    }
});



/* Event Listener for the "paper" command */
btnPaper.addEventListener('click', function(){ 
    if(scorePlayer == 5 || scoreComputer == 5){
        scorePlayer = 0;
        scoreComputer = 0;
        showWinner('');
    }
     round = playRound('paper', computerPlay());
     if (round.split("!")[0] === "You Lose"){
        scoreComputer++;
        if(scoreComputer == 5){
            showWinner("YOU LOST THE GAME");
        }
        scorecard(round, scorePlayer, scoreComputer);

    } else if(round.split("!")[0] === "You Win"){
        scorePlayer++;
        if(scorePlayer == 5){
            showWinner("YOU WON THE GAME");
}
        scorecard(round, scorePlayer, scoreComputer);
    }
    else if (round.split("!")[0] === "Draw"){
        scorecard(round,scorePlayer, scoreComputer);
    }
});





