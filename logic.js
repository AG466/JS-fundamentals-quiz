
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
let finalScoreEl = document.getElementById("final-score");
//scores
let submitScoreEl = document.getElementById("submit");
let userInitial = document.getElementById("initials");
let user ="";
let score = 0;

let audioElCorrect = document.createElement("audio");
audioElCorrect.setAttribute("src","./assets/sfx/correct.wav");
audioElCorrect.setAttribute("id","correctAudio");
let fb = document.getElementById("feedback");
fb.appendChild(audioElCorrect);
let playCorrect = document.getElementById("correctAudio");

let audioElIncorrect = document.createElement("audio");
audioElIncorrect.setAttribute("src","./assets/sfx/incorrect.wav");
audioElIncorrect.setAttribute("id","incorrectAudio");
fb.appendChild(audioElIncorrect);
let playIncorrect = document.getElementById("incorrectAudio");


let feedbackText = document.createElement("h1");
fb.setAttribute("class","");
fb.appendChild(feedbackText);
feedbackText.textContent = "";

let correctText = "Correct ✅"
let incorrectText ="Incorrect ❌"


function hideFeedback(){
    fb.setAttribute("class", "hide");
}

console.log(document.body);


import { questions } from './questions.js';


startButtonEl.addEventListener("click", function () {

    startTextAtt.className = "hide";
    displayQuestions();
    //timeInterval is calling the timer to start
    timeInterval = setInterval(timer, 1000);

});

//Q1
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

//Q1 Check.
    function checkAnswer(event) {

        let response = Number(event.target.getAttribute("data-index"))
        if (response === 0) {
            console.log("Correct");
            playCorrect.play();
            feedbackText.textContent = correctText;
            score++;
            let buttons = choiceContainer.querySelectorAll('button');
            buttons.forEach((button) => {
                button.remove();
            });
            displayQuestionsTwo();

        } else {
            console.log("Wrong");
            playIncorrect.play();
            feedbackText.textContent = incorrectText;
            timeRemaining -= 10;
            let buttons = choiceContainer.querySelectorAll('button');
            buttons.forEach((button) => {
                button.remove();
            });
            displayQuestionsTwo();
        }
    }

}


//Q2
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

//Q2 Check
function checkAnswerTwo(event) {

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 3) { 
        console.log("Correct");
        playCorrect.play();
        feedbackText.textContent = correctText;
        score++;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsThree();
    } else {
        console.log("Wrong");
        playIncorrect.play();
        feedbackText.textContent = incorrectText;
        timeRemaining -= 10;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsThree();

    }

}


//Q3
function displayQuestionsThree() {
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[2].question; //change

    for (var i = 0; i < questions[2].answers.length; i++) { //change
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[2].answers[i]; //change
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswerThree); //change;

        console.log(window.document.body.children[4]);
    }
}

//Q3 Check
function checkAnswerThree(event) { //change

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 0) { 
        console.log("Correct");
        playCorrect.play();
        feedbackText.textContent = correctText;
        score++;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsFour(); //change
    } else {
        console.log("Wrong");
        playIncorrect.play();
        feedbackText.textContent = incorrectText;
        timeRemaining -= 10;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsFour(); //change

    }

}


//Q4
function displayQuestionsFour() {
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[3].question; //change

    for (var i = 0; i < questions[3].answers.length; i++) { //change
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[3].answers[i]; //change
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswerFour); //change;

        console.log(window.document.body.children[4]);
    }
}

//Q4 Check
function checkAnswerFour(event) { //change

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 1) { 
        console.log("Correct");
        playCorrect.play();
        feedbackText.textContent = correctText;
        score++;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsFive(); //change
    } else {
        console.log("Wrong");
        playIncorrect.play();
        feedbackText.textContent = incorrectText;
        timeRemaining -= 10;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsFive(); //change

    }

}



//Q5
function displayQuestionsFive() {
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[4].question; //change

    for (var i = 0; i < questions[4].answers.length; i++) { //change
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[4].answers[i]; //change
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswerFive); //change;

        console.log(window.document.body.children[4]);
    }
}

//Q5 Check
function checkAnswerFive(event) { //change

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 3) {  // place correct answer as opt 4.
        console.log("Correct");
        playCorrect.play();
        feedbackText.textContent = correctText;
        score++;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsSix(); //change
    } else {
        console.log("Wrong");
        playIncorrect.play();
        feedbackText.textContent = incorrectText;
        timeRemaining -= 10;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsSix(); //change

    }

}

///
//Q6
function displayQuestionsSix() {
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[5].question; //change

    for (var i = 0; i < questions[5].answers.length; i++) { //change
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[5].answers[i]; //change
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswerSix); //change;

        console.log(window.document.body.children[4]);
    }
}

//Q6 Check
function checkAnswerSix(event) { //change

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 2) { 
        console.log("Correct");
        playCorrect.play();
        feedbackText.textContent = correctText;
        score++;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsSeven(); //change
    } else {
        console.log("Wrong");
        playIncorrect.play();
        feedbackText.textContent = incorrectText;
        timeRemaining -= 10;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsSeven(); //change

    }

}

//Q7
function displayQuestionsSeven() {
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[6].question; //change

    for (var i = 0; i < questions[6].answers.length; i++) { //change
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[6].answers[i]; //change
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswerSeven); //change;

        console.log(window.document.body.children[4]);
    }
}

//Q7 Check
function checkAnswerSeven(event) { //change

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 2) { 
        console.log("Correct");
        playCorrect.play();
        feedbackText.textContent = correctText;
        score++;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsEight(); //change
    } else {
        console.log("Wrong");
        playIncorrect.play();
        timeRemaining -= 10;
        feedbackText.textContent = incorrectText;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsEight(); //change

    }

}

//Q8
function displayQuestionsEight() {
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[7].question; //change

    for (var i = 0; i < questions[7].answers.length; i++) { //change
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[7].answers[i]; //change
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswerEight); //change;

        console.log(window.document.body.children[4]);
    }
}

//Q8 Check
function checkAnswerEight(event) { //change

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 3) { 
        console.log("Correct");
        playCorrect.play();
        feedbackText.textContent = correctText;
        score++;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsNine(); //change
    } else {
        console.log("Wrong");
        playIncorrect.play();
        feedbackText.textContent = incorrectText;
        timeRemaining -= 10;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsNine(); //change

    }

}

//Q9
function displayQuestionsNine() {
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[8].question; //change

    for (var i = 0; i < questions[8].answers.length; i++) { //change
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[8].answers[i]; //change
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswerNine); //change;

        console.log(window.document.body.children[4]);
    }
}

//Q9 Check
function checkAnswerNine(event) { //change

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 1) { // <----
        console.log("Correct");
        playCorrect.play();
        feedbackText.textContent = correctText;
        score++;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsTen(); //change
    } else {
        console.log("Wrong");
        playIncorrect.play();
        feedbackText.textContent = incorrectText;
        timeRemaining -= 10;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        displayQuestionsTen(); //change

    }

}


function displayQuestionsTen() {
    questionEl.setAttribute("class", "");
    questionTitle.innerHTML = questions[9].question; //reference to Q. index in questions.js

    for (var i = 0; i < questions[9].answers.length; i++) {
        let j = i + 1;
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute("data-index", i);
        choiceButton.textContent = j + " " + questions[9].answers[i]; //appending the text content of the question properties;
        choiceContainer.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswerTen);

        console.log(window.document.body.children[4]);
    }
}

function checkAnswerTen(event) {

    let response = Number(event.target.getAttribute("data-index"))
    if (response === 2) {
        console.log("Correct");
        playCorrect.play();
        feedbackText.textContent = correctText;
        score++;
        let buttons = choiceContainer.querySelectorAll('button');
        buttons.forEach((button) => {
            button.remove();
        });
        endPhase();
    } else {
        console.log("Wrong");
        playIncorrect.play();
        feedbackText.textContent = incorrectText;
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
        endPhase();
      
    }
}

function endPhase() {
    hideFeedback();
    clearInterval(timeInterval);
    questionEl.setAttribute("class", "hide");
    gameEndEl.setAttribute("class", "feedback");

    finalScoreEl.innerHTML = score;

    submitScoreEl.addEventListener("click", function(){
        
        let arr = JSON.parse(localStorage.getItem('results')) || [];
        
        user = userInitial.value.trim();
        let result = {
            initials: user,
            score: score,
        };
        
        arr.push(result);
        localStorage.setItem('results', JSON.stringify(arr));
        location.href ='highscores.html';
    })


}

