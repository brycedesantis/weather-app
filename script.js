async function getWeather(location) {
	const APIKey = "2b2c0f94c91440c7be6173147230111"
	const APIUrl = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${location}`

	const weatherInfo = document.querySelector(".weather-info")
	try {
		const response = await fetch(APIUrl, { mode: "no-cors" })
		const weatherDate = await response.json()
		displayWeather(weatherDate)
		console.log(weatherDate)
	} catch (error) {
		weatherInfo.innerHTML = `<h3>Location not found <span class="material-symbols-outlined" id="location-error">
		wrong_location
		</span></h3>`
	}
}

function displayWeather(data) {
	const weatherInfo = document.querySelector(".weather-info")
	weatherInfo.innerHTML = `
	<h1 id='city'>${data.location.name}</h1>
	<h4 id='country'>${data.location.region}, ${data.location.country}</h4>
	<img src='${data.current.condition.icon}' />
	<h3>${data.current.condition.text}</h3>
	<p>Humidity: ${data.current.humidity}</p>
	<div id='fah'>
		<p class='temperature'>Temperture: ${data.current.temp_f}°F</p>
		<p class='feels-like'>Feels like: ${data.current.feelslike_f}°F</p>
	</div>
	<div id='cel' class='inactive'>
	<p class='temperature'>Temperture: ${data.current.temp_c}°C</p>
	<p class='feels-like'>Feels like: ${data.current.feelslike_c}°C</p>
	</div>
	<button onclick=changeTemp()>Change Temperature</button>`
}

function changeTemp() {
	let fahrenheit = document.querySelector("#fah")
	let celsius = document.querySelector("#cel")
	if (fahrenheit.className === "inactive") {
		fahrenheit.classList.remove("inactive")
		celsius.classList.add("inactive")
	} else {
		celsius.classList.remove("inactive")
		fahrenheit.classList.add("inactive")
	}
}

function getLocation() {
	const search = document.querySelector("#search-icon")
	search.addEventListener("click", () => {
		const input = document.querySelector("input")
		return getWeather(input.value)
	})
}

getWeather("london")
getLocation()
