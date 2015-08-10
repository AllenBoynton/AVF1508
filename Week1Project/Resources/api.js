// File is check for connectivity to network

// Function to start network connectivity
var netCheck = function(latitude, longitude) {
	// Wunderground API
	var url = "http://api.wunderground.com/api/d2e13383813c88c5/geolookup/conditions/q/34.8621210,-82.3539020.json";
	if(Ti.Network.online){
		var client = Ti.Network.createHTTPClient({
			onload: function(e){
				// Parse data
				var json = JSON.parse(this.responseText);
				ui.displayData(json);
			},
			// Runs with error
			onerror: function(e){
				alert("An error has occurred!");
			},
			// Set timeout
			timeout: 5000
		});
		
		client.open("GET", url);
		client.send();
		
	} else {
		// Alert for no connectivity
		alert("Network currently unavailable");
	}
	
};

exports.netCheck = netCheck;