const input = document.querySelector(".inpbtn")

const btn = document.querySelector(".add-btn")


console.log(document.querySelector("button"))

console.log(input.value)
   

btn.addEventListener("click", (e) => {
    const li = document.createElement("li")
    const done = document.createElement("button")
    const Edit = document.createElement("button")
    const Delete = document.createElement("button")
const span= document.createElement("span")


    if (input.value === '') return

    span.textContent = input.value
    done.textContent = "Done"
    Edit.textContent = "Edit"
    Delete.textContent = "delete"



     done.addEventListener("click", () => {
        
    span.style.textDecoration = "line-through"
    span.style.color = "red"
    done.textContent="undone"
  


    done.addEventListener("click", () =>{
        done.textContent="done"
    })
  })

    done.classList.add("dn-btn")
    Edit.classList.add("dn-btn")
    Delete.classList.add("dn-btn")


//  Edit.addEventListener( "click" ,() => {
//     const   isDone =    



//     })




done.addEventListener("click", () => {
  const li = done.parentElement;         // step up to li
  const span = li.querySelector("span"); // step across to span
  
  const isDone = span.classList.toggle("done");
  done.textContent = isDone ? "Undone" : "Done";
  
});

li.classList.add('todo-item')
    const ul = document.querySelector("ul")
    li.append(span ,done, Edit, Delete)
    ul.append(li)
    input.value = ""


   
})

















