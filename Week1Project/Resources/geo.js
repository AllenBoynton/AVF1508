// Function is collecting information for geolocation and local weather

var getGeo = function(){
	var url = "http://api.wunderground.com/api/d2e13383813c88c5/geolookup/conditions/q/34.8621210,-82.3539020.json";
	var client = Ti.Network.createHTTPClient({    
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         alert('success');
	     },     
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('Unexpected error');
	     },
	     timeout : 5000
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send();

};

exports.getGeo = getGeo;

// var latitude = 34.8621210;
// var longitude = -82.3539020;