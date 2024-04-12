/* Step 1: code fetches a random photo from Unsplash with specific criteria, sets the background of the webpage to that photo,
and displays the name of the photographer */

// Fetch a random landscape image from Unsplash API for the background
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=,skateboarding")
.then(res => res.json())
.then(data => {
     // Set the fetched image as the background of the document body
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById("author").textContent = `By: ${data.user.name}`
})

.catch(err => {
    // If fetching image fails, use a default background image and author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
    document.getElementById("author").textContent = `By: Dodi Achmad`
})

// Fetch data about the "catecoin" cryptocurrency from CoinGecko API
fetch("https://api.coingecko.com/api/v3/coins/catecoin")
.then(res => {
    if (!res.ok) {
        throw Error("Something went wrong")
    }
    return res.json()
})
.then(data => {
    // Display the cryptocurrency name and logo
    document.getElementById("crypto-header").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
    `
    // Display additional cryptocurrency market data and changed the Currencies from dollars to Rands
    document.getElementById("crypto").innerHTML += `
    <p>🎯 Current Price: R${data.market_data.current_price.zar}</p>
    <p>📈 High 24h: R${data.market_data.high_24h.zar}</p>
    <p>📉 Low 24h: R${data.market_data.low_24h.zar}</p> 
    <p>Onwer: Lebogang Mputle</p>
`;
})
.catch(err => console.error(err));  // Log any errors that occur during cryptocurrency data fetch 

// Function to update and display the current time every second
function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000); // Call getCurrentTime() function every second using setInterval

// Fetch weather data based on user's location from OpenWeatherMap API
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