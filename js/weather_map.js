"use strict";


mapboxgl.accessToken = mapBoxKey;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-93.054429, 34.508414]
});

$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherMapKey,
    q:     "Hot Springs, AR, US",
    units: "imperial"
}).done(function (data){
    console.log(data);
        let cardHead = data.name
        let temps = data.main.temp
        let description = data.weather[0].description
        let windSpeed = data.wind.speed
    $('.card-header').html(cardHead);
    $('.currentTemp').html(temps);
    $('.weatherDescription').html(description);
    $('.windSpd').html(windSpeed);


});

// $.get("https://api.openweathermap.org/data/2.5/forecast", {
//     APPID: weatherMapKey,
//     lat:    34.5037,
//     lon:   -93.0552,
//     units: "imperial"
// }).done(function(data) {
//     console.log('5 day forecast', data);
// });
