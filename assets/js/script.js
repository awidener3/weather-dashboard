// === GLOBAL VARIABLES === \\
let searchHistory = [];
let weatherApiUrl = ''; // TODO: add api url
let weatherApiKey = ''; // TODO: sign up for API and insert key

// === DOM ELEMENTS === \\
// TODO: search button
// TODO: search input/form
// TODO: main card
// TODO: forecast cards
// TODO: localStorage buttons

// === FUNCTIONS === \\

renderSearchHistory = () => {};

renderCurrentWeather = () => {};

renderForecast = () => {};

renderForecastCards = () => {};

appendToSearchHistory = () => {};

fetchWeather = () => {};

fetchCityCoords = () => {};

handFormSubmit = () => {};

// === EVENT LISTENERS === \\
// TODO: create an event listener for the search button that takes the city and returns the coords

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