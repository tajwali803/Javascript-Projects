// console.log("Hello World")
const apiURL = "https://api.openweathermap.org/data/2.5/weather?appid=ac6e210eea311e41f73bca5eb7d91990&units=metric&q=";


const inputBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function weatherAPI(city) {
	const response = await fetch(apiURL + city);
	if(response.status === 404){
		document.querySelector(".error").style.display = "block"
		document.querySelector(".weather").style.display = "none"
	}
	else {
		const data = await response.json();
	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

	document.querySelector(".weather").style.display = "block" ;
	document.querySelector(".error").style.display = "none"
	if (data.weather[0].main === "Clouds") {
		weatherIcon.src = "images/clouds.png"
	}
	else if (data.weather[0].main === "Clear"){
		weatherIcon.src = "images/clear.png"
	}
	else if (data.weather[0].main === "Drizzle"){
		weatherIcon.src = "images/drizzle.png"
	}
	else if (data.weather[0].main === "Mist"){
		weatherIcon.src = "images/mist.png"
	}
	else if (data.weather[0].main === "Rain"){
		weatherIcon.src = "images/rain.png"
	}
	}
	
}

searchButton.addEventListener("click", function(){
weatherAPI(inputBox.value);
console.log("Search button clicked")

})
inputBox.addEventListener("keyup", function(e){
	if (e.key === "Enter") {
	weatherAPI(inputBox.value);

	}
})
