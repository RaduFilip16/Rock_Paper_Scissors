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

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    while(scorePlayer < 5 && scoreComputer < 5){
        playerSelection = window.prompt('Rock, paper or scissors?','rock');
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

game();





