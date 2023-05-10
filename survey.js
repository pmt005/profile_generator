const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ["What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What/Who are you listening to the most lately? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "];

let answers = [];
let index = 0;

  

const ask = function(index) {
  let returnParagraph = `
${answers[0]} likes the activity ${answers[1]}. ${answers[0]} is listening to ${answers[2]} a lot recently.
${answers[0]}'s favorite meal of the day is ${answers[3]} when they enjoy eating ${answers[4]}.
${answers[0]}'s top sport is ${answers[5]}. ${answers[0]}'s super power is ${answers[6]}.
 `;

  if (index === questions.length) {
    console.log(returnParagraph);
    rl.close();
    
  } else {
    rl.question(questions[index], (answer) => {
      answers.push(answer);
      index++;
      ask(index);
    });
  }
  
};

ask(index);







