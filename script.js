const button = document.querySelector('.btn');
const choices = document.querySelectorAll('.card');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const score = document.querySelector('.score');
let computerScore = 0;
let humanScore = 0;

button.addEventListener('click', () =>{
    const pScore = document.createElement('p');
    pScore.textContent = 'Scoreboard';
    pScore.classList.toggle('scoreboard');
    header.removeChild(button);
    header.insertBefore(pScore, score);
    playAudio(6);
});

choices.forEach((card) => {
    card.addEventListener('click', ()=>{
        let playerSelection = card.classList[1];
        const pFooter = document.createElement('p');
        let round = playRound(playerSelection);
        pFooter.textContent = round;
        footer.appendChild(pFooter);
        
    });
});



function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    audio.currentTime = 0; //rewind if start is playing
    audio.play();
};

// function getPlayerChoice(){
//     choices.forEach((card) => {
//         card.addEventListener('click', ()=>{
//             return card.classList[1]
//         });
//     });
// };

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


function playRound(playerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
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

function determineWinner()




    // // PRINTING THE RESULTS
    // console.log(getResultRound);
    
    // CHECKING SENTENCE FOR CHAR WHICH DECIDES IF WIN
    // if (getResultRound.charAt(4) == 'w'){
    //     playerPoints++;
    // } else if (getResultRound.charAt(4) == 'l'){
    //     computerPoints++;};

    // // SHOWING THE SCORE 
    // console.log(`Points of player: ${playerPoints}`);
    // console.log(`Points of computer: ${computerPoints}`);

    // // DECLARATION OF THE WINNER OF THE GAME
    // if (playerPoints < computerPoints){
    //     console.log('Computer wins!');
    // } else if (playerPoints > computerPoints){
    //     console.log('Player wins!');
    // } else {console.log("It's a tie!");};
