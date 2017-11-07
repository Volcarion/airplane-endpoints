var mongoose = require('mongoose');

var ClimbSchema = new mongoose.Schema({
	Weight: Number,
	Flaps5: Number,
	Flaps10: Number,
	Flaps15: Number,
	VClimb: Number
});

mongoose.model('ClimbData', ClimbSchema, 'ClimbData');

var TakeoffSchema = new mongoose.Schema({
	Weight: Number,
	Setting: Number,
	Vr: Number,
	V2: Number,
	Temp: String,
	Altitude: Number,
});

mongoose.model('TakeoffData', TakeoffSchema, 'TakeoffData');

var LandingSchema = new mongoose.Schema({
	Weight: Number,
	Setting: Number,
	Vapp: Number,
	Vref: Number,
	Vga: Number,
});

mongoose.model('LandingData', LandingSchema, 'LandingData');