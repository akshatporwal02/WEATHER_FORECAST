const API_KEY = `c85a80c9396e675eaf65de31ac6480d8`;
const from = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getweather = async (city) => {
    weather.innerHTML = `<h2> LOADING... </h2>`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return showweather(data);
};
const showweather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h2> city not found </h2>`
        return;
    }
weather.innerHTML=`<div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                </div>
            <div>
                <h2>${data.main.temp}&degC</h2>
                <h4>${data.weather[0].main}</h4>
            </div>
            <div class="feels_like">
                <h2>FEELS_LIKE</h2><br>
                <p>${data.main.feels_like} &deg;C</p>
            </div>
            <div class="humidity">
                <h2>HUMIDITY</h2><br>
                <p>${data.main.humidity} %</p>
            </div>
            <div class="pressure">
                <h2>PRESSURE</h2><br>
                <p>${data.main.pressure} mb</p>
            </div>
            <div class="wind_speed">
                <h2>WIND_SPEED</h2><br>
                <p>${data.wind.speed} m/s</p>
            </div>
`


  }
from.addEventListener("submit", function (event) {
  getweather(search.value);

  event.preventDefault();
});
