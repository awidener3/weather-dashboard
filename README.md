# 📝 Homework Assignment #5: Weather Dashboard

📌[Link to Live Application](https://awidener3.github.io/weather-dashboard/)

## 🔨 Task
To create a weather dashboard application that provides real-time information on a locations weather. The user should be able to input a city name and be provided with information on today's weather, along with a 5-day forecast. The city name should also be saved to a "Search History" that is saved locally. This project utilizes dynamically updated HTML and CSS using JavaScript, along with the OpenWeather API, Bootstrap and moment.js.

## 📎 How to Use
Once the application is opened, enter the city name that you would like to view the weather for. Upon clicking the "Search" button, you will be presented with a card containing today's weather information and a 5-day forecast.

If you want to view a city from a previous search, locate the button on the left-hand side of the screen (top of the screen on mobile) and click the button.

## 🔍 Preview
![A gif of the planner in action!](assets/images/weather-dashboard-preview.gif)

## 📝 User Story
```md
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## 💡 Acceptance Criteria
```md
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
