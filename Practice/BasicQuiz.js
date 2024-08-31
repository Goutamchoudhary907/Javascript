const readline=require('readline')

let rl=readline.createInterface({
    input:process.stdin ,
    output:process.stdout
});

let count=0;

let questions=[
    {
        question:"What is the capital of Japan" ,
        options: ["A) Beijing", "B) Seoul", "C) Tokyo", "D) Bangkok"],
        correctAnswer: 'c'
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["A) Python", "B) JavaScript", "C) C++", "D) Java"],
        correctAnswer: 'b'
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["A) O", "B) CO2", "C) H2O", "D) NaCl"],
        correctAnswer: 'c'
    },
    {
        question: "Which planet is known as the 'Gas Giant'?",
        options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"],
        correctAnswer: 'c'
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["A) William Shakespeare", "B) Charles Dickens", "C) Jane Austen", "D) Mark Twain"],
        correctAnswer: 'a'
    }
];

let currQuestion=0;

function askQuestion(){
    if(currQuestion < questions.length) {
      let q= questions[currQuestion];
      rl.question(`${q.question}\n${q.options.join('\n')}\nChoose correct option from (A,B,C,D): `,(option) =>{
        const userAnswer = option.trim().toLowerCase();
        console.log(`User Input: ${userAnswer.toUpperCase()}`);
        console.log(`Correct Answer: ${q.correctAnswer.toUpperCase()}`);
        if (userAnswer === q.correctAnswer) {
            count++;
            console.log("Feedback: Correct!");
        } else {
            console.log("Feedback: Incorrect");
        }
        console.log(`Score: ${count}\n`);
        currQuestion++;
        askQuestion();
      }) 
    }
    else {
        console.log(`You answered ${count} out of ${questions.length} questions correctly.`);
        console.log(`Your final score is ${(count / questions.length) * 100} %`);
        rl.close();
    }
}


askQuestion();
