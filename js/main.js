'use strict';

const secretNumber = Math.trunc(Math.random()*20) + 1;
const number = document.querySelector(".number");
let scoreStart = 20;
let highScore = 0;
const btn_check = document.querySelector(".check");

const score = document.querySelector(".score");
const btn_again = document.querySelector(".again");
console.log(secretNumber);


const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
}

const resetGame  = () =>{
    displayMessage("Start Guessing...");
    scoreStart = 20;
   score.textContent = scoreStart;
   secretNumber = Math.trunc(Math.random()*20) + 1;
   document.querySelector(".guess").value = '';
   document.querySelector("body").style.backgroundColor = "#222";
   document.querySelector(".number").style.width = "20rem";
   number.textContent = "?"
  
}

function guess(){
    const guess = Number(document.querySelector(".guess").value);
    //When there is no input
    if(!guess){
        displayMessage("No number entered");

    //When the player wins
    }else if(guess === secretNumber){
        
        displayMessage("You are correct");
        number.textContent = secretNumber;
      
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if(scoreStart > highScore){
            highScore = scoreStart;
            document.querySelector(".highscore").textContent = highScore;
        }
        scoreStart++;
        score.textContent = scoreStart;
    
        //When the guess is too high
    }else if(guess > secretNumber)
    {
        if(scoreStart > 1){
        displayMessage("Too High");
        scoreStart--;
        score.textContent = scoreStart;
        }else{
            displayMessage("You lost the game!")
        } 

    //When the guess is too low
    } else if(guess < secretNumber){
        if(scoreStart > 1){
            displayMessage("Too Low");
            
        scoreStart--;
        score.textContent = scoreStart;
        }else{
            displayMessage("You lost the game!")
        } 
    }

}

btn_check.addEventListener("click",guess)
btn_again.addEventListener("click",resetGame)


