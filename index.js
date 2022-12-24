var readlineSync = require("readline-sync");
console.log("WELCOME TO A QUIZ ON VIRAT KOHLI");
var userName = readlineSync.question("Enter your name here: ");
console.log("Welcome "+userName+", Are you ready? Okay!So,Let's start! ");
console.log("-----------------------------------------");

var score=0;
function viratquiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
console.log("You are right.");
    score=score+1;
}else{
    console.log("You are wrong!!");
score=score-1;
  }
  console.log("Your score is:" ,score);
  console.log("-----------------------------------------");
}

var questions = [
{question:"Which year did Virat Kohli made his international debut? ",
answer: "2008"},
  {question:"What is the nickname of Virat Kohli? ",
answer: "chiku"},
{question : "What is the age of Virat Kohli? ",
answer: "34"},
{question : "How many centuries has Virat Kohli under his name in international cricket? ",
answer: "72"},
{question:"Jersey number of Virat Kohli in ODIs is? ",
answer: "18"},
{question: "Which team does Virat Kohli play for,in IPL? ",
answer :"RCB"},
];

for (var i=0;i<questions.length;i++){
  viratquiz(questions[i].question,questions[i].answer);
}
console.log("YOU SCORED:",score);
console.log("Thanks for playing the quiz.");