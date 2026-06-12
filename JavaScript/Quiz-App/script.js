
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


let options = Data[currentQuestion].options
for (let i = 0; i < options.length; i++) {
    let li = document.createElement("li")
    li.innerText = options[i]
    ul.append(li)
    console.log(li)


// }
const NextBtn = document.createElement("button")
const BackBtn = document.createElement("button")
BackBtn.innerText = "BACK"
NextBtn.innerText = "NEXT"
BackBtn.classList.add("back-btn")
quesBox.append(NextBtn)
span.innerText = Data[currentQuestion].Question

const nextDiv = document.createElement("div")
const contDiv = document.querySelector(".container")
NextBtn.addEventListener("click", () => {
    currentQuestion++

    options
    ul.innerHTML = ''
    span.innerText = Data[currentQuestion].Question
// let options = Data[currentQuestion].options

    for (let i = 0; i < options.length; i++) {
        let li = document.createElement("li")
        li.innerText = options[i]
        ul.append(li)





    }

})



const div = document.querySelector(".container")
div.append(quesDiv)
quesDiv.append(span, ul, BackBtn, NextBtn)
