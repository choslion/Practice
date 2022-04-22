
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "667ff4bb1062299e17547a22e558d81e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("I cannot find you.")
}









navigator.geolocation.getCurrentPosition(onGeoOk , onGeoError);