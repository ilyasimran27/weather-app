let cityName="";
let hummunity="";
let temperature="";
let icon="";

function getData(){
    cityName=document.querySelector("input").value;
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee79a981af6eda48c391deddd8b947cc`)

  .then(function (response) {
    icon=  document.querySelector("h2").innerHTML=response.data.weather[0].icon;
    document.querySelector(".condition").innerHTML=response.data.weather[0].main;
   
    document.querySelector(".icon").src=`http://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".bc").src=`images/${icon}.gif`;
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });}
  Image.src = `imgs/${icon}.png`