//Import the necessary libraries/declare the necessary objects
var express = require("express");
var myParser = require("body-parser");
var cors = require('cors');
var app = express();
const fs = require('fs');
var jsondata = require('./data.json');

console.log(jsondata);

app.use(cors());

app.use(myParser.json());

app.post("/submitjson", function(request, response) {
    console.log(request.body);
    fs.writeFile("/var/www/html/RideStatus/data.json", JSON.stringify(request.body), function(err) {
        if(err) {
            console.log(err);
            response.json({ 
                success: false
            });
        }
        else {
            console.log("The file was saved!");
            response.json({ 
                success: true
            });
        }
    });
});
 
//Start the server and make it listen for connections on port 8080

app.listen(3000);