var readLineSync = require("readline-sync");
const chalk=require("chalk")

var userName = readLineSync.question(chalk.green("Welcome To My CLI App. I am Archit and we will play a short game to check how much do you know me"));

var userName = readLineSync.question(chalk.green("First, What is your name "));

console.log("Welcome, "+userName+". How well do you know me ? ");
highScore={
  Name:"Bhaskar Jain",
  Score:2
};
var score=0;
questionList=[{
  question:"What is my Full Name? ",
  answer:"Archit Jain"
},
{
  question:"Where do I live? ",
  answer:"Udaipur"
},
{ 
  question:"Where do I work? ",
  answer:"Advaiya"
},
{ 
  question:"What was my college name? ",
  answer:"Techno India NJR Institute of Technology"
}];
function printScore(scoreNumber)
{
  if(scoreNumber<0)
  {
    console.log(chalk.red("Current Score : "+scoreNumber));
  }
  else
  {
    console.log(chalk.green("Current Score : "+scoreNumber));
  }
}
function play(question,answer){
  var userAnswer=readLineSync.question(chalk.blue(question));
  if(answer.toUpperCase()===userAnswer.toUpperCase())
  {
    console.log(chalk.green("Correct Answer !!!"));
    score=score+1;

  }
  else
  {
    console.log(chalk.red("You have made a mistake"));
  }
}

for(var i=0;i<questionList.length;i++){
  play(questionList[i].question,questionList[i].answer);
  printScore(score);
}
console.log("Final Score : "+score);

if(score>=highScore.Score){
    console.log("High Score : "+highScore.Score);
    highScore.Name=userName;
    highScore.Score=score;
    console.log(chalk.magentaBright("You have scored the highest.!!"));
    console.log(chalk.magentaBright("New high Score Name : "+highScore.Name));
    console.log(chalk.magentaBright("New High Score : "+highScore.Score));
}