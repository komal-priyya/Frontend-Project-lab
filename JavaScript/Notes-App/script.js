const addBtn = document.querySelector(".add-btn")

addBtn.addEventListener("click", () => {
   
    const notesDiv = document.createElement("div")
    notesDiv.classList.add("noteCard");

    const title = document.createElement("span")
    // title.innerText="title"
    title.classList.add("title")
    const description = document.createElement("p")
    // description.innerText="description"
    description.classList.add("description")
    const titlefield = document.querySelector(".title-field")
    const descriptionfield = document.querySelector(".description-field")
    title.innerText = titlefield.value;
    description.innerText = descriptionfield.value


    notesDiv.append(title, description)
    const notesbox = document.querySelector(".notes-box")
    notesbox.append(notesDiv)
 
     titlefield.value=""
     descriptionfield.value=""

     if(titlefield && description == ""){
        return 
     }

    // const title= document.querySelector("span")
    // const description=document.querySelector("p")

})   