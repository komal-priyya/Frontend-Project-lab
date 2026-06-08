const genBtn = document.querySelector(".gen-btn")



let letters = "0123456789ABCDEF";


function GenerateColor() {
    let color = "#"
    let num = 6;
    for (let index = 0; index < num; index++) {

        let randomIndex = Math.floor(Math.random() * 16)

        console.log(randomIndex)
        let randomCharacter = letters[randomIndex]
        console.log(randomCharacter)
        color = color + randomCharacter


    }

    console.log(color)
    return color;
}



// GenerateColor()
// console.log(newcolor)
genBtn.addEventListener("click", () => {


    const colorBtn= document.createElement("button")
     let newcolor = GenerateColor()


    // colorBtn.style.backgroundColor = newcolor
     const ul= document.querySelector("ul")
     const li = document.createElement("li")

     const dlt= document.createElement("button")
     dlt.textContent= "delete"

    li.innerText = newcolor;
    li.style.backgroundColor = newcolor;

    const div = document.createElement("div")

let deleteBtn = document.createElement("button");
deleteBtn.classList.add("deleteBtn")
deleteBtn.innerText = "Delete";

deleteBtn.addEventListener("click" ,() =>{
    li.remove()
    deleteBtn.remove()
})
div.classList.add("div")
div.append(li,deleteBtn)
    ul.appendChild(div);


    
   


})