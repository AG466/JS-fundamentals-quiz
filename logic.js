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
//variable initialisation
let startButtonEl = document.getElementById("start");
let startTextAtt = document.getElementById("start-screen")

//question phase
let questionEl = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choiceContainer = document.getElementById("choices");
//timer
let countdownTimer = document.getElementById("time");
let timeRemaining = 60;
let timeInterval;

//endPhase
let gameEndEl = document.getElementById("end-screen");
import { questions } from './questions.js';

//scores
let score = 0;
//variable declaration end

//codestart
startButtonEl.addEventListener("click", function () {

    startTextAtt.className = "hide";
    displayQuestions();
    //timeInterval is calling the timer to start
    timeInterval = setInterval(timer, 1000);

});

//question1
function displayQuestions() {
    console.log(timeRemaining);
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[0].question;

    for (var i = 0; i < questions[0].answers.length; i++) {
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[0].answers[i];
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswer);

        console.log(window.document.body.children[4]);
    }

    //code to check correct answer q1.
    function checkAnswer(event) {

        let response = Number(event.target.getAttribute("data-index"))
        if (response === 0) {
            console.log("Correct");
            score ++;
            let buttons = choiceContainer.querySelectorAll('button');
            buttons.forEach((button) => {
                button.remove();
            });
            displayQuestionsTwo();

        } else {
            console.log("Wrong");
            timeRemaining -=10;
            let buttons = choiceContainer.querySelectorAll('button');
            buttons.forEach((button) => {
                button.remove();
            });
            displayQuestionsTwo();
        }
    }

}


//question2
function displayQuestionsTwo() {
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[1].question;

    for (var i = 0; i < questions[1].answers.length; i++) {
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[1].answers[i];
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswerTwo);

        console.log(window.document.body.children[4]);
    }
}

//code to check correct answer q.2
function checkAnswerTwo(event) {

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 3) {
        console.log("Correct");
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsThree();
    } else {
        console.log("Wrong");
        timeRemaining -=10;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsThree();

    }

}
//question 3
function displayQuestionsThree(){
    questionEl.setAttribute("class","");
    questionTitle.innerHTML = questions[2].question;
    
    for(var i =0; i<questions[2].answers.length;i++){
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index",i);
        choiceButton.textContent = j + " " + questions[2].answers[i];
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click",checkAnswerThree);

        console.log(window.document.body.children[4]);
    }}

    function checkAnswerThree(event){

        let response = Number(event.target.getAttribute("data-index"))
            if (response === 1){
                console.log("Correct");
                let buttons = choiceContainer.querySelectorAll('button');
                buttons.forEach((button) => {
                    button.remove();
                });
                endPhase();
            } else {
                console.log("Wrong");
                let buttons = choiceContainer.querySelectorAll('button');
                buttons.forEach((button) => {
                    button.remove();
                });
                endPhase();

        }
    }
function timer() {
    if (timeRemaining > 0) {
        timeRemaining--;
        countdownTimer.innerHTML = timeRemaining;
    } else {
        clearInterval(timeInterval);
        countdownTimer.innerHTML = "";
        gameEndEl.setAttribute("class","feedback");
        questionEl.setAttribute("class", "hide");

    }
}

function endPhase(){
    questionEl.setAttribute("class","hide");
    gameEndEl.setAttribute("class","feedback");
    clearInterval(timeInterval);
}