# weather-dashboard
This project is a homework assignment from the UCF Coding Bootcamp. In this application I am tasked with creating a weather dashboard that runs in the browsers that features dynamically updated HTML and CSS, powered through a server-side API, OpenWeather.

# 📝 Homework Assignment #4: Work Day Planner

📌[Link to Live Website](https://awidener3.github.io/weather-dashboard/)

## 🔨 Task
To create a weather dashboard application that provides real-time information on a locations weather. The user should be able to input a city name and be provided with information on today's weather, along with a 5-day forecast. The city name should also be saved to a "Search History" that is saved locally. This project utilizes dynamically updated HTML and CSS using JavaScript, along with the OpenWeather API, Bootstrap and moment.js.

## 📎 How to Use
Once the application is opened, enter the city name that you would like to view the weather for. Upon clicking the "Search" button, you will be presented with a card containing today's weather information and a 5-day forecast.

If you want to view a city from a previous search, locate the button on the left-hand side of the screen (top of the screen on mobile) and simply click the button.

## 🔍 Preview
![A gif of the planner in action!](assets/images/weather-dashboard-preview.gif)

## 📝 User Story
```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## 💡 Acceptance Criteria
```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
