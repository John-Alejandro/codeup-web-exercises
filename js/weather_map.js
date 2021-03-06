"use strict"
function renderWeather(forecast) {
    var html = "<h2 class='card-title'>" + forecast.dt_txt.split(" ")[0] + "</h2>";
    html += '<p class="card-text">'
    html += "<h4>TEMP:  " + forecast.main.temp + "</h4>";
    // html += "<img src='.wicon'>" + forecast.weather[0].icon + "</img>";
    html += "<img src='http://openweathermap.org/img/w/'/" + forecast.weather[0].icon + ">";
    html += "<h4> DESCRIPTION: " + forecast.weather[0].description + "</h4>";
    html += "<h4> HUMIDITY:  " + forecast.main.humidity + "% </h4>";
    html += "<h4> WIND:  " + forecast.wind.speed + "</h4>";
    html += "<h4> PRESSURE:  " + forecast.main.pressure + "</h4>";
    html += '</p>'

    var iconcode = forecast.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('.wicon').attr('src', iconurl);

    return html;

}



$.get("http://api.openweathermap.org/data/2.5/forecast",{
    APPID: openWeatherApiKey,
    q: "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log(data);
    var typesHTML = renderWeather(data.list[5])
        console.log(typesHTML);
        // $(".card-body").append(typesHTML)



var fiveDayForecast = [];

for (var i = 4; i < data.list.length; i+=8) {
    console.log(data.list[i])
    fiveDayForecast.push(data.list[i])
}
for(var i = 0; i < fiveDayForecast.length; i++) {
    var oneDayForecast = renderWeather(fiveDayForecast[i]);
    $(".card-body").eq(i).append(oneDayForecast);
}
});

mapboxgl.accessToken = mapboxApiKey;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.47736427170256, 29.458420487532127], // starting position [lng, lat]
    zoom: 7 // starting zoom
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.47736427170256, 29.458420487532127])
    .addTo(map);


function onDragEnd() {
    const lngLat = marker.getLngLat();
    console.log(lngLat);

    reverseGeocode(lngLat, mapboxApiKey).then(function (location) {
        console.log(location);
        // var location;
        var newLocationArr = location.split(', ');
        console.log(newLocationArr[1]);

        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: openWeatherApiKey,
            q: newLocationArr[1],
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            var typesHTML = renderWeather(data.list[5])
            console.log(typesHTML);
            var fiveDayForecast = [];
            console.log(fiveDayForecast)

            // Clear card-body before rendering new location weather
            $(".card-body").html("")

            for (var i = 4; i < data.list.length; i+=8) {
                console.log(data.list[i])
                fiveDayForecast.push(data.list[i])
            }
            for(var i = 0; i < fiveDayForecast.length; i++) {
                var oneDayForecast = renderWeather(fiveDayForecast[i]);
                $(".card-body").eq(i).append(oneDayForecast);
            }
        })
    })
}
marker.on("dragend", onDragEnd);


