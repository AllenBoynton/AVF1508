// User Interface module and text with json data display
var api = require("api");

var win = Ti.UI.createWindow({
	backgroundColor: "gray",
	text: "Car-U-Repair-It",
	top: 20,
	color: "yellow",	
	layout: "vertical"
});

win.addEventListener("open", function(){
	var sound = Ti.Media.createSound({
		url: "sounds/Engine_revving.wav",
		volume: 0.2
	});
	sound.play();
});

var bg = Ti.UI.createView({
	backgroundImage: "images/skidmarks.jpg",
	height: "100%",
	width: "100%"
});

var nameView = Ti.UI.createView({
	backgroundColor: "gray",
	opacity: .7,
	top: 20,
	height: 60,
	left: 100,
	right: 100,
	borderRadius: 8,
	borderWidth: 2,
	borderColor: "black"
});
var infoView = Ti.UI.createView({
	backgroundColor: "gray",
	opacity: .7,
	top: nameView.top + nameView.height + 50,
	height: 400,
	left: 100,
	right: 100,
	borderRadius: 8
});

var hoursView = Ti.UI.createView({
	backgroundColor: "gray",
	opacity: .7,
	top: infoView.top + infoView.height + 50,
	height: 150,
	left: 100,
	right: 100,
	borderRadius: 8
});
	
var name = Ti.UI.createLabel(/*labelFormat*/{
	color: "white", 
	top: 8,
	text: "name",
	textAlign: "center",
	font: {fontSize: 32, fontWeight: "bold"}
});	

var address = Ti.UI.createLabel(/*labelFormat*/{
	color: "white", 
	top: 20,
	text: "address",
	font: {fontSize: 22, fontWeight: "bold"}
});	

var distance = Ti.UI.createLabel(/*labelFormat*/{
	color: "white", 
	top: 150,
	left: 20,
	text: "distance",
	font: {fontSize: 18, fontWeight: "bold"}
});	

var make = Ti.UI.createLabel(/*labelFormat*/{
	color: "white", 
	top: 225,
	left: 20,
	text: "make",
	font: {fontSize: 18, fontWeight: "bold"}
});	

var repairs = Ti.UI.createLabel(/*labelFormat*/{
	color: "white", 
	top: 300,
	left: 20,
	text: "repairs",
	font: {fontSize: 18, fontWeight: "bold"}
});	

var hours = Ti.UI.createLabel(/*labelFormat*/{
	color: "white", 
	top: 20,
	left: 20,
	text: "hours"
});	

// Function to display the data on the UI
var addText = function(dataBackup){
		name.text 	  = dataBackup.name;
		address.text  = dataBackup.address;
		distance.text = "Distance from here: " + dataBackup.distance + " mi";
		make.text 	  = "We specialize in repairs of mostly " + dataBackup.make + "s. \n but repair most all foreign and domestic.";
		repairs.text  = "Type of work performed as a " + dataBackup.repairs + ".";
		hours.text 	  = "Hours of Operation: " + dataBackup.hours;	
};

// Main code
win.add(bg);
bg.add(nameView);
bg.add(infoView);
bg.add(hoursView);
nameView.add(name);
infoView.add(address);
infoView.add(distance);
infoView.add(make);
infoView.add(repairs);
hoursView.add(hours);
win.open();

// Export addText function
exports.addtext = addText;