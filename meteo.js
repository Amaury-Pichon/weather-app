const api_key = "16eb34753ce85f89e9035bcfded86588";

let apiCall;

let villeAffichee;
let villeVoulue;
let temperature;
let temps;

//Une fois le DOM chargé, assigne les éléments du DOM au variables et apelle les fonctoin getCity et getWeather
addEventListener('DOMContentLoaded', (e)=> {
    villeAffichee = document.getElementById("ville");
    temperature = document.getElementById("temperature");
    temps = document.getElementById("temps");
    getCity();
    getWeather();
});

//Récupère la ville dans conf.js et l'incorpore dans l'adresse de requête
async function getCity(){
    villeVoulue = jsonObject.ville;

    apiCall = "https://api.openweathermap.org/data/2.5/forecast?q=" + villeVoulue +"&units=metric&lang=fr&appid="+api_key;
}

//Passe la requête à l'API de OpenWeatherMap.
//Trouve et assive la ville, la température et le temps qu'il fait au élément correspondants.
async function getWeather(){
    const response = await fetch(apiCall);
    const jsonWeather = await response.json();
    console.log(jsonWeather);

    villeAffichee.innerHTML = jsonWeather.city.name;
    temperature.innerHTML = jsonWeather.list[0].main.temp + "°C";
    let weatherDescription = jsonWeather.list[0].weather[0].description;
    temps.innerHTML = weatherDescription[0].toUpperCase() + weatherDescription.slice(1);

}

//Génère une requête une fois par heure
setInterval(getWeather, 3600000);

