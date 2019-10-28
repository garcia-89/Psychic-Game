var letterChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses = 0; 
var guessesLeft = 9;

document.onkeyup = function () {

  var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];  
  var playerGuess = event.key; 
  var yourGuess = playerGuess;
  
  if (playerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)]) {
    
    if (playerGuess === computerGuess) {
      wins++;
    }
    else if (guessesLeft == 0) {
      losses++;
      guessesLeft = 9;
    }
    else if (yourGuess.length < 0) {
    }
    else {
      guessesLeft--;
    }
  var score =
  "<p>" + "Wins: " + wins + "</p>" +
  "<p>" + "Losses: " + losses + "</p>" +
  "<p>" + "Guesses Left: " + guessesLeft + "</p>";
  document.querySelector("#gameScore").innerHTML = score;
  var yourGuess = " " + yourGuess;
  document.querySelector("#guesses").innerHTML += yourGuess;
  }
}

