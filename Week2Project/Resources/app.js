// Allen Boynton
// AVF 1508
// Week 2 Project : Storage/SQLite
// August 16, 2015  ***Revised***

// Set background
Titanium.UI.setBackgroundColor("#000");

// Network connectivity check
if (Ti.Network.online){
	Ti.API.info("online");
	
	//Required modules
	var ui = require("ui");
	var api = require("api");
	var geo = require("geo");
	geo.getGeo();
	
// If no network present, revert to local storage
} else {
	alert ("No network connection detected. Connect to network in Settings or tap OK to use last information received.");
	var storage = require("storage");
	Ti.API.info("No connection");
	storage.read(); 
};
