// === DOM ELEMENTS === \\

const searchButton = document.querySelector('#city-search-btn');
const searchInput = document.querySelector('#city-search');

const mainCardCity = document.querySelector('#main-card-city');
const mainCardDate = document.querySelector('#main-card-date');
const mainCardIcon = document.querySelector('#main-card-icon');
const mainCardTemp = document.querySelector('#main-card-temp');
const mainCardWind = document.querySelector('#main-card-wind');
const mainCardHumidity = document.querySelector('#main-card-humidity');
const mainCardUv = document.querySelector('#main-card-uv');

const forecastCardDate = document.querySelectorAll('.forecast-date');
const forecastCardIcon = document.querySelectorAll('.forecast-icon');
const forecastCardTemp = document.querySelectorAll('.forecast-temp');
const forecastCardWind = document.querySelectorAll('.forecast-wind');
const forecastCardHumidity = document.querySelectorAll('.forecast-humidity');

const searchedCitiesButton = document.querySelectorAll('.searched-cities-btn')

// === GLOBAL VARIABLES === \\

let searchHistory = [];
let weatherApiUrl = 'https://api.openweathermap.org';
let weatherApiKey = '&appid=3dcebf80294bbadbeab3a3d24374fc77';
let oneCallEndpoint = '/data/2.5/onecall?';
let geocodingEndpoint = '/geo/1.0/direct?';

let cityName;
let today = moment().format('M/DD/YYYY')
mainCardDate.textContent = `(${today})`

// * geocode
// fetch('https://api.openweathermap.org/geo/1.0/direct?q=orlando&appid=3dcebf80294bbadbeab3a3d24374fc77')
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })

// * oneCall
// fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=80&lon=80${weatherApiKey}`)
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })

// === FUNCTIONS === \\

async function handleFormSubmit () {
    let apiParam = `q=${cityName}`;

    try {
        // read geocode
        let geocodeResponse = await fetch(`${weatherApiUrl}${geocodingEndpoint}${apiParam}${weatherApiKey}`);
        let coordinatesData = await geocodeResponse.json();
        let latParam = await coordinatesData[0].lat;
        let lonParam = await coordinatesData[0].lon;
        console.log(coordinatesData);
        
        // read coordinates
        let openWeatherResponse = await fetch(`${weatherApiUrl}${oneCallEndpoint}lat=${latParam}&lon=${lonParam}&units=imperial${weatherApiKey}`);
        let openWeatherData = await openWeatherResponse.json();
        console.log(openWeatherData);

        renderCurrentWeather(coordinatesData, openWeatherData);
    } catch (err) {
        alert('whoops!');
    }
};

renderSearchHistory = () => {

};

renderCurrentWeather = (coordinatesData, openWeatherData) => {
    mainCardCity.textContent = coordinatesData[0].name;
    mainCardIcon.src = `http://openweathermap.org/img/wn/${openWeatherData.current.weather[0].icon}.png`
    mainCardTemp.textContent = openWeatherData.current.temp;
    mainCardWind.textContent = openWeatherData.current.wind_speed;
    mainCardHumidity.textContent = openWeatherData.current.humidity;
    mainCardUv.textContent = openWeatherData.current.uvi;
};

renderForecast = () => {

};

renderForecastCards = () => {

};

appendToSearchHistory = () => {

};

// === EVENT LISTENERS === \\
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    cityName = searchInput.value.toLowerCase().trim();
    handleFormSubmit();
    searchInput.value = '';
});

// === PSEUDOCODE === \\

    // <==index.html==> \\

        // I want a HEADER that has a '.jumbotron' and the name of the application

        // On the left of main content area I want a COLUMN.

            // I want that column to contain a HEADER providing short instructions, an INPUT FORM with a placeholder city and a BUTTON that says 'SEARCH' that grabs the VALUE of the form
            // I also want the column to have a set of 8 BUTTONS beneath the search button that hold the VALUE for various cities
                // These buttons will also contain the values for the search history of the user

        // On the right of the main content area I want another COLUMN

            // I want the top of the column to contain a CARD with information on the current weather of the selected city
                // I want the card to contain:
                    // Title ==> Name of City, Date, Icon of Weather
                    // Temp ==> Current temp in Fahrenheit
                    // Wind ==> Current wind in MPH
                    // Humidity ==> Current humidity as a percentage
                    // UV Index ==> a decimal
                        // The UV Index should have logic that changes the background color depending on the number
                            // Green for good
                            // Yellow for okay
                            // Red for bad

            // Below that I want cards for the 5-day forecast
                // I want the cards to contain:
                    // Date
                    // Icon of weather
                    // Temp
                    // Wind
                    // Humidity