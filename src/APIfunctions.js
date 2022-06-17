
async function getLongitudAndLatitud(cityName) {
	// returns longitude and latitud of given city as promise

	const APIkey = '5b19ea95a623054de5cb9f57a1854c8d';
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIkey}`;
	
	try {

		const APIresponse = await fetch(url);
		const cityData = await APIresponse.json();
		
		if (!(cityData.length === 0)){
			return [cityData[0].lon, cityData[0].lat];
		} else {
			console.log('Not found');
			throw new Error('city not found');
		}
	} catch (err) {
		
		console.error(err.message);
	}
}
// https://openweathermap.org/api/geocoding-api

async function getTemperature([lon, lat]) {
	/*  returns an object with the weather information 
		{cityWeatherInformation = {weather, temperature, name}
		weather = {
			main: weatherData.weather[0].main, 
			description: weatherData.weather[0].description
		}
		temperature = {  // in celsius grades
			current: current temperature
			max: maximum day temperature
			min: minimum day temperature
		}
		name: city name
	}
	*/
	
	const APIkey = '5b19ea95a623054de5cb9f57a1854c8d';
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
	
	try {

		const APIresponse = await fetch(url);
		const weatherData = await APIresponse.json();

		const weather = {
			main: weatherData.weather[0].main, 
			description: weatherData.weather[0].description
		}
		const temperature = {
			current: weatherData.main.temp - 273.15,
			max: weatherData.main.temp_max - 273.15,
			min: weatherData.main.temp_min - 273.15
		}
		const name = weatherData.name;

		return {weather, temperature, name};

	} catch (err) {
		console.error(err.message);
	}
}

export async function getWeatherInformation(cityName) {
	// gets the city name as parameter and returns the weather information object
	
	const [longitud, latitud] = await getLongitudAndLatitud(cityName);
	const weatherInformation = await getTemperature([longitud, latitud]);
	return weatherInformation;
}