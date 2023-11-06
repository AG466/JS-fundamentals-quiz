//displayEachHighScore
//get scores from memory
let userScore = JSON.parse(localStorage.getItem("results"));
console.log(userScore);
//scores will be appended under Ordered list
let scoreboard = document.getElementById("highscores");

console.log("****",userScore);
var liOne = document.createElement("li");
var liTwo = document.createElement("li");

liOne.textContent = userScore +" "+ userInitials;

scoreboard.appendChild(liOne);



