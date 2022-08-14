//Do you Know Me Quiz

var readlineSync = require('readline-sync');

let count = 0;


var questionsArray = [
  {
    question: "What is my First name? ",
    answer: "Mallikarjuna"
  },
  {
    question: "Which is my Native Place? ",
    answer: "Nandihalli"
  },
  {
    question: "Where do I work? ",
    answer: "Paypal"
  },
  {
    question: "How old am I? ",
    answer: "26"
  },
  {
    question: "Where did I go for my college? ",
    answer: "BMSCE"
  }]



for (i = 0; i < questionsArray.length; i++) {
  runQuiz(questionsArray[i].question, questionsArray[i].answer);
}

function runQuiz(ques, ans) {
  var userAns = readlineSync.question(ques);
  if (userAns.toLowerCase() === ans.toLowerCase()) {
    count += 1;
    console.log("You are right!")
    console.log("Your current score is: ", count);
    console.log("----------------------")
  } else {
    console.log("You are wrong!")
    console.log("Your current score is: ", count);
    console.log("----------------------")
  }
}


// ex15: print the final score to the user

const scores = [{
  name: "Shashi",
  score: 5
},
{
  name: "Rahul",
  score: 5
},
{
  name: "Pinky",
  score: 4
}]
console.log("\n")
console.log("Your total score is: ", count);
console.log("\n")
console.log("Top 3 High scores are: ")
scores.map((s) => {
  console.log(s.name + ": " + s.score)
})
console.log("\n")
console.log("If you have beaten the top scores, do send the screenshot to pvmallikarjuna.dev@gmail.com")