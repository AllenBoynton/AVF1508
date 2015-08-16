// This function creates the page layout and data presented on the screen that references the API	

var app = require("app");

var checkData = function(json) {
	
	var win = Ti.UI.createWindow({
		backgroundColor: "gray",
		layout: "vertical"
	});
	
	var labelFormat = {
		color: "white",
		font: {fontSize: 16, fontWeight: "bold", fontFamily: "Roboto"}
	};
	
	var bg = Ti.UI.createView({
		backgroundImage: "images/170.jpg",
		top: 20,
		height: "100%",
		width: "100%"
	});
	
	var icon = Ti.UI.createImageView({
		image: json.current_observation.icon_url,
		top: 85,
		right: 40
	});
	
	var location = Ti.UI.createLabel(labelFormat);
		location.top = 10;
		location.left = 20;
		location.text = json.current_observation.display_location.full;
		
	var time = Ti.UI.createLabel(labelFormat);
		time.top = location.top + 20;
		time.left = 20;
		time.font = {fontSize: 12, fontWeight: "bold", fontFamily: "Roboto"};
		time.text = json.current_observation.local_time_rfc822;
		
	var temp = Ti.UI.createLabel(labelFormat);
		temp.top = location.top + 70;
		temp.left = 20;
		temp.font = {fontSize: 46};
		temp.text = json.current_observation.temp_f + " F";
		
	var weather = Ti.UI.createLabel(labelFormat);
		weather.top = temp.top + 70;
		weather.left = 20;
		weather.text = json.current_observation.weather;
		
	var feels = Ti.UI.createLabel(labelFormat);
		feels.top = weather.top + 20;
		feels.left = 20;
		feels.text = "Feels like " + json.current_observation.feelslike_f + " F";
		
	var update = Ti.UI.createLabel(labelFormat);
		update.textAlign = "center";
		update.left = 20;
		update.right = 20;
		update.bottom = 30;
		update.color = "yellow";
		update.text = json.current_observation.observation_time;
		
	win.add(bg);
	bg.add(icon);
	bg.add(location);
	bg.add(time);
	bg.add(weather);
	bg.add(temp);
	bg.add(feels);
	bg.add(update);
	win.open();
	
};

exports.checkData = checkData;