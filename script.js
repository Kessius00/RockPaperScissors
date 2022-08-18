const button = document.querySelector('.btn');
const choices = document.querySelectorAll('.card');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const human = document.querySelector('.human');
const computer = document.querySelector('.computer');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const score = document.querySelector('.score');
const pFooter = document.createElement('p');
const pScore = document.createElement('p');
const midSite = document.querySelector('.midsite')
const humanScoreboard = document.createElement('p');
const computerScoreboard = document.createElement('p');


if (humanScoreboard === 5 || computerScoreboard === 5){
    choices.forEach((choice)=>{
        choices.removeChild(choice);
    });
};


pFooter.classList.toggle('cow')

let computerScore = 0;
let humanScore = 0;

humanScoreboard.classList.toggle('humanscore');
computerScoreboard.classList.toggle('computerscore');
humanScoreboard.textContent = humanScore;
computerScoreboard.textContent = computerScore;




button.addEventListener('click', () =>{
    pScore.textContent = 'Scoreboard';
    pScore.classList.toggle('scoreboard');
    header.removeChild(button);
    header.insertBefore(pScore, score);
    human.appendChild(humanScoreboard);
    computer.appendChild(computerScoreboard);
    playAudio(6);
    choices.forEach((card) => {
    
    card.addEventListener('click', ()=>{   
    let playerSelection = card.classList[1]; 
    let round = playRound(playerSelection);

    if  (computerScore < 5 || humanScore < 5){
        pFooter.textContent = round; 
        footer.appendChild(pFooter); 
    };

    if (determineWinner(round) !== null){
        if (determineWinner(round)){
            humanScore++;
            humanScoreboard.textContent = humanScore;
            human.appendChild(humanScoreboard);
            if (humanScore<5){
                playAudio(6+humanScore);
            } else if (humanScore === 5){
                playAudio(6+humanScore);
                pFooter.textContent = 'We have a winner: Human'; 
                footer.appendChild(pFooter); 
                choices.forEach((choice)=>{
                midSite.removeChild(choice)});
            };
            
        } else {
            computerScore++;
            computerScoreboard.textContent = computerScore;
            computer.appendChild(computerScoreboard);
            if (computerScore<5){
                playAudio(computerScore);
            } else if (computerScore===5){
                playAudio(computerScore);
                pFooter.textContent = 'We have a winner: COMPUTER'; 
                footer.appendChild(pFooter); 
                choices.forEach((choice)=>{
                midSite.removeChild(choice)});
            };
        };
    }});
});
});



function determineWinner(getResultRound){
    if(getResultRound.charAt(4) === 'w'){
        return true;
    } else if (getResultRound.charAt(4) === 'l'){
        return false};
    return null;
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

function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    audio.currentTime = 0; 
    audio.play();
};
