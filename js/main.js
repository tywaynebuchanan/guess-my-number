'use strict';

const secretNumber = Math.trunc(Math.random()*20) + 1;
const number = document.querySelector(".number");
let scoreStart = 20;
const btn_check = document.querySelector(".check");

const score = document.querySelector(".score");
const btn_again = document.querySelector(".again");
number.textContent = secretNumber;


const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
}

function guess(){
    const guess = Number(document.querySelector(".guess").value);
    //When there is no input
    if(!guess){
        displayMessage("No number entered");

    //When the player wins
    }else if(guess === secretNumber){
        displayMessage("You are correct");
        scoreStart++;
        score.textContent = scoreStart;
        
    }else if(guess > secretNumber)
    {
        if(scoreStart > 1){
        displayMessage("Too High");
        scoreStart--;
        score.textContent = scoreStart;
        }else{
            displayMessage("You lost the game!")
        } 
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
btn_again.addEventListener("click",()=>{
    displayMessage("Start Guessing...");

})


