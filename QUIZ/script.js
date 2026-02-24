const questions = [
    {
        question: "Which language structures web pages?",
        answers: [
            { text: "HTML", correct: true },
            { text: "CSS", correct: false },
            { text: "Python", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "Which property changes text color in CSS?",
        answers: [
            { text: "color", correct: true },
            { text: "font-style", correct: false },
            { text: "background", correct: false },
            { text: "text-color", correct: false }
        ]
    },
    {
        question: "Which tag is used to insert an image?",
        answers: [
            { text: "<img>", correct: true },
            { text: "<image>", correct: false },
            { text: "<src>", correct: false },
            { text: "<picture>", correct: false }
        ]
    },
    {
        question: "Which method converts JSON to object?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.object()", correct: false }
        ]
    },
    {
        question: "Which operator checks strict equality?",
        answers: [
            { text: "===", correct: true },
            { text: "==", correct: false },
            { text: "=", correct: false },
            { text: "!=", correct: false }
        ]
    },
    {
        question: "Which company developed Java?",
        answers: [
            { text: "Sun Microsystems", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "IBM", correct: false }
        ]
    },
    {
        question: "Which database is NoSQL?",
        answers: [
            { text: "MongoDB", correct: true },
            { text: "MySQL", correct: false },
            { text: "Oracle", correct: false },
            { text: "PostgreSQL", correct: false }
        ]
    },
    {
        question: "Which method adds element to array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "slice()", correct: false }
        ]
    },
    {
        question: "Which keyword declares variable in JS?",
        answers: [
            { text: "var", correct: true },
            { text: "int", correct: false },
            { text: "define", correct: false },
            { text: "string", correct: false }
        ]
    },
    {
        question: "Which function prints in console?",
        answers: [
            { text: "console.log()", correct: true },
            { text: "print()", correct: false },
            { text: "echo()", correct: false },
            { text: "display()", correct: false }
        ]
    },
    {
        question: "Which HTML tag creates a table?",
        answers: [
            { text: "<table>", correct: true },
            { text: "<div>", correct: false },
            { text: "<tr>", correct: false },
            { text: "<td>", correct: false }
        ]
    },
    {
        question: "Which protocol is secure?",
        answers: [
            { text: "HTTPS", correct: true },
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "SMTP", correct: false }
        ]
    },
    {
        question: "Which loop runs at least once?",
        answers: [
            { text: "do...while", correct: true },
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "foreach", correct: false }
        ]
    },
    {
        question: "Which method removes last array element?",
        answers: [
            { text: "pop()", correct: true },
            { text: "push()", correct: false },
            { text: "shift()", correct: false },
            { text: "splice()", correct: false }
        ]
    },
    {
        question: "Which CSS property makes text bold?",
        answers: [
            { text: "font-weight", correct: true },
            { text: "text-bold", correct: false },
            { text: "font-style", correct: false },
            { text: "weight", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used for forms?",
        answers: [
            { text: "<form>", correct: true },
            { text: "<input>", correct: false },
            { text: "<label>", correct: false },
            { text: "<button>", correct: false }
        ]
    },
    {
        question: "Which symbol is used for JS single-line comments?",
        answers: [
            { text: "//", correct: true },
            { text: "#", correct: false },
            { text: "<!-- -->", correct: false },
            { text: "**", correct: false }
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Netscape", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "IBM", correct: false }
        ]
    },
    {
        question: "Which keyword is used in Java for inheritance?",
        answers: [
            { text: "extends", correct: true },
            { text: "inherits", correct: false },
            { text: "implements", correct: false },
            { text: "super", correct: false }
        ]
    },
    {
        question: "Which method converts object to JSON?",
        answers: [
            { text: "JSON.stringify()", correct: true },
            { text: "JSON.parse()", correct: false },
            { text: "JSON.object()", correct: false },
            { text: "JSON.convert()", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        score++;
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();

    let percentage = (score / questions.length) * 100;
    let performanceMessage = "";

    if (percentage >= 80) {
        performanceMessage = "🌟 Excellent Performance!";
    } else if (percentage >= 50) {
        performanceMessage = "👍 Good Job!";
    } else {
        performanceMessage = "📚 Needs Improvement!";
    }

    questionElement.innerHTML = `
        Quiz Completed! <br><br>
        Your Score: ${score} / ${questions.length} <br>
        Percentage: ${percentage.toFixed(2)}% <br><br>
        ${performanceMessage}
    `;

    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";
    nextButton.onclick = startQuiz;
}

startQuiz();