/* Step 1: code fetches a random photo from Unsplash with specific criteria, sets the background of the webpage to that photo, 
and displays the name of the photographer */
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=moon") 
// query parameters to specify that the photo should have a landscape orientation and should contain the keyword "moon"
.then(res => res.json()) // 'fetch' returns a Promise that resolves to the 'Response' object representing the response to the request.
.then(data => { // takes the JSON data returned by the previous step as an argument (referred to as data)
    document.body.style.backgroundImage = `url(${data.urls.regular})` 
    // uses string interpolation to insert the URL of the photo ('data.urls.regular') into the CSS 'background-image' property.
    document.getElementById("author").textContent = `By: ${data.user.name}`
    // uses string interpolation to insert the photographer's name ('data.user.name') into the text content
})

// Step 2: This is a method ('.catch()') that catches any errors that occur in the promise chain.
.catch(err => {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
    document.getElementById("author").textContent = `By: Dodi Achmad`
    // sets the text content of the HTML element with the ID "author" to a default author name ("Dodi Achmad")
})

// Step 3: fetches data about the cryptocurrency "Catecoin" from the CoinGecko API
fetch("https://api.coingecko.com/api/v3/coins/catecoin") // initiates a GET request to the specified URL, which is the CoinGecko API endpoint
.then(res => { // A promise chain that waits for the response from the server.
    if (!res.ok) {
        throw Error("Something went wrong") // checks if the response status is not okay 
    }
    return res.json() // 'res.json()' returns a promise that resolves with the JSON data parsed from the response body text
})