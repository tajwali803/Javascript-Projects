
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteUrl = "https://api.quotable.io/random";
async function getQuote(){
	const response = await fetch(quoteUrl);
	const data = await response.json();
	console.log(data);

	quote.innerHTML = data.content;
	author.innerHTML = data.author;
}

getQuote();
