"use strict";

mapboxgl.accessToken = mapBoxKey;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-93.054429, 34.508414]
});
let cardContainer = $('#card-container')

let lat = 34.5037;
let long = -93.0552;
$.get("https://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ long +"&appid=" + weatherMapKey + "&units=imperial").done(function(data) {
    let reports = data.list;
    let html = '';
    for(let i = 0; i < reports.length; i += 8) {
        // should get 5 objects back
        console.log(reports[i]);

        let cardHead = reports[i].dt_txt.split(' ');
        let highTemp = reports[i].main.temp_max;
        let lowTemp = reports[i].main.temp_min;
        let iconCode = reports[i].weather[0].icon;
        let weatherDescription = reports[i].weather[0].description;
        let humid = reports[i].main.humidity;
        let windSpeed = reports[i].wind.speed;
        let pressure = reports[i].main.pressure;

            html +=
            '<div class="card text-center" style="width: 18rem;">' +
                '<div class="card-header">' + cardHead[0] + '</div>' +
                    '<ul class="list-group list-group-flush">' +
                        '<li class="list-group-item"><span>' + highTemp + '*F / ' + lowTemp + '*F</span><br><img src="https://openweathermap.org/img/w/' + iconCode + '.png" alt="Weather Icon"></li>'+
                        '<li class="list-group-item"><span>Description: ' + weatherDescription + '</span><br><span>Humidity: ' + humid + '%</span></li>'+
                        '<li class="list-group-item">Wind Speed: ' + windSpeed + 'mph</li>'+
                        '<li class="list-group-item">Pressure: ' + pressure + 'psi</li>'+
                    '</ul>'+
            '</div>'
    }
    cardContainer.html(html);
});

