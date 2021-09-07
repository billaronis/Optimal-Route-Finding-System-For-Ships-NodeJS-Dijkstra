var mongoose = require('mongoose');

//Port Schema

var portSchema = mongoose.Schema({
	_id:{
		type: String,
  },
	geometry:{
		coordinates:{
      type: Array
    },
	},
	properties:{
		portname:{
      type: String
    },
    country:{
      type: String
    },
	},
},
{ collection : 'greekPorts'}
);


var Ports = module.exports = mongoose.model("greekPorts", portSchema);

//Get Ports
module.exports.getPorts = function(callback, limit){
	Ports.find(callback);
};

//Get PortByName
module.exports.getPortByName = function(port, callback){
	Ports.find({ "properties.portname":{$regex: port, $options: 'i'}}, callback).limit(10);
};
