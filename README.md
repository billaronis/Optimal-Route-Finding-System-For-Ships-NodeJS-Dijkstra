

# route_finding-system
Optimal route finding system for cargo ships using weather data, Dijkstra Algorithm and NodeJS - Thesis project

The system contains a back-end component which calculates the optimal route between two ports in the Aegean sea by utilizing historical weather data, a front-end component which shows a map, textboxes where user can write down starting and ending port. By pressing the "calculation" button, a polyline will be formed between the ports and some important information for the route will be shown such as total distance, avg speed of the ship and total trip time. 


## Usage
Leaflet
MongoDB
NodeJS - Express

npm install nodejs  
npm install express  
npm install mongoose  
npm install serve-favicon

### Tools
VSCode  
Eclipse  
MongoDB Compass  
Postman

#### More Details

You can find all the datasets you need (in json form) to create the local Mongo database in this link: https://mega.nz/folder/UYhkiSKY#A8ztbJzmssPuEUlamXZbng
Create a local mongodb by using mongodb - community server, name it 'Ships' and add 4 new collections with their proper names as the files names.
Project has two phases. Phase one is a pre-process which combines phaseOne and weather_data datasets, clears them and prepares them for phase two.
Phase two contains the cleared data which can be used to find polygons, convert them to edges and create the final graph. You can only use the phaseTwo dataset without running the pre-process code. Project already contains a complete weighted directed graph with many nodes and edges in the Aegean Sea that can be used as an example (data.json) so you can also skip the graph building code. 

You can always use and MongoDB Cluster as a cloud DB and load the datasets there. Make sure to change the URI so the server connects to the correct DB.


#### Instructions

1)Database: Install & activate MongoDB: https://docs.mongodb.com/manual/administration/install-community/ (instructions for every OS) 
2)Server: Start server: 'cd' to the proper project directory & run 'node server.js'  
3)Client: Use a broswer or Postman to run the API (http://localhost:3000/home)  
  
