
let editingId = null;
const addBtn = document.querySelector(".add-btn")

const notesbox = document.querySelector(".notes-box");
const titlefield = document.querySelector(".title-field")
const descriptionfield = document.querySelector(".description-field")

function  createNoteCard(note){
 const notesDiv = document.createElement("div")
    notesDiv.classList.add("noteCard");
//     const colors = [
//     "#FFE082",
//     "#FFCCBC",
//     "#C8E6C9",
//     "#BBDEFB",
//     "#E1BEE7",
//     "#F8BBD0"
// ];

// notesDiv.style.background =
//     colors[Math.floor(Math.random() * colors.length)];

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
   
    notesbox.append(notesDiv) 




    dotbutton.addEventListener("click",()=>{
        if(menu.style.display=="none" ||  menu.style.display === ""){
            menu.style.display="block"
        }
        else{
            menu.style.display="none"
        }
    })
    Deletebtn.addEventListener("click", ()=>{
notesDiv.remove();

    let savednotes = JSON.parse(localStorage.getItem("notes")) || [];

savednotes = savednotes.filter(n => n.id !== note.id);
    localStorage.setItem("notes", JSON.stringify(savednotes));

    })
editbtn.addEventListener("click", ()=>{
  titlefield.value = note.title;
    descriptionfield.value = note.description;

    editingId = note.id;

    addBtn.innerText = "Save";
   
   
    
    

    }

)

}





let savedNotes = JSON.parse(localStorage.getItem("notes"));
// let savedNotes = JSON.parse(localStorage.getItem("notes"));

if(savedNotes){
    for(let i = 0; i < savedNotes.length; i++){
        createNoteCard(savedNotes[i]);
    }
}





addBtn.addEventListener("click", () => {

    if (titlefield.value.trim() === "" || descriptionfield.value.trim() === "") {
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    if (editingId === null) {

        let note = {
            id: Date.now(),
            title: titlefield.value,
            description: descriptionfield.value
        };

        notes.push(note);

        localStorage.setItem("notes", JSON.stringify(notes));

        createNoteCard(note);

    } else {

        notes = notes.map(note => {
            if (note.id === editingId) {
                note.title = titlefield.value;
                note.description = descriptionfield.value;
            }
            return note;
        });

        localStorage.setItem("notes", JSON.stringify(notes));

        location.reload();

        editingId = null;
        addBtn.innerText = "Add";
    }

    titlefield.value = "";
    descriptionfield.value = "";
});


