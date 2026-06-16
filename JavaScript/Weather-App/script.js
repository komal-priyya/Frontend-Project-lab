    const button= document.querySelector("button")

    const cityInput= document.querySelector('input')



async function getData(url){
    const response = await fetch(url);
    const data= await response.text();
    console.log(data)
  return data  
}

// getData();

button.addEventListener("click" , async ()=>{
const city= cityInput.value

  const url =
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
   let results= getData(url)
})


