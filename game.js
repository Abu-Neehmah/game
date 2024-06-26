// console.log("Hello Word");
const question = document.querySelector('#question');
const choice = Array.from(document.getElementsByClassName('choice-text'))
// console.log(choice);

let currentQuestion = {};
let acceptingQuestion = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = {};

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

// Constant
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    console.log(availableQuestion);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestion.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    choice.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    });
    availableQuestion.splice[questionIndex, 1];

    acceptingAnswers = true;
}

choice.forEach(choice => {
    choice.addEventListener('click', e =>{
        // console.log(e.target);
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswers = selectedChoice.dataset['number'];
        console.log(selectedAnswers);
        getNewQuestion();

    })
});
startGame();