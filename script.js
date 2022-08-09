/*Add your JavaScript here*/

var microwaveScore = 0; 
var ovenScore = 0; 

var questionCount = 0; // Store the number of answers clicked on

// Store HTML elements using the DOM
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", microwave);
q1a2.addEventListener("click", oven);

q2a1.addEventListener("click", oven);
q2a2.addEventListener("click", microwave);

q3a1.addEventListener("click", oven);
q3a2.addEventListener("click", microwave);

function microwave() {
  microwaveScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "microwaveScore = " + microwaveScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }

}

// Track cat score and check if quiz is complete
function oven() {
  ovenScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "ovenScore = " + ovenScore);

  if (questionCount == 3) {
    
    updateResult();
  }

}

// Update quiz result
function updateResult() {
  if (microwaveScore >= 2) {
    result.innerHTML = "You are secretly a microwave!";
    console.log("result: microwave")
  } else if (ovenScore >= 2) {
    result.innerHTML = "You are secretly an oven!";
    console.log("result: oven")
  }
}


