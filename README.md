# Promise Rejection Dashboard

## Overview
This project aims to create a dashboard that displays various information using data fetched from different APIs, including Unsplash, CoinGecko, and OpenWeatherMap. The dashboard provides visual elements such as background images, cryptocurrency data, current time, and weather information based on the user's location.

## How the Code Works
The code consists of several steps to fetch data from different APIs and update the dashboard dynamically:

1. **Fetching a Random Photo from Unsplash**: The code fetches a random landscape photo from Unsplash API with specific criteria. If successful, it sets the background image of the webpage to that photo and displays the photographer's name. In case of failure, it falls back to a default background image and author.

2. **Fetching Cryptocurrency Data from CoinGecko API**: Next, it fetches data about the "Catecoin" cryptocurrency from the CoinGecko API. It updates the dashboard with basic information about the cryptocurrency, such as its logo, name, current price, 24-hour high, and 24-hour low.

3. **Displaying Current Time**: It continuously updates the dashboard with the current time, refreshing it every second.

4. **Fetching Weather Data from OpenWeatherMap API**: Finally, it fetches weather data based on the user's geolocation from the OpenWeatherMap API. It displays the weather icon, temperature, and city name on the dashboard.

## Challenges with the `fetch()` Method
One challenge encountered was handling errors and rejections in the fetch requests. To address this, the code implements error handling using `.catch()` blocks after each fetch request. If an error occurs during the fetch process (e.g., network issues or invalid responses), it throws an Error object, which is caught and logged to the console.

Another challenge was understanding and working with asynchronous programming using promises. The code utilizes promise chaining (`then()` and `catch()` methods) to handle asynchronous operations and ensure the sequence of execution.

## What I Learned
- Utilizing the `fetch()` method to make HTTP requests and fetch data from APIs asynchronously.
- Handling errors and rejections in promise chains using `.catch()` blocks.
- Manipulating the DOM dynamically to update webpage content based on fetched data.
- Implementing continuous updates using `setInterval()` to refresh time display on the dashboard.

Overall, this project provided valuable insights into working with APIs, asynchronous JavaScript, and DOM manipulation, enhancing my skills in web development.
