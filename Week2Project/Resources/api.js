// Function to check for network connectivity
var ui = require("ui");

var netCheck = function(latitude,longitude) {
	Ti.API.info("getData");
	var url = "http://api.wunderground.com/api/d2e13383813c88c5/conditions/alert/almanac/q/" + latitude + "," + longitude + ".json";		
	if (Ti.Network.online == true) {
		var geo = require("geo");
		var client = Ti.Network.createHTTPClient({    
			onload: function(e) {
				var json = JSON.parse(this.responseText);
				var weatherData = {
					location: json.current_observation.display_location.full,
					time: json.current_observation.local_time_rfc822,
					temp: json.current_observation.temp_f,
					highLow: json.almanac.temp_high.normal.F,
					tempLow: json.almanac.temp_low.normal.F,
					weather: json.current_observation.weather,
					feels: json.current_observation.feelslike_f,
					recordHigh: json.almanac.temp_high.record.F,
					highYear: json.almanac.temp_high.recordyear,
					recordLow: json.almanac.temp_low.record.F,
					lowYear: json.almanac.temp_low.recordyear, 
					wind: json.current_observation.wind_mph,
					windDir: json.current_observation.wind_dir, 
					humidity: json.current_observation.relative_humidity,
					uv: json.current_observation.UV,
					dewPoint: json.current_observation.dewpoint_f,
					pressure: json.current_observation.pressure_mb,
					visibility: json.current_observation.visibility_mi,
					updateInfo: json.current_observation.observation_time,
				};
				var storage = require("storage");
				storage.saves(weatherData);
				ui.checkData(json);
			},
			// Runs if there is an error
			onerror: function(e) {
				alert ("Unexpected error");
			},
			// Timeout set to 5 milliseconds
			timeout: 5000,
		});	    
		client.open("GET", url);
		client.send();
	} else {
		alert ("Network is unavailable. Please check Settings.");	
	}
    	      	         
};

// Export	
exports.netCheck = netCheck;