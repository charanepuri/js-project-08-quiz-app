const questions = [
    {
        question: "What is JavaScript?",
        answers: ["Programming Language", "Database", "Server", "Browser"],
        correct: 0
    },
    {
        question: "Which keyword is used for variables?",
        answers: ["var", "int", "string", "float"],
        correct: 0
    },
    {
        question: "Which is not a JS framework?",
        answers: ["React", "Angular", "Vue", "Django"],
        correct: 3
    },
    {
        question: "Which symbol is used for comments in JS?",
        answers: ["//", "##", "", "**"],
        correct: 0
    },
    {
        question: "Which method is used to print in console?",
        answers: ["console.log()", "print()", "echo()", "log()"],
        correct: 0
    },
    {
        question: "What does DOM stand for?",
        answers: ["Document Object Model", "Data Object Model", "Digital Object Model", "Desktop Object Model"],
        correct: 0
    },
    {
        question: "Which operator is used for strict equality?",
        answers: ["==", "===", "!=", "="],
        correct: 1
    },
    {
        question: "Which function is used to convert JSON to object?",
        answers: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        correct: 0
    },
    {
        question: "Which event occurs when user clicks?",
        answers: ["onhover", "onclick", "onchange", "onload"],
        correct: 1
    },
    {
        question: "Which keyword is used to declare constant?",
        answers: ["var", "let", "const", "static"],
        correct: 2
    },
    {
        question: "Which of the following is a ternary operator?",
        answers: ["?", ":", "?:", "if-else"],
        correct: 2
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Microsoft", "Netscape", "Google", "Oracle"],
        correct: 1
    },
    {
        question: "What is the result of '2' + 2?",
        answers: ["4", "22", "undefined", "NaN"],
        correct: 1
    },
    {
        question: "Which tag is used to write JS in HTML?",
        answers: ["<javascript>", "<scripting>", "<script>", "<js>"],
        correct: 2
    },
    {
        question: "How do you find the length of a string?",
        answers: ["length()", "len", "size", "length"],
        correct: 3
    },
    {
        question: "Which object is the top-level object in a browser?",
        answers: ["document", "window", "body", "screen"],
        correct: 1
    },
    {
        question: "Which of these is not a primitive data type?",
        answers: ["String", "Number", "Boolean", "Array"],
        correct: 3
    },
    {
        question: "What does 'NaN' stand for?",
        answers: ["New and Null", "Not a Number", "Not available Now", "Negative and Neutral"],
        correct: 1
    },
    {
        question: "Which method adds an element to the end of an array?",
        answers: ["pop()", "shift()", "push()", "unshift()"],
        correct: 2
    },
    {
        question: "Which loop is guaranteed to run at least once?",
        answers: ["for", "while", "do-while", "foreach"],
        correct: 2
    }
]

const questionEl = document.getElementById("question")
const options = document.querySelectorAll(".option")
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")
const progress = document.getElementById("progress")
const scoreEl = document.getElementById("score")

let currentIndex = 0
let score = 0

// Store selected answers
let userAnswers = new Array(questions.length).fill(null)

// Load Question
function loadQuestion() {

    const current = questions[currentIndex]

    questionEl.innerText = current.question
    progress.innerText = `Question ${currentIndex + 1} / ${questions.length}`

    options.forEach((btn, index) => {
        btn.innerText = current.answers[index]
        btn.classList.remove("correct", "wrong")

        // Restore previous selection
        if (userAnswers[currentIndex] === index) {
            btn.classList.add("correct")
        }

        btn.disabled = false
    })

}

// Select Answer
options.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        userAnswers[currentIndex] = index

        loadQuestion()

    })
})

// Next
nextBtn.addEventListener("click", () => {

    if (currentIndex < questions.length - 1) {
        currentIndex++
        loadQuestion()
    } else {
        showResult()
    }

})

// Previous
prevBtn.addEventListener("click", () => {

    if (currentIndex > 0) {
        currentIndex--
        loadQuestion()
    }

})

// Show Result
function showResult() {

    score = 0

    userAnswers.forEach((ans, i) => {
        if (ans === questions[i].correct) {
            score++
        }
    })

    questionEl.innerText = "Quiz Completed 🎉"
    document.getElementById("answers").style.display = "none"
    nextBtn.style.display = "none"
    prevBtn.style.display = "none"

    scoreEl.innerText = `Your Score: ${score} / ${questions.length}`

}

// Initial load
loadQuestion()