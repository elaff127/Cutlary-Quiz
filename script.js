//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var Spoon = 0;
var Fork = 0;
var Knife = 0

var q1a1 = document.getElementById ("q1a1");
var q1a2 = document.getElementById ("q1a2");
var q1a3 = document.getElementById ("q1a3");

var q2a1 = document.getElementById ("q2a1");
var q2a2 = document.getElementById ("q2a2");
var q2a3 = document.getElementById ("q2a3");

var q3a1 = document.getElementById ("q3a1");
var q3a2 = document.getElementById ("q3a2");
var q3a3 = document.getElementById ("q3a3");

var q4a1 = document.getElementById ("q4a1");
var q4a2 = document.getElementById ("q4a2");
var q4a3 = document.getElementById ("q4a3");

var q5a1 = document.getElementById ("q5a1");
var q5a2 = document.getElementById ("q5a2");
var q5a3 = document.getElementById ("q5a3");

//store HTMl elements using the DOM 
var result = document.getElementById ("result");

//#TODO: Use the DOM to create variables for the first quiz question.



//#TODO: Add Event Listeners to your answer choice variables.

q1a1.addEventListener("click", fork);
q1a2.addEventListener("click", spoon);
q1a3.addEventListener("click", knife);

q2a1.addEventListener("click", spoon);
q2a2.addEventListener("click", knife);
q2a3.addEventListener("click", fork);

q3a1.addEventListener("click", spoon);
q3a2.addEventListener("click", knife);
q3a3.addEventListener("click", fork);

q4a1.addEventListener("click", knife);
q4a2.addEventListener("click", spoon);
q4a3.addEventListener("click", fork);

q5a1.addEventListener("click", fork);
q5a2.addEventListener("click", knife);
q5a3.addEventListener("click", spoon);


//#TODO: Define quiz functions here
function spoon() {
  Spoon += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " Spoon = " + Spoon);

  updateResult();
}

function fork() {
  Fork += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " Fork = " + Fork);
  
  updateResult();
}

function knife() {
  Knife += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " Knife = " + Knife);
  
  updateResult();
} 


//
function updateResult(){
  if (Spoon >= 3 && questionCount == 5){
result.innerHTML = "YOU ARE A SPOON!";
 }
 else if(Fork >=3 && questionCount ==5){
result.innerHTML = "YOU ARE A FORK!";
 }
 else if(Knife >=3 && questionCount ==5){
result.innerHTML = "YOU ARE A KNIFE!";
 }

 else if (Spoon ==2 && Fork ==2 && Knife ==1){
result.innerHTML = "YOU ARE A SPORK!";
 }
 else if (Spoon ==1 && Fork ==2 && Knife ==2){
result.innerHTML = "YOU ARE A FORIFE! (aka FORK-KNIFE)";
 }
 else if (Spoon ==2 && Fork ==1 && Knife ==2){
result.innerHTML = "YOU ARE A SPIFE! (aka SPOON-KNIFE)";
 } 
}

//restart button
var restart = document.getElementById ("restart");
restart.addEventListener("click", restartQ);

function restartQ () {
  console.log ("Quiz has restarted.")
  result.innerHTML = "...";
  questionCount = 0;
  Spoon = 0;
  Fork = 0;
  Knife = 0;
}
