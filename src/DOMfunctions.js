function clearBox(nodeArray) {
	// clear the weather information everytime we make a search
	for (let node of nodeArray) {
		node.innerHTML = '';
	}
}

export function displayWeather(cityWeatherInformation) {

	/* cityWeatherInformation = {weather, temperature, name}
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
	*/

	const box = document.querySelector('#weather-box');

	// create elements
	const cityName = box.querySelector('#city-name');

	// const temperature = document.createElement('div');
	const temperatureMin = document.querySelector('#min-temperature');
	const temperatureCurrent = document.querySelector('#current-temperature');
	const temperatureMax = document.querySelector('#max-temperature');
	// const weatherInformation = document.createElement('div');
	const weatherInformationMain = document.querySelector('#weather-information');
	const weatherInformationDescription = document.querySelector('#weather-description');

	clearBox([
		cityName, 
		temperatureCurrent, 
		temperatureMax, 
		temperatureMin,
		weatherInformationMain,
		weatherInformationDescription
	]);

	// add text
	cityName.textContent = cityWeatherInformation.name;
	temperatureCurrent.textContent = `${Math.round(
		Number(cityWeatherInformation.temperature.current))} °C`;
	temperatureMax.textContent = `${Math.round(
		Number(cityWeatherInformation.temperature.max))} °C`;
	temperatureMin.textContent = `${Math.round(
		Number(cityWeatherInformation.temperature.min))} °C`;
	weatherInformationMain.textContent = cityWeatherInformation.weather.main;
	weatherInformationDescription.textContent = cityWeatherInformation.weather.description;
}