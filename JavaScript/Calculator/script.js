

const input= document.querySelector("input")


const buttons= document.querySelectorAll("button")
let num
buttons.forEach((btn)=>{
btn.addEventListener("click",()=>{
const display= document.querySelector(".display")
const value = btn.innerText;

   
if (value === "C") {
   display.value = "";
   return;
}
console.log(display.value)
if (value === "=") {
    try{
 display.value = eval(display.value);
    } catch{
        input.value = 'Error';
    }
    return;
}
display.value +=value;


    
})
})
