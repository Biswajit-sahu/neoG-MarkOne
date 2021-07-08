var promptsync = require('prompt-sync')();
var score = 0;

//array of objects of question 
var questions = [{
question : "Where do I live?",
answer : "Anugul"
}, {
question : "What is my favourite dish?",
answer : "Biriyani"
}, {
question : "what am i studying?",
answer : "Btech"
},{
  question:"Where do i study?",
  answer:"GITA"
}];


//WELCOME MESSAGE FOR FRIEND
var userName = prompt("What is your name ?")
console.log("Welcome " +userName+ " hope you are doing good :) ")


function play (question, answer){
  var userAnswer = prompt(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("right");
    score = score+1;
   }
   else{
    console.log("wrong")
  }
  

 console.log("current score is " +score );
} 




//looping

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
 //FINALSCORE
        console.log("Yay, You Scored : ", +score );
   
