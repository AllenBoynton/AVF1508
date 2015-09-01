// Function to read the parsed json data
var api = require("api");

// Ti.Database.install("repairShops.sqlite", "repairShop");

var read = function(){
	var db = Ti.Database.open("repairShop");
	db.execute("CREATE TABLE IF NOT EXISTS shopTable (id INTEGER PRIMARY KEY, name TEXT, address TEXT, distance INTEGER, make TEXT, repairs TEXT, hours TEXT)");
	var dbRows = db.execute("Select * FROM shopTable");
		while (dbRows.isValidRow()){
			var repairs = {
				name:  	  	dbRows.fieldByName ("name"),
				address:  	dbRows.fieldByName ("address"),
				distance: 	dbRows.fieldByName ("distance"),
				make: 	  	dbRows.fieldByName ("make"),
				repairs:  	dbRows.fieldByName ("repairs"),
				operations:	dbRows.fieldByName ("hours"),
			};
			dbRows.next();
		}
	dbRows.close();
	db.close();
	// ui.addText(repairs);
};

// Function saves data to database
var saves = function(repairShop){
	var db = Ti.Database.open("repairShop");
	db.execute("CREATE TABLE IF NOT EXISTS shopTable (id INTEGER PRIMARY KEY, name TEXT, address TEXT, distance INTEGER, make TEXT, repairs TEXT, hours TEXT)");
	for (i=0, j=repairShop.length; i<j; i++){
		db.execute("INSERT INTO shopTable (name, address, distance, make, repairs, hours) VALUES (?,?,?,?,?,?)", repairShop[i].name, repairShop[i].address, repairShop[i].distance, repairShop[i].make, repairShop[i].repairs, repairShop[i].hours);
	};
    db.close();
    read();
};
// Exports
exports.saves = saves;
exports.read = read;