var mongoose = require('mongoose');



var dataSchema = mongoose.Schema({
	
		  "Edge": {
		    "type": [
		      "Mixed"
		    ]
		  },
		  "Coordinates": {
		    "type": [
		      "Array"
		    ]
		  },
		  "Centroid": {
		    "type": [
		      "String"
		    ]
		  },
		  "Weather": {
		    "type": [
		      "Array"
		    ]
		  },
		  "Avg_speed": {
		    "type": "Number"
		  },
		  "MEAN_HEADING": {
		    "type": "String"
		  }
		
},
    { collection: 'data' }
);


var data = module.exports = mongoose.model('data', dataSchema);

//Get Polygons with all data
module.exports.getCompleteData = function (callback, limit) {
    data.find(callback);
};


//Add new polygon with all data
module.exports.addCompleteData = function(polygon){	
	//console.log(polygon); _id: polygon._id
	data.create({Edge: polygon.Edge, Coordinates: polygon.Coordinates, Centroid: polygon.Centroid, Weather: polygon.Weather, Avg_speed: polygon.Avg_speed, MEAN_HEADING: polygon.MEAN_HEADING }, function (err, res) {
	});
};
