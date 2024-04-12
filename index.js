/* Step 1: code fetches a random photo from Unsplash with specific criteria, sets the background of the webpage to that photo,
and displays the name of the photographer */

// Fetch a random landscape image from Unsplash API for the background
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=,earth")
// query parameters to specify that the photo should have a landscape orientation and should contain the keyword
.then(res => res.json()) // 'fetch' returns a Promise that resolves to the 'Response' object representing the response to the request.
.then(data => { // takes the JSON data returned by the previous step as an argument (referred to as data)
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    // uses string interpolation to insert the URL of the photo ('data.urls.regular') into the CSS 'background-image' property.
    document.getElementById("author").textContent = `By: ${data.user.name}`
    // uses string interpolation to insert the photographer's name ('data.user.name') into the text content
})

// Step 2: This is a method ('.catch()') that catches any errors that occur in the promise chain.
.catch(err => {
    // If fetching image fails, use a default background image and author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
    document.getElementById("author").textContent = `By: Dodi Achmad`
    // sets the text content of the HTML element with the ID "author" to a default author name ("Dodi Achmad")
})

// Fetch data about the "catecoin" cryptocurrency from CoinGecko API
// Step 3: fetches data about the cryptocurrency "Catecoin" from the CoinGecko API
fetch("https://api.coingecko.com/api/v3/coins/catecoin") // initiates a GET request to the specified URL, which is the CoinGecko API endpoint
.then(res => { // A promise chain that waits for the response from the server.
    if (!res.ok) {
        throw Error("Something went wrong") // checks if the response status is not okay
    }
    return res.json() // 'res.json()' returns a promise that resolves with the JSON data parsed from the response body text
})


// Step 4: retrieves and displays basic information about the "Catecoin" cryptocurrency
.then(data => {
    document.getElementById("crypto-header").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
    `; // sets the content of an HTML element with the ID "crypto-top" to include an image of the cryptocurrency's logo and its name.
    document.getElementById("crypto").innerHTML += `
        <p>Target🎯: R${data.market_data.current_price.zar}</p>
        <p>Profits📈: R${data.market_data.high_24h.zar}</p>
        <p>Losses📉: R${data.market_data.low_24h.zar}</p>
    `;
    /* appends new paragraphs to the content of an HTML element with the ID "crypto", displaying key market information about the
    cryptocurrency, including its current price, 24-hour high, and 24-hour low, each preceded by an emoji symbol.*/
})

// Step 5: updates the content of the specified HTML element to display the current time in a short format
function getCurrentTime() {
    const date = new Date() // This creates a new JavaScript Date object representing the current date and time.
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
    // This converts the date object (date) to a string representing the time portion only
}


setInterval(getCurrentTime, 1000); // Call getCurrentTime() function every second using setInterval


// Step 6: Fetch weather data based on user's location from OpenWeatherMap API
navigator.geolocation.getCurrentPosition(position => {
fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`) //changed the SI units from imperial to metric.
    .then(res => {
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        return res.json()
    })
    .then(data => {
        // Display weather icon, temperature, and city name
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
        `
    })
    .catch(err => console.error(err))
});