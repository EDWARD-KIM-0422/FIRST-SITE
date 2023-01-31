const API_KEY = "c81ceb7a164c29be3c9f965d4cf275c0";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector(" #weather span:last-child");
      weather.innerText = date.weather[0].main;
      city.innerText = `${date.name}/${date.main.temp}`;
    });
}
function onGeoError() {
  alert("can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
