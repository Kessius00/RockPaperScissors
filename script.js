const button = document.querySelector('button');
const choices = document.querySelectorAll('.card');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const header = document.querySelector('.header');
const score = document.querySelector('.score');

button.addEventListener('click', () =>{
    const pScore = document.createElement('p');
    pScore.textContent = 'Scoreboard';
    pScore.classList.toggle('scoreboard');
    header.removeChild(button);
    header.insertBefore(pScore, score);
    
});



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

