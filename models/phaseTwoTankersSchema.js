var mongoose = require('mongoose');



var phaseTwoTankersSchema = mongoose.Schema({
	
		  "Edge": {
		    "type": [
		      "Mixed"
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
    { collection: 'phaseTwoTankers' }
);


var phaseTwoTankers = module.exports = mongoose.model('phaseTwoTankers', phaseTwoTankersSchema);

//Get Polygons with all data
module.exports.getCompleteData = function (callback, limit) {
    phaseTwoTankers.find(callback);
};

module.exports.getSpecificData = function (data,callback, limit){
	//console.log("Test on schema:"+data);
	phaseTwoTankers.find({ "Edge.0.0":data}, callback);
};


//Add new polygon with all data
module.exports.addCompleteData = function(polygon){	
	//console.log(polygon); _id: polygon._id
	phaseTwoTankers.create({Edge: polygon.Edge, Weather: polygon.Weather, Avg_speed: polygon.Avg_speed, MEAN_HEADING: polygon.MEAN_HEADING }, function (err, res) {
	});
};
