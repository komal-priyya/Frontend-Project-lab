

const input = document.querySelector("input")


const buttons = document.querySelectorAll("button")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // const display = document.querySelector(".display")
        const value = btn.innerText;
        const lastchar = input.value[input.value.length - 1]
const operators= ["+","-","*"," /"]

       
     

        switch(value) {

            case "=":
                try{
                    input.value= eval(input.value);

                }catch{
                    input.value= '';
                }
                break;


               case '⨯':

               input.value= input.value.slice(0,-1)
               break;

               case 'C':
                input.value= ''
                break;

            default:
                if(operators.includes(value) &&
            operators.includes(lastchar))
            {
                return;
            }

            input.value += value;
        }






    })
})

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ("0123456789+-*/.".includes(key)) {
    input.value += key;
  }

  if (key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (key === "Enter") {
    try {
      input.value = eval(input.value);
    } catch {
      input.value = "";
    }
  }
});
