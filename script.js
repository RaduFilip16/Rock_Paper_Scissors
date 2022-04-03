console.log("Game starts");

function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    if (random == 0)
     return 'rock';
     else if (random == 1)
     return 'paper';
     else if (random == 2)
     return 'scissors';
}

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

 /*
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
        if (playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors'){
            console.log("Not a valid move! I'll choose for you");
            playerSelection = computerPlay();
        }
        let round = playRound(playerSelection, computerPlay());
        if (round.split("!")[0] === "You Lose"){
            scoreComputer++;
            console.log(`${round}`);
        } else if(round.split("!")[0] === "You Win"){
            scorePlayer++;
            console.log(`${round}`);
        } else if (round.split("!")[0] === "Draw"){
            console.log('Draw!');
        }
    }

   let status = 'Equality';
    if(scorePlayer > scoreComputer){
        status = 'You Won the Game';
    } else if(scoreComputer > scorePlayer){
        status = 'You Lost The Game';
    }
    console.log(`${status}. Final Score 
                            You ${scorePlayer}
                            Computer ${scoreComputer} `);
}
*/

const btnRock = document.querySelector('#rock');
const btnScissors = document.querySelector('#scissors');
const btnPaper = document.querySelector('#paper');
const msg = document.querySelector('.message');
const scr = document.querySelector('.scorecard');
const winnercard = document.querySelector('.winnercard');

function scorecard(mesg, scrplayer, scrcomputer){
    msg.textContent = mesg;
    scr.textContent =  `The score is 
                        You ${scrplayer} - ${scrcomputer} Computer`;
}
function showWinner(message){
    winnercard.textContent = message;
}

let game = 0;
let round = '';
 let scorePlayer = 0;
 let scoreComputer = 0;
 let mesaj = "Make you choice";
 scorecard(mesaj, scorePlayer, scoreComputer);

                       

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





