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

    console.log(choiceEmbodiment);
    };
