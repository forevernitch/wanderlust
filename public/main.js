// Saving the Foursquare API Info
const clientId = 'NXLNJ2A1ALQC5KLICO1PP5ZIQH4E3DIXOS1KK2MBYCOJZM02'
const clientSecret = 'FVRXTIGWMTVQ0LIP2WLDHRVOYJTVPFCWDYEHYT3WD0QLH24K';

const near = "Phoenix,AZ"

const url = `https://api.foursquare.com.v2/venues/explore?near=${near}&client_id=${clientId}&client_secret=${clientSecret}`
//Documentation states that you can search with spaces Phoeniz, AZ

// OpenWeather Info
//Later Attempt with OAuth

//Userless API calls
//&client_id=XXXX&client_secret=XXXX

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const openWeatherKey = '41e9373cf479659bae2f5d65fcac0291';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${near}&appid=${openWeatherKey}}`;

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = () => {

}

const getForecast = () => {

}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)