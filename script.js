async function getWeather() {
	const APIKey = "2b2c0f94c91440c7be6173147230111"
	const APIUrl = `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=london`
	try {
		const response = await fetch(APIUrl, { mode: "cors" })
		const weatherDate = await response.json()
		displayWeather(weatherDate)
		console.log(weatherDate)
	} catch {}
}

function displayWeather(data) {
	const container = document.querySelector(".container")
	container.innerHTML = `
	<h3>${data.current.condition.text}</h3>
	<p>${data.current.humidity}</p>
	<p>${data.current.temp_f}</p>
	<p>${data.current.temp_c}</p>`
	console.log(data.current.humidity)
	console.log(data.current.temp_c)
	console.log(data.current.temp_f)
	console.log(data.current.condition.text)
}

getWeather()
