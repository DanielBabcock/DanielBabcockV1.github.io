// "use strict"
// console.log("conversion.js: ");

// formula you time will === (700/Your Power)*Listed Time

// **********************
// *    Get elements:      *
// **********************
let pwr = document.getElementById("power");
let cookTimeMin = document.getElementById("cookTimeM");
let cookTimeSec = document.getElementById("cookTimeS");
let answer = document.getElementById("answerArea");
let calc = document.getElementById("calculate");

// **********************
// *    Add listeners:      *
// **********************
calc.addEventListener("click", function(){
    yourTime();
});

// **********************
// *    Declare funtions:      *
// **********************

function yourTime() {

    let minutesToMilliseconds = cookTimeMin.value * 60000;
        console.log("minutesToMilliseconds :", minutesToMilliseconds);

    let secondsToMilliseconds = cookTimeSec.value * 1000;
        console.log("secondsToMilliseconds:", secondsToMilliseconds);

    let totalMilliseconds = minutesToMilliseconds + secondsToMilliseconds;
        console.log("totalMilliseconds :", totalMilliseconds);

    let powerAdjustedMilliseconds = (700 / pwr.value) * totalMilliseconds;
        console.log("powerAdjustedMilliseconds: ", powerAdjustedMilliseconds);

    let newMinutes = Math.floor(powerAdjustedMilliseconds / 60000);
        console.log("newMinutes :", newMinutes);
    
    let newSeconds = ((powerAdjustedMilliseconds % 60000) / 1000).toFixed(0);
        console.log("newSeconds :", newSeconds);

        answerAreaA.innerHTML = newMinutes;
        answerAreaB.innerHTML = newSeconds;
        
    return newMinutes + ":" + (newSeconds < 10 ? '0' : '') + newSeconds;
    
    console.log("Something happening after return in yourTime : ");
        
    };

    yourTime();
    console.log(" Something happening after yourTime: ");
