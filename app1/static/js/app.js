

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const loginBox = document.querySelector(".login-box");
const registerBox = document.querySelector(".register-box");

const loginContent = document.querySelector("login-content");




let questionCounter = 0;
let currentQuestion;
let avaliableQuestions = [];
let avaliableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//pegando questões do Array avaliableQuestions
function setAvaliableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        avaliableQuestions.push(quiz[i])
    }
}

function getNewQuestion() {
    questionNumber.innerHTML = "Questão " + (questionCounter + 1) + " de " + quiz.length;

    const questionIndex = avaliableQuestions[Math.floor(Math.random() * avaliableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    const index1 = avaliableQuestions.indexOf(questionIndex);

    avaliableQuestions.splice(index1, 1);

    const optionlen = currentQuestion.options.length

    for (let i = 0; i < optionlen; i++) {
        avaliableOptions.push(i)
    }

    optionContainer.innerHTML = '';

    let animationDelay = 0.2;

    for (let i = 0; i < optionlen; i++) {

        const optonIndex = avaliableOptions[Math.floor(Math.random() * avaliableOptions.length)];

        const index2 = avaliableOptions.indexOf(optonIndex);
        avaliableOptions.splice(index2, 1);

        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)");

    }

    questionCounter++
}

function getResult(element) {
    const id = parseInt(element.id);

    if (id == currentQuestion.answer) {
        element.classList.add("correct");
        updateAnswersIndicator("correct");
        correctAnswers++;
    }
    else {
        element.classList.add("wrong");
        updateAnswersIndicator("wrong");

        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();

}

function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator() {
    answerIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswersIndicator(markType) {
    answerIndicatorContainer.children[questionCounter - 1].classList.add(markType)
}

function next() {
    if (questionCounter === quiz.length) {
        quizOver();
    }
    else {
        getNewQuestion();
    }
}

function quizOver() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
}
function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / quiz.length) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + '%';
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;
}

function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
}

function tryAgainQuiz() {
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide")
    resetQuiz();
    startQuiz();
}

function newUser() {
    loginBox.classList.add("hide")
    registerBox.classList.remove("hide")
}

function asGuest() {
    registerBox.classList.add("hide")
    homeBox.classList.remove("hide")
}

function goToHome() {
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
}

function startQuiz() {

    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");

    setAvaliableQuestions();
    getNewQuestion();

    answersIndicator();
}

window.onload = function () {
    homeBox.querySelector(".total-question").innerHTML = quiz.length;
}


//Checando se o usuário é cadastrado:

var db = openDatabase("database");

function isInDatabase() {
    userCheck = document.getElementById("username").value;
    passwordCheck = document.getElementById("password").value;
    console.log(userCheck);
    console.log(passwordCheck);

    check = db.transaction(function (check) {
        check.executeSql("SELECT user FROM users WHERE CODIGO = 'userCheck'")
    })
    console.log(check)
}