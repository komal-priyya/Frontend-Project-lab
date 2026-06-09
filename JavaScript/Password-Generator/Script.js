const GenBtn = document.querySelector(".gen-btn")

let characters = '12345fGh@$%&IjK'
function GeneratePassword() {
    let password = ''

    let num = 8;
    for (i = 0; i < num; i++) {
        let randomIndex = Math.floor(Math.random() * 15)
        console.log(randomIndex)

        let randomNumCHar= characters[randomIndex]
        password = password + randomNumCHar;
        console.log(password)

    }

    return password;


}

GenBtn.addEventListener("click", () => {
    const divcont = document.querySelector(".container")
    let password = GeneratePassword();

    const ul = document.querySelector("ul")
    const li = document.createElement("li")
        const Delete = document.createElement("button")
const copy = document.createElement("button")
    const div = document.createElement("div")

    copy.innerText="copy"
    div.classList.add("div")
    Delete.classList.add("Btn")
    console.log(password)
    Delete.innerText = "delete"




    Delete.addEventListener("click", () =>{
        li.remove()
        Delete.remove()
    })

    copy.addEventListener("click", ()=>{
        navigator.clipboard.writeText(password)
    })
    // .append(ul)
    console.log(Delete)
    li.innerText = password;
    div.append(li, Delete)



    ul.appendChild(div)





})
// GeneratePassword()