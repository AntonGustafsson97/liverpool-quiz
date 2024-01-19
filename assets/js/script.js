/* 10 of these 15 questions will be randomly choosen */
let questions = [
    {
        question: 'Who is the current manager of the team?',
        answer: [
            { text: 'Jurgen klopp', correct: true },
            { text: 'Pep Guardiola', correct: false },
            { text: 'José Mourinho', correct: false },
            { text: 'Erik ten Hag', correct: false },
        ]
    },
    {
        question: 'What number does Virgil van Dijk wear?',
        answer: [
            { text: '5', correct: false },
            { text: '8', correct: false },
            { text: '4', correct: true },
            { text: '3', correct: false },
        ]
    },
    {
        question: 'Who has the current record for goals scoread at Liverpool FC?',
        answer: [
            { text: 'Roger Hunt', correct: false },
            { text: 'Michael Owen', correct: false },
            { text: 'Steven Gerrard', correct: false },
            { text: 'Ian Rush', correct: true },
        ]
    },
    {
        question: 'Who has the most appearances in the clubs history?',
        answer: [
            { text: 'Jamie Carragher', correct: false },
            { text: 'Tommy Smith', correct: false },
            { text: 'Ian Callaghan', correct: true },
            { text: 'Phil Neal', correct: false },
        ]
    },
    {
        question: 'What year was the club founded?',
        answer: [
            { text: '1892', correct: true },
            { text: '1901', correct: false },
            { text: '1876', correct: false },
            { text: '1920', correct: false },
        ]
    },
    {
        question: 'What animal is displayed on the club logo?',
        answer: [
            { text: 'Bird', correct: true },
            { text: 'Tiger', correct: false },
            { text: 'Bear', correct: false },
            { text: 'Wolf', correct: false },
        ]
    },
    {
        question: 'How many times have the club won the league title?',
        answer: [
            { text: '24', correct: false },
            { text: '15', correct: false },
            { text: '10', correct: false },
            { text: '19', correct: true },
        ]
    },
    {
        question: 'Who wears the number 11 on the shirt?',
        answer: [
            { text: 'Mohamed Salah', correct: true },
            { text: 'Darwin Nunez', correct: false },
            { text: 'Luis Diaz', correct: false },
            { text: 'Dominik Szoboszlai', correct: false },
        ]
    },
    {
        question: 'When was the last time the club won the UEFA Champions League?',
        answer: [
            { text: '2015', correct: false },
            { text: '2002', correct: false },
            { text: '2019', correct: true },
            { text: '2021', correct: false },
        ]
    },
    {
        question: 'What is Liverpools arena called?',
        answer: [
            { text: 'Emirates Stadium', correct: false },
            { text: 'Goodison Park', correct: false },
            { text: 'Anfield', correct: true },
            { text: 'Stamford Bridge', correct: false },
        ]
    },
    {
        question: 'What is the capacity of Liverpools arena?',
        answer: [
            { text: '38971', correct: false },
            { text: '61276', correct: true },
            { text: '81992', correct: false },
            { text: '78554', correct: false },
        ]
    },
    {
        question: 'What color is associated with Liverpool FC?',
        answer: [
            { text: 'Green', correct: false },
            { text: 'Black', correct: false },
            { text: 'Blue', correct: false },
            { text: 'Red', correct: true },
        ]
    },
    {
        question: 'At what age did Trent Alexander Arnold make his debut in the first team?',
        answer: [
            { text: '17', correct: false },
            { text: '18', correct: true },
            { text: '19', correct: false },
            { text: '20', correct: false },
        ]
    },
    {
        question: 'Liverpool won the league title in 2019-2020, how many years had it been since their last league title?',
        answer: [
            { text: '7', correct: false },
            { text: '15', correct: false },
            { text: '30', correct: true },
            { text: '23', correct: false },
        ]
    },
    {
        question: 'Liverpools most expensive signing is?',
        answer: [
            { text: 'Alisson Becker', correct: false },
            { text: 'Virgil Van Dijk', correct: false },
            { text: 'Darwin Nunez', correct: true },
            { text: 'Diogo Jota', correct: false },
        ]
    },

];

/* Variables */
let currentQuestion = null;
let questionIndex = 0;
let shuffledQuestions = [];
let currentScore = 0;
let blocked = false;
const maxQuestion = 5;


/* Display question function */
function displayQuestion(currentQuestion) {
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('answer1').innerText = currentQuestion.answer[0].text;
    document.getElementById('answer2').innerText = currentQuestion.answer[1].text;
    document.getElementById('answer3').innerText = currentQuestion.answer[2].text;
    document.getElementById('answer4').innerText = currentQuestion.answer[3].text;
}
/* Shuffle questions function*/
function shuffleQuestions() {
    let currentIndex = questions.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [questions[currentIndex], questions[randomIndex]] = [
            questions[randomIndex], questions[currentIndex]];
    }
    return questions;
}

function checkAnswer(event) {
    if (blocked === false) {
        blocked = true;
        const buttonClicked = event.target;
        currentQuestion.answer.forEach((answer) => {
            if (answer.text === buttonClicked.innerText) {
                if (answer.correct) {
                    buttonClicked.classList.add('green');
                    currentScore = currentScore + 1;
                    document.getElementById('score-area').innerText = 'Your score is' + currentScore;
                } else {
                    buttonClicked.classList.add('red');
                }

            }
        });
        setTimeout(() => {
            resetAnswers();
            showNextQuestion();
            blocked = false;
        }, 3000);
    }
}

function resetAnswers() {
    document.querySelectorAll('.answer').forEach((button) => {
        button.classList.remove('green');
        button.classList.remove('red');
    });
}

function resetGame() {
    currentQuestion = null;
    questionIndex = 0;
    shuffledQuestions = [];
    currentScore = 0;
    blocked = false;

    document.getElementById('score-area').innerText = 'Your score is' + currentScore;
    document.getElementById("play-again").style.display = "none";
    startGame();
}

function showNextQuestion() {
    if (questionIndex < maxQuestion) {
        currentQuestion = shuffledQuestions[questionIndex];
        questionIndex = questionIndex + 1;
        displayQuestion(currentQuestion);
    } else {

        document.getElementById("play-again").style.display = "block";

        playAgainButton.addEventListener("click", resetGame)
        document.getElementById("dialog").showModal()
    }
}

function startGame() {
    shuffledQuestions = shuffleQuestions();
    showNextQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    startGame();
})


document.querySelectorAll('.answer').forEach((button) => {
    button.addEventListener('click', (event) => {
        checkAnswer(event);

    })
})
