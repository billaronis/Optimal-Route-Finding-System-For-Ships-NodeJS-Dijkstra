var mongoose = require('mongoose');

//Centroid Schema

var phaseOneTankersSchema = mongoose.Schema({
    _id: {
        type: String
    },
	MEAN_HEADING: {
		type: String
	},
    Coordinates: {
        type: String
    },
    Avg_speed: {
        type: Number
    },
},
    { collection: 'phaseOneTankers' }
);


var phaseOneTankers = module.exports = mongoose.model('phaseOneTankers', phaseOneTankersSchema);

//Get Polygons
module.exports.getTankerPolygons = function (callback, limit) {
    phaseOneTankers.find(callback);
};

//Get Centroid
module.exports.getTargetPolygon = function (polygon, callback) {
    phaseOneTankers.find({ "_id": polygon }, callback);
};

