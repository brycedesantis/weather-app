async function getWeather() {
	const APIKey = "2b2c0f94c91440c7be6173147230111"
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=london`,
			{ mode: "cors" }
		)
		const weatherDate = await response.json()
		console.log(weatherDate)
	} catch {}
}
getWeather()
