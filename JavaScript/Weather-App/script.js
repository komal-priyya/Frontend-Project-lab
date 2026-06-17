const button = document.querySelector("button");

const cityInput = document.querySelector('input');



async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    return data;
}

button.addEventListener("click", async () => {
    const city = cityInput.value;

    const url =
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

    let geoData = await getData(url);
    if (!geoData) {
        alert("city not found")
    };
    console.log(geoData);
    const lat = geoData.results[0].latitude;
    const lon = geoData.results[0].longitude;
    console.log(lat, lon);

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    const WeatherResponse = await fetch(weatherUrl);
    const weatherData = await WeatherResponse.json();
    console.log(weatherData);

    const cityname = document.querySelector(".cityname");
    const temp = document.querySelector(".temp");
    const humidity = document.querySelector(".humidity");
    const weatherIcon = document.querySelector(".weather-icon");
    const windSpeed = document.querySelector(".wind-speed");
    const dateTime = document.querySelector(".date-time");
   

    cityname.innerText= city;
    temp.innerText= `Temperature: ${weatherData.current.temperature_2m}°C`;
   humidity.innerText=`Humidity : ${weatherData.current.relative_humidity_2m}%`;

    

})


