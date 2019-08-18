//Import the necessary libraries/declare the necessary objects
var express = require("express");
var myParser = require("body-parser");
var cors = require('cors');
var app = express();
const fs = require('fs');

app.use(cors());

app.use(myParser.json());

app.post("/submitjson", function(request, response) {
    console.log(request.body);
    fs.writeFile("/var/www/html/RideStatus/data.json", JSON.stringify(request.body), function(err) {
        if(err) {
            console.log(err);
            response.send({ 
                Sucess: false
            });
        }
        else {
            console.log("The file was saved!");
            response.send({ 
                Sucess: true
            });
        }
    });
});
 
//Start the server and make it listen for connections on port 8080

app.listen(3000);