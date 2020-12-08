//GK CLI app 
var readlineSync = require("readline-sync");
var chalk = require("chalk");

console.log(chalk.bgCyan.inverse("GK Quiz \n\n\n"));

var user = readlineSync.question("Please Enter Your Name!!\n");
console.log(chalk.bgYellow("\nWelcome, "+ user));
console.log(chalk.bgMagenta("\nLet's Start the Quiz\n\n"));

var score = 0;

function quiz(ans,index) {
  if(index === ans) {
    console.log(chalk.green("Congratulation, It's Right Answer\n"));
    score+=1;
  }
  else{
    console.log(chalk.red("It's Wrong Answer\n"));
    score-=1;
  }
}

var best = [
  {
    name: "Aakash",
    score: 5
  },
  {
    name: "vicky",
    score: 4
  }
]

var questions = [
  {
    ques: "Who is the first woman to head a public sector bank?",
    options: ["Arundhati Bhattacharya","Shikha Sharma","Chanda Kochar","Usha Ananthasubramanyan"],
    a: 0
  },
  {
    ques: "When is the International Yoga Day celebrated?",
    options: ["June 21","March 21","April 22","May 31"],
    a: 0
  },
  {
    ques: "Who has been appointed by the Government again as the Solicitor General for the next three years?",
    options: ["Harish Salve","Tushar Mehta","Abhi Singhvi","Dushyant Dave"],
    a: 1
  },
  {
    ques: "Ryder Cup is associated with which sport?",
    options: ["Horse Race","Racing","Golf","Soccer"],
    a: 2
  },
  {
    ques: "Who of these were famous in the name of ' Sher—a—Punjab '?",
    options: ["Rajguru","Bhagat Singh","Udham Singh","Lala Lajpat Rai"],
    a: 3
  }

];


for(var i=0;i<questions.length;i++){
  console.log(questions[i].ques);
  index = readlineSync.keyInSelect(questions[i].options, "Enter Your Answer");
  quiz(questions[i].a,index);
}

console.log(chalk.italic.bgYellow("Total Score is: "+ score));

if(score == 5){
console.log(chalk.bgCyan("\n\nCongrats!! You have reached the high score!\n"));
}

console.log(chalk.bold.white("\nsend screenshot so that I can add your name in high score data structure.\n\n"));

console.log(chalk.bgGrey("Other high scorers\n"));
for(var i=0; i<best.length; i++){
  console.log(chalk.magenta.bold(best[i].name," : ", best[i].score))
};
