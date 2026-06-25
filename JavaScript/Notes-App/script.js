const addBtn = document.querySelector(".add-btn")


const titlefield = document.querySelector(".title-field")
const descriptionfield = document.querySelector(".description-field")

function  createNoteCard(note){
 const notesDiv = document.createElement("div")
    notesDiv.classList.add("noteCard");

    const title = document.createElement("span")
    // title.innerText="title"
    title.classList.add("title")

    const description = document.createElement("p")
    // description.innerText="description"

    description.classList.add("description")
    const dotbutton = document.createElement("button")
    dotbutton.innerText = " ⋮"
    title.innerText = `Title : ${note.title}`;
    description.innerText = `Description : ${note.description}`
    const btn = document.createElement("button")

    notesDiv.append(title, description, dotbutton)
    const notesbox = document.querySelector(".notes-box")
    notesbox.append(notesDiv)
}

let savedNotes = JSON.parse(localStorage.getItem("notes"));
// let savedNotes = JSON.parse(localStorage.getItem("notes"));

if(savedNotes){
    for(let i = 0; i < savedNotes.length; i++){
        createNoteCard(savedNotes[i]);
    }
}

addBtn.addEventListener("click", () => {

    if (titlefield.value.trim() == '' || descriptionfield.value.trim() == '') {
        return;
    }
let notes ;


// let savedNotes =JSON.parse(localStorage.getItem("notes"))







if(savedNotes){
    notes=savedNotes;
    console.log(notes)
}else{
    notes=[]
}

let note = {
    title: titlefield.value,
    description: descriptionfield.value,
}

notes.push(note)
console.log(notes)
localStorage.setItem("notes", JSON.stringify(notes))

createNoteCard(note)
   

    titlefield.value = ""
    descriptionfield.value = ""



})


