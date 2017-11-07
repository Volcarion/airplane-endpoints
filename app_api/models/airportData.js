var mongoose = require('mongoose');

var RunwaySchema = new mongoose.Schema({
    icao: String,
    runwayId: String,
    runwayLength: Number,
    runwayMagneticHeading: Number,
    runwayTrueHeading: Number
})

var AirportSchema = new mongoose.Schema({
	iata: String,
	icao: String,
	name: String,
	city: String,
	latitude: Number,
	longitued: Number,
	elevation: Number,
	runways: [RunwaySchema]
});

mongoose.model('AirportData', AirportSchema, 'AirportData');