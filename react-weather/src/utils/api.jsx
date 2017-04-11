var Fetch = require('whatwg-fetch');
var rootUrl = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}';
var forecastUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}';
var apiUrl = '&appid=00876ab48948aa145bf481f57dadc6c9';

module.exports = {
    get: function(place) {
        return fetch(rootURl + place + apiUrl + forcastUrl + place + apiUrl, {
            headers: {
                
            }
        })
        .then(function(response) {
            return response.json();
        });
    }
};