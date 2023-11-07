//displayEachHighScore
//get scores from memory
let userScores = JSON.parse(localStorage.getItem("results"));
let scoreboard = document.getElementById("highscores");
let clearEl = document.getElementById("clear");

console.log(userScores[0].initials);
console.log(userScores[0].score);

for(var i = 0; i< userScores.length; i++){
    var playerInitials = userScores[i].initials;
    var playerScore = userScores[i].score;
    var li = document.createElement("li");
    li.textContent = playerInitials + " "+ playerScore;
    scoreboard.appendChild(li);

};


clearEl.addEventListener("click", function(){

    localStorage.clear();
    if(scoreboard){
        while(scoreboard.firstChild){
            scoreboard.removeChild(scoreboard.firstChild);
        }
    }
    
});