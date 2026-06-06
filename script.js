const input = document.querySelector(".inpbtn")

const btn = document.querySelector(".add-btn")


console.log(document.querySelector("button"))

console.log(input.value)
   

btn.addEventListener("click", (e) => {
    const li = document.createElement("li")
    const done = document.createElement("button")
    const Edit = document.createElement("button")
    const Pending = document.createElement("button")



    if (input.value === '') return

    li.textContent = input.value
    done.textContent = "Done"
    Edit.textContent = "Edit"
    Pending.textContent = "Pending"



     done.addEventListener("click", () => {
    li.style.textDecoration = "line-through"
    li.style.color = "red"
  })

    done.classList.add("dn-btn")
    Edit.classList.add("dn-btn")
    Pending.classList.add("dn-btn")


li.classList.add('todo-item')
    const ul = document.querySelector("ul")
    li.append(done, Edit, Pending)
    ul.append(li)
    input.value = ""
})















