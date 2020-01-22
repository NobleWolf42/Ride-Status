//Import the necessary libraries/declare the necessary objects
var express = require("express");
var myParser = require("body-parser");
var cors = require('cors');
var app = express();
const fs = require('fs');
var jsondata = require('./data.json');
var PORT = process.env.PORT || 3001;

app.use(cors());

app.use(myParser.json());

app.get("/getjson", function (request, response) {
    console.log("GET JSON!!!!");
    console.log(jsondata);
    response.send(jsondata);
})

app.post("/submitjson", function(request, response) {
    jsondata = JSON.stringify(request.body);
    fs.writeFile("/var/www/html/RideStatus/data.json", JSON.stringify(request.body), function(err) {
        if(err) {
            response.json({ 
                success: false
            });
        }
        else {
            response.json({ 
                success: true
            });
        }
    });
});
 
//Start the server and make it listen for connections on port 3001

app.listen(PORT, function () {
    console.log('Server running, version 1.0.0, Express is listening... at ' + PORT + " for requests");
});