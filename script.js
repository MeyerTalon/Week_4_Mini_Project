var input = document.querySelector("#input");
var winCount = document.querySelector("#win-count");
var lossCount = document.querySelector("#loss-count");
var counter = document.querySelector("#countdown");
var starter = document.querySelector("#start");

var answerArr = ["JavaScript", "function", "modulus", "Event Listener", "timerInterval"];
var index = 0;

var numWins = 0;
var numLosses = 0;

var timeLeft = 10;
function countdown() {
    var timerInterval = setInterval(function() {
        counter.textContent = timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            timerInterval(clearInterval);
            numLosses++;
        }
    }, 1000);
}

function start() {
    var count = 0;
    input.addEventListener("keydown", function(event) {
        var key = event.key
        for (var i = 0; i < answerArr[index].length; i++) {
            if (key === answerArr[index].charAt(i)) {
                input.textContent = input.value + key;
                count++;
            }
        }
    });
    if (count === answerArr[index].length) {
        numWins++;
        winCount.textContent = numWins;
    } else {
        numLosses++;
        lossCount.textContent = numLosses;
    }
    index++;
}

starter.addEventListener("click", function(event) {
    start();
});