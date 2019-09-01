let cityName = "";
let humidity = "";
let temperature = "";
let wind = "";
let main = "";
let icon = "";

function getData() {
  cityName = document.querySelector("input").value;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=ee79a981af6eda48c391deddd8b947cc`)

    .then(function (response) {

      document.querySelector(".container").style = "display:none";
      document.querySelector(".information").style = "display:flex";

      main = response.data.weather[0].main;
      document.querySelector(".main h1").innerHTML = main;
      icon = response.data.weather[0].icon;
      document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      temperature = response.data.main.temp;
      temperature = Math.floor(temperature);
      document.querySelector("#temp").innerHTML = `${temperature}${'\u00B0'}C `;
      humidity = response.data.main.humidity;
      document.querySelector("#humidity").innerHTML = `${humidity} % `;
      wind = response.data.wind.speed;
      wind = Math.round(wind * 3.6);
      document.querySelector("#wind").innerHTML = `${wind} Km/h `;
      document.querySelector("#second").style = `background-image: url('images/${icon}.gif')`;


      // handle success
      console.log(response);
    })
    .catch(function (error) {
      alert("please input correct city name");
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
function goBack() {
  document.querySelector(".container").style = "display:flex";
  document.querySelector(".information").style = "display:none";
}