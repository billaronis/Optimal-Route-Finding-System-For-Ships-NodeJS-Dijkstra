var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
const fs = require('fs');
//Test git
//app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
//app.use(express.urlencoded({limit: '50mb'}));

phaseOneTankers = require('./models/phaseOneTankersSchema');
phaseTwoTankers = require('./models/phaseTwoTankersSchema');
Ports = require('./models/portSchema');
Weather_Data = require('./models/weatherDataSchema');

//Connect to the database
const uri = "mongodb://localhost:27017/Ships";
mongoose.connect(uri, {  useNewUrlParser: true,  useUnifiedTopology: true}).then(() => {  console.log("MongoDB Connected…")}).catch(err => console.log(err));
//mongoose.connect(uri,{ useUnifiedTopology: true});
//var client = mongoose.connection;

app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/api/ports', function (req, res) {
    Ports.getPorts(function (err, ports) {
        if (err) {
            throw err;
        }
        res.json(ports);
    });
});

app.get('/api/ports/:port', function(req, res){
	//console.log(req.params.port);
	Ports.getPortByName(req.params.port, function(err, port){
		if(err){
			throw err;
		}
		//console.log(port);
		res.json(port);
	});
}); 

app.get('/api/phaseOne', function (req, res) {
	phaseOneTankers.getTankerPolygons(function (err, tankerPolygons) {
        if (err) {
            throw err;
        }
        res.json(tankerPolygons);
    });
});

app.post('/api/phaseTwoAdd', function (req, res) {
	//console.log(req.body);
	phaseTwoTankers.addCompleteData(req.body);
	res.status(200).end();
});

app.get('/api/phaseTwoGet', function (req, res) {
	phaseTwoTankers.getCompleteData(function (err, tankerPolygons) {
        if (err) {
            throw err;
        }
        res.json(tankerPolygons);
    });
});

app.get('/api/weatherData', function (req, res) {
	Weather_Data.getWeather_Data(function (err, weatherData) {
        if (err) {
            throw err;
        }
        res.json(weatherData);
    });
});

app.get('/api/loadGraph', function (req, res) {
		let rawdata = fs.readFileSync('data.json');
		let data = JSON.parse(rawdata);
		//console.log(test);
        res.json(data);
});


app.listen(3000);
console.log('Successfully connected to server. Server is listening to port 3000...');
