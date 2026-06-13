
const quesBox = document.querySelector(".ques-box")

let Data = [
    {
        Question: "what is javascript",
        options: ["language", "database", "OS", "Browser"],
        correctAnswer: "language"
    },
    {
        Question: "Capital of India ",
        options: ["Delhi", "Mumbai", "Chennai", "Chennai"],
        correctAnswer: "Delhi"
    },
    {
        Question: "2+2 ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        Question: "what is React",
        options: ["library", "framework", "API", "Data Structure"],
        correctAnswer: "library"
    }
]
let currentQuestion = 0;
let quesDiv = document.querySelector(".ques-box")
let span = document.createElement("span")
let ul = document.createElement("ul")
let li = document.createElement("li")
let progressDiv= document.createElement('div')


let options = Data[currentQuestion].options
for (let i = 0; i < options.length; i++) {
    let li = document.createElement("li")
    li.innerText = options[i]
    ul.append(li)
    console.log(li)


}
const NextBtn = document.createElement("button")
const BackBtn = document.createElement("button")
const SubmitBtn = document.createElement("button")
SubmitBtn.classList.add('submit-btn')
SubmitBtn.innerText = 'SUBMIT'
BackBtn.innerText = "BACK"
NextBtn.innerText = "NEXT"
NextBtn.classList.add("next-btn")
BackBtn.classList.add("back-btn")
const RestartBtn = document.createElement("button")
RestartBtn.innerText="RESTART"
RestartBtn.classList.add("restart-btn")
RestartBtn.classList.add("restart-btn")
quesBox.append(NextBtn)
span.innerText = Data[currentQuestion].Question

const nextDiv = document.createElement("div")
const contDiv = document.querySelector(".container")
let selectedAnswer = ''
let score = 0
function renderQuestion() {


    span.innerText = Data[currentQuestion].Question;
    ul.innerHTML = "";

    let options = Data[currentQuestion].options;

    for (let i = 0; i < options.length; i++) {
        let li = document.createElement("li");
        li.innerText = options[i];


        li.addEventListener("click", () => {
           selectedAnswer = options[i];
            
           
            let allOptions = ul.querySelectorAll("li");
            allOptions.forEach(option => {
                option.style.backgroundColor = "";
            });


          if(selectedAnswer === Data[currentQuestion].correctAnswer){
        li.style.backgroundColor = "lightgreen";
                li.style.border='white'

    } else {
        li.style.backgroundColor = "red";
        li.style.border='white'
    }
            console.log(selectedAnswer);

        })


        ul.append(li);
    }
}



NextBtn.addEventListener("click", () => {

    if (selectedAnswer === Data[currentQuestion].correctAnswer) {
        score++;
    }


    // if (selectedAnswer === "") {
    //     alert("Please select an answer");
    //     return;
    // }

    if (currentQuestion < Data.length - 1)
        currentQuestion++
    renderQuestion()

    selectedAnswer = "";

})

BackBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {

        currentQuestion--
        renderQuestion()

    }
})

SubmitBtn.addEventListener("click", () => {

    if (selectedAnswer === Data[currentQuestion].correctAnswer) {
        score++;
    }

    quesDiv.innerHTML = `
        <h2>Quiz Finished!</h2>
        <p>Your Score: ${score} / ${Data.length}</p>
    `;
});

const div = document.querySelector(".container")
div.append(quesDiv)
quesDiv.append(span, ul, BackBtn, NextBtn, SubmitBtn,RestartBtn)
renderQuestion();







