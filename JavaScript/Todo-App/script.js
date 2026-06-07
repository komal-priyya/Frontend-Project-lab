const input = document.querySelector(".inpbtn")

const btn = document.querySelector(".add-btn")


console.log(document.querySelector("button"))

console.log(input.value)


btn.addEventListener("click", (e) => {
    const li = document.createElement("li")
    const done = document.createElement("button")
    const Edit = document.createElement("button")
    const Delete = document.createElement("button")
    const span = document.createElement("span")


    if (input.value === '') return

    span.textContent = input.value
    done.textContent = "Done"
    Edit.textContent = "Edit"
    Delete.textContent = "delete"



    done.classList.add("dn-btn")
    Edit.classList.add("dn-btn")
    Delete.classList.add("dn-btn")








    done.addEventListener("click", () => {
        const li = done.parentElement;         // step up to li
        const span = li.querySelector("span"); // step across to span

        const isDone = span.classList.toggle("done");
        done.textContent = isDone ? "Undone" : "Done";
        console.log("first")
    });


    let isediting = false
    const editInput = null
    Edit.addEventListener("click", () => {

        if (!isediting) {
            const currentText = span.textContent
            EditInput = document.createElement("input")
            EditInput.value = currentText;
            EditInput.type = "text";

            span.replaceWith(EditInput)

            Edit.textContent = "Save"
            isediting = true;
        }
        else {
            if (EditInput.value === '') return

            console.log("first")
            span.textContent = EditInput.value;
            EditInput.replaceWith(span)

            Edit.textContent = "Edit"
            console.log(span.textContent)
            isediting = false;
        }


    })

    Delete.addEventListener( "click",() =>{

li.remove()


    })



    done.classList.add("dn-btn")
    Edit.classList.add("dn-btn")
    Delete.classList.add("dn-btn")


    li.classList.add('todo-item')
    const ul = document.querySelector("ul")
    li.append(span, done, Edit, Delete)
    ul.append(li)
    input.value = ""



})
















