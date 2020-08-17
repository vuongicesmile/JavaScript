const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote form API
async function getQuote() {
    // We need to use a Proxy URL to make our API call in order to avoid a CORS error
    const proxyUrl= 'https://cors-anywhere.herokuapp.com/';
    const apiUrl ='https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response= await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        Console.log(data);
    } catch (error) {
        getQuote();
        
    }

}

// On Load
getQuote();