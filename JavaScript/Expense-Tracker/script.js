

const Title= document.querySelector(".title");
const Amount= document.querySelector(".amount");
const Category = document.querySelector(".category");
const Date = document.querySelector(".date");


const addBtn= document.querySelector(".add-btn")


addBtn.addEventListener("click", ()=>{

    const Expense= document.createElement("div")
        Expense.classList.add("ExpsenseCard")

          
        const titleElement= document.createElement("span")
        const dateElement= document.createElement("span")
        const categoryElement= document.createElement("span")
        const AmountElement= document.createElement("span")
const deleteBtn = document.createElement("button")
const deleteBtnImage= document.createAttribute("img")
deleteBtnImage.src= "assets/deletebutton.webp"

deleteBtn.appendChild(deleteBtnImage)

titleElement.innerText= Title.value
dateElement.innerText= Date.value
AmountElement.innerText= Amount.value

Expense.append(titleElement,dateElement,categoryElement,AmountElement,deleteBtn)
console.log("first")
const AllExpensesBox= document.querySelector(".all-Expenses")
AllExpensesBox.append(Expense)


})

