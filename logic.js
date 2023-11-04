//when "Start Quiz" button is clicked- timer starts
//hide button and intro text
//remove hide from q1. Q1 appears.
// Answer is selected
//  if play correct sound, +1 score, save score LS, next question.
//  if incorrect, play incorrect sound, nor score, decrement timer, next question.
// repeat
// End, enter initials on highscore page.
// retrieve any highscores from local storage.
// save score to local storage.

let startButtonEl = document.getElementById("start");
let startTextAtt = document.getElementById("start-screen")
let countdownTimer = document.getElementById("time");
let timeRemaining = 5;
let timeInterval;
let gameEndEl = document.getElementById("end-screen");
import { questions } from './questions.js';





startButtonEl.addEventListener("click", function () {

    startTextAtt.className = "hide";
    //timeInterval is calling the timer to start
    timeInterval = setInterval(timer,1000);

    let showQuestion = document.getElementById("questions");

    showQuestion.className = "";

});



function timer() {
    if(timeRemaining > 0){
        timeRemaining --;
        countdownTimer.innerHTML = timeRemaining;
    } else {
        clearInterval(timeInterval);
        countdownTimer.innerHTML = "";
        gameEndEl.setAttribute("class","");

    }
}

