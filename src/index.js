import './style.css';
import { getWeatherInformation } from './APIfunctions.js';
import { displayWeather } from './DOMfunctions.js';

const searchBar = document.querySelector('#search-input-bar');
const searchButton = document.querySelector('#search-button');

// add button functionality
searchButton.addEventListener('click', async () => {
	const cityName = searchBar.value;
	await search(cityName);
});
// search by pressing enter key
searchBar.addEventListener('keypress', event => {
	if (event.key === "Enter") searchButton.click();
});

async function search(cityName) {
	// gets the weather information fron the API and displays it
	
	const weatherInformation = await getWeatherInformation(cityName);
	displayWeather(weatherInformation);
}

// initialize
(() => {
	search('medellin');
})();