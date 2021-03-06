// Function is collecting information for geolocation and local weather
var getGeo = function(){
	Ti.Geolocation.purpose = "Current location is needed to get your local weather.";
		if(Ti.Platform.osname === "android") {
			var latitude  = 34.8621210;
			var longitude = -82.3539020;
			var url = "http://api.wunderground.com/api/d2e13383813c88c5/conditions/alert/almanac/q/" + latitude + "," + longitude + ".json";
			api.network(url);
		} else {
			Ti.Geolocation.getCurrentPosition(function(e){
				var latitude  = e.coords.latitude;
				var longitude = e.coords.longitude;
				var url = "http://api.wunderground.com/api/d2e13383813c88c5/conditions/alert/almanac/q/" + latitude + "," + longitude + ".json";
				api.network(url);
			});
		};
};

exports.getGeo = getGeo;
