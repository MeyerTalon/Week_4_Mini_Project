var winCount = 0;
var lossCount = 0;
var answerArr = ["JavaScript", "function", "modulus", "Event Listener", "timerInterval"];


var timeLeft = 10;
function countdown() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft === 0) {
            timerInterval(clearInterval);
        }
    }, 1000);
}

inputArea.addEventListener("keydown", function(event) {

});