const questions = [
    {
        question: "What is 11 x 11?",
        ans:[
            { text : "121" , correct: true},
            { text : "111" , correct: false},
            { text : "112" , correct: false},
            { text : "123" , correct: false},
        ]
    },
    {
        question: "What is 18 divided by 3?",
        ans:[
            { text : "9" , correct: false},
            { text : "3" , correct: false},
            { text : "6" , correct: true},
            { text : "8" , correct: false},
        ]
    },
    {
        question: "What is 99 minus 35?",
        ans:[
            { text : "64" , correct: true},
            { text : "66" , correct: false},
            { text : "62" , correct: false},
            { text : "68" , correct: false},
        ]
    },
    {
        question: "What is the square root of 64?",
        ans:[
            { text : "6" , correct: false},
            { text : "21" , correct: false},
            { text : "32" , correct: false},
            { text : "8" , correct: true},
        ]
    },
    {
        question: "What's pi?",
        ans:[
            { text : "4.15" , correct: false},
            { text : "2.23" , correct: false},
            { text : "3.14" , correct: false},
            { text : "4.32" , correct: true},
        ]
    },
]

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answers-btn');
const nextButton = document.getElementById('next');
const scoreButton = document.getElementById('score');
const valueContainer = document.createElement("div");;
let presentIndex;
let score;

function startQuiz(){
    presentIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    scoreButton.style.display = "block"
    showQuestion();
}
const showQuestion = () =>{
    resetState(); //function to reset previous question and answers.
    let presentQuestion = questions[presentIndex];
    let questionNumber = presentIndex  + 1;
    scoreButton.innerHTML = `${questionNumber} of 5`;
    questionElement.innerHTML = questionNumber + ". " + presentQuestion.question;
    presentQuestion.ans.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

const resetState = () =>{
    nextButton.disabled = true;
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

const selectAnswer = (e) =>{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("Incorrect");
    }
    //the top code is to highlight our slecion is correct or not
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.disabled = false;
}

const showScore = () =>{
    resetState();
    questionElement.innerHTML =`Your Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Restart';
    scoreButton.style.display = "none";
    nextButton.disabled = false;
    questionElement.style.textAlign = "center";
    answerButton.classList.add('circular-progress');
    answerButton.appendChild(valueContainer);
    valueContainer.classList.add('value-container');

    showProgress();
}
const handleNextButton = ()=>{
    presentIndex++;
    if(presentIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(presentIndex < questions.length){
        handleNextButton();
    }
    else{
        answerButton.classList.remove("circular-progress");
        answerButton.style.background = "none";
        questionElement.style.textAlign = "left";
        answerButton.removeChild(valueContainer);
        startQuiz();
    }
})

function showProgress(){
    let progressBar = document.querySelector(".circular-progress");
    let valContainer = document.querySelector(".value-container");
    
    let progressValue = 0;
    let progressEndValue = (score/5)*100;
    let speed = 50;

    let progress = setInterval(()=>{
        progressValue++;
        valContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(blueviolet ${progressValue*3.6}deg, rgb(227, 205, 236) ${progressValue*3.6}deg)`;//conic-gradient(#4d5bf9 ${progressValue*3.6}deg, red ${progressValue*3.6}deg)`;
        if(progressValue == progressEndValue) {
            clearInterval(progress);
        }
    })

}
startQuiz();
