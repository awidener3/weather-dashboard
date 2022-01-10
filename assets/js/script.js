// === DOM ELEMENTS === \\
const searchedButtons = document.querySelector('#search-buttons')
const searchButton = document.querySelector('#city-search-btn');
const searchInput = document.querySelector('#city-search');

const mainCardCity = document.querySelector('#main-card-city');
const mainCardDate = document.querySelector('#main-card-date');
const mainCardIcon = document.querySelector('#main-card-icon');
const mainCardTemp = document.querySelector('#main-card-temp');
const mainCardWind = document.querySelector('#main-card-wind');
const mainCardHumidity = document.querySelector('#main-card-humidity');
const mainCardUv = document.querySelector('#main-card-uv');

const forecastCard = document.querySelectorAll('.forecast-card');
const forecastCardDate = document.querySelectorAll('.forecast-date');
const forecastCardIcon = document.querySelectorAll('.forecast-icon');
const forecastCardTemp = document.querySelectorAll('.forecast-temp');
const forecastCardWind = document.querySelectorAll('.forecast-wind');
const forecastCardHumidity = document.querySelectorAll('.forecast-humidity');

const searchedCitiesButton = document.querySelectorAll('.searched-cities-btn')

// === GLOBAL VARIABLES === \\

let weatherApiUrl = 'https://api.openweathermap.org';
let weatherApiKey = '&appid=3dcebf80294bbadbeab3a3d24374fc77';
let oneCallEndpoint = '/data/2.5/onecall?';
let geocodingEndpoint = '/geo/1.0/direct?';
let searchHistory = ['New York', 'Chicago', 'Austin', 'San Francisco', 'Seattle', 'Denver', 'Atlanta', 'San Diego'];
let today = moment().format('M/DD/YYYY')
let defaultCity = 'orlando';
let cityName = defaultCity;

// === FUNCTIONS === \\

async function fetchWeather () {
    let apiParam = `q=${cityName}`;

    try {
        // read geocode
        let geocodeResponse = await fetch(`${weatherApiUrl}${geocodingEndpoint}${apiParam}${weatherApiKey}`);
        let coordinatesData = await geocodeResponse.json();
        let latParam = await coordinatesData[0].lat;
        let lonParam = await coordinatesData[0].lon;
        
        // read coordinates
        let openWeatherResponse = await fetch(`${weatherApiUrl}${oneCallEndpoint}lat=${latParam}&lon=${lonParam}&units=imperial${weatherApiKey}`);
        let openWeatherData = await openWeatherResponse.json();

        // render results onto main card
        renderCurrentWeather(coordinatesData, openWeatherData);
        renderForecast(openWeatherData);

    } catch (err) {
        alert('whoops!');
    }
};

// TODO: create main card dynamically
renderCurrentWeather = (coordinatesData, openWeatherData) => {
    mainCardCity.textContent = coordinatesData[0].name;
    mainCardIcon.src = `http://openweathermap.org/img/wn/${openWeatherData.current.weather[0].icon}@2x.png`
    mainCardTemp.textContent = Math.trunc(openWeatherData.current.temp);
    mainCardWind.textContent = openWeatherData.current.wind_speed;
    mainCardHumidity.textContent = openWeatherData.current.humidity;
    mainCardUv.textContent = openWeatherData.current.uvi;
};

renderForecast = (openWeatherData) => {
    for (let i = 0; i < forecastCard.length; i++) {
        forecastCardDate[i].textContent = moment().add((i+1), 'days').format('M/DD/YYYY');
        forecastCardIcon[i].src = `http://openweathermap.org/img/wn/${openWeatherData.daily[i].weather[0].icon}@2x.png`;
        forecastCardTemp[i].textContent = Math.trunc(openWeatherData.daily[i].temp.day);
        forecastCardWind[i].textContent = openWeatherData.daily[i].wind_speed;
        forecastCardHumidity[i].textContent = openWeatherData.daily[i].humidity;
    }
};

// TODO: create forecast cards dynamically
// renderForecastCards = () => {
//     let card = document.createElement('div');
//     let cardDate = document.createElement('h4');
//     let cardIcon = document.createElement('img');
//     let cardTemp = document.createElement('p');
//     let cardWind = document.createElement('p');
//     let cardHumidity = document.createElement('p');
// };

renderSearchHistory = () => {
    searchedButtons.textContent = '';

    for (let i = 0; i < searchHistory.length; i++) {
        let button = document.createElement('button');
        button.textContent = searchHistory[i];

        button.classList.add('btn');
        button.classList.add('btn-secondary');
        button.classList.add('btn-block');
        button.classList.add('mb-2');
        button.classList.add('searched-cities-btn');

        searchedButtons.appendChild(button);
        button.addEventListener('click', function(event) {
            cityName = event.target.textContent
            fetchWeather();
        })
    }
};

// TODO: Fix text remaining undercase and format for better UI
appendToSearchHistory = (city) => {
    searchHistory.unshift(city);
    searchHistory.pop();
};


// === EVENT LISTENERS === \\
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    cityName = searchInput.value.toLowerCase().trim();
    appendToSearchHistory(cityName);
    renderSearchHistory();
    fetchWeather();
    searchInput.value = '';
});

// === INIT === \\

init = () => {
    mainCardDate.textContent = `${today}`
    fetchWeather();
    renderSearchHistory();
}

init();