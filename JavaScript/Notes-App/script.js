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
    const menu = document.createElement("div")
    const editbtn= document.createElement("button")
    const Deletebtn= document.createElement("button")
    menu.classList.add("menu")
    editbtn.classList.add("editbtn")
    Deletebtn.classList.add("deletebtn")
      editbtn.innerText="Edit"
    Deletebtn.innerText="Delete"
    menu.append(editbtn,Deletebtn)
  

    notesDiv.append(title, description, dotbutton,menu)
    const notesbox = document.querySelector(".notes-box")
    notesbox.append(notesDiv) 




    dotbutton.addEventListener("click",()=>{
        if(menu.style.display=="none" ||  menu.style.display === ""){
            menu.style.display="block"
            console.log("first")
        }
        else{
            menu.style.display="none"
        }
    })


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


