var mongoose = require('mongoose');

//Weather data Schema

var weatherDataSchema = mongoose.Schema({
    _id: {
        type: String
    },
    DATA: {
        type: String
    },
    LATITUDE: {
        type: String
    },
	LONGTITUDE: {
        type: String
    },
	WIND_DIR: {
        type: String
    },
	WIND_SPEED: {
        type: String
    },	
},
    { collection: 'weather_data' }
);


var Weather_Data = module.exports = mongoose.model('Weather_data', weatherDataSchema);

//Get weather data
module.exports.getWeather_Data = function (callback, limit) {
    Weather_Data.find(callback);
};


