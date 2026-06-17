
const button = document.querySelector("button");

const cityInput = document.querySelector('input');

const savedCity = localStorage.getItem("lastCity");

if (savedCity) {
    cityInput.value = savedCity;
}
showRecentCities();
async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    return data;
}


function showRecentCities() {
    const recentSearches =
        document.querySelector(".recent-searches");

    const cities =
        JSON.parse(localStorage.getItem("cities")) || [];

    recentSearches.innerHTML = "";

    cities.forEach(city => {

        const btn = document.createElement("button");

        btn.innerText = city;

        btn.addEventListener("click", () => {
            cityInput.value = city;
        });

        recentSearches.appendChild(btn);
    });
}
const clearBtn = document.querySelector(".clear-btn");

cityInput.addEventListener("input", () => {
    if (cityInput.value) {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    }
});

clearBtn.addEventListener("click", () => {
    cityInput.value = "";
    clearBtn.style.display = "none";
    cityInput.focus();
});

button.addEventListener("click", async () => {
    const city = cityInput.value;

    const url =
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

    let geoData = await getData(url);
    if (!geoData.results || geoData.results.length === 0) {
        alert("City not found");
        return;
    }
    localStorage.setItem("lastCity", city);
showRecentCities();



    // Save recent cities
    let cities =
        JSON.parse(localStorage.getItem("cities")) || [];

    // if (!cities.includes(city)) {
    //     cities.push(city);
    // }

    // // Keep only last 5 cities
    // if (cities.length > 5) {
    //     cities.shift();
    // }
    if (!cities.some(
        c => c.toLowerCase() === city.toLowerCase()
    )
) {
    cities.push(city);
}

    localStorage.setItem(
        "cities",
        JSON.stringify(cities)
    );

    console.log(geoData);
    const lat = geoData.results[0].latitude;
    const lon = geoData.results[0].longitude;
    console.log(lat, lon);


    const weatherUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;
    const WeatherResponse = await fetch(weatherUrl);
    const weatherData = await WeatherResponse.json();
    console.log(weatherData);

    const cityname = document.querySelector(".cityname");
    const temp = document.querySelector(".temp");
    const humidity = document.querySelector(".humidity");
    const weatherIcon = document.querySelector(".weather-icon");
    const windSpeed = document.querySelector(".wind-speed");
    const dateTime = document.querySelector(".date-time");

    weatherIcon.style.display = "none";

    const code = weatherData.current.weather_code;
    if (code === 0) {
        weatherIcon.src = "./icons/sunny.svg"

    } else if (code <= 3) {
        weatherIcon.src = "icons/cloud.svg"
    }
    else if (code >= 51) {
        weatherIcon.src = "/icons/rain.svg"
    }
    weatherIcon.style.display = "block";


    cityname.innerText = city;
    temp.innerText = `Temperature: ${weatherData.current.temperature_2m}°C`;
    humidity.innerText = `Humidity : ${weatherData.current.relative_humidity_2m}%`;

    windSpeed.innerText = `Wind-Speed: ${weatherData.current.wind_speed_10m}km/h`;
    dateTime.innerText = `Date & Time: ${weatherData.current.time}`;

})


