let items = Array('rock', 'paper', 'scissors');
let winCounter = 0; 


function computerPlay(){
    let computerSelection = items[Math.floor(Math.random()*items.length)];
    //console.log(computerSelection);
    return computerSelection;
    

}

function playerSelection(){
    let userInput = prompt("please choose one from (rock, paper , scissors)");
    if ((userInput !== "rock" || userInput !== "paper" || userInput !== "scissors")){
        console.log("invalid") 
        
    }
     let playerSelection = userInput.toLowerCase();  
    
    //let playerSelection = userInput.toLowerCase();
    //console.log(playerSelection);
    return playerSelection;
}


function playRound(playerSelect , computerSelection){
    
    if (playerSelect === computerSelection){
      return " this game is drue";
    } 
   
   
    if (playerSelect === "paper" && computerSelection === "rock"){
        winCounter++;
        return "congratulation, you win, paper beats rock";
      }
    else if (playerSelect === "paper" && computerSelection === "scissors"){
        return "sorry, you lose, scissors beats paper";
    }

    
    if (playerSelect === "rock" && computerSelection === "scissors"){
        winCounter++;
        return "congratulation, you win, rock beats scissors";
      }
    else if(playerSelect === "rock" && computerSelection === "paper") { 
        return "sorry, you lose, paper beats rock"
    }


    if (playerSelect === "scissors" && computerSelection === "paper"){
        winCounter++;  
        return "congratulation, you win, scissors beats paper";
        }
    else if (playerSelect === "scissors" && computerSelection === "rock") { 
          return " soryy, you lose, rock beats scissors";
        }

  }

//console.log(playRound(playerSelection(), computerPlay()));




function game (){

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection(), computerPlay());
        }

     if (winCounter >= 3){
         console.log("congratulation, you won the game");
     }
     else console.log("sorry, you lost the game");
        
     
}

game();
