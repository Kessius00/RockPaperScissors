function getComputerChoice(){
    let choiceEmbodiment = '';
    const choice = Math.random()*3;
    
    if (choice < 1){
        choiceEmbodiment = 'Rock';
    } else if (choice < 2){
        choiceEmbodiment = 'Paper';
    } else if (choice < 3){
        choiceEmbodiment = 'Scissors';
    };

    return choiceEmbodiment
    };


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let tie = 'Tie! Try again.'

    if (playerSelection == "ROCK" && computerSelection == "ROCK"){
        return tie
    } else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
        return tie
    } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
        return tie
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        return `You lose! ${playerSelection} loses to ${computerSelection}!`
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return `You lose! ${playerSelection} loses to ${computerSelection}!`
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return `You lose! ${playerSelection} loses to ${computerSelection}!`
    }; 
};

function game(){
    let playerChoice = '';
    let computerChoice = '';
    let getResultRound = '';
    let playerPoints = 0;
    let computerPoints = 0;

    for (i = 0; i < 5; i++){
    // ROUND DECLARATION
    console.log(`ROUND ${i+1}`);

    // TAKE INPUT FOR CHOICES FOR PLAYERS 
    playerChoice = prompt('Which are you? [Rock, Paper or Scissors]'); 
    computerChoice = getComputerChoice();

    // PLAYING THE ROUND
    getResultRound = playRound(playerChoice, computerChoice);

    // PRINTING THE RESULTS
    console.log(getResultRound);
    
    // CHECKING SENTENCE FOR CHAR WHICH DECIDES IF WIN
    if (getResultRound.charAt(4) == 'w'){
        playerPoints++;
    } else if (getResultRound.charAt(4) == 'l'){
        computerPoints++;};

    // SHOWING THE SCORE 
    console.log(`Points of player: ${playerPoints}`);
    console.log(`Points of computer: ${computerPoints}`);

    // DECLARATION OF THE WINNER OF THE GAME
    if (playerPoints < computerPoints){
        console.log('Computer wins!');
    } else if (playerPoints > computerPoints){
        console.log('Player wins!');
    } else {console.log("It's a tie!");};


    };
    

};