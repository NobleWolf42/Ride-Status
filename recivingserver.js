//Import the necessary libraries/declare the necessary objects
var express = require("express");
var myParser = require("body-parser");
var app = express();
const fs = require('fs');

app.use(myParser.json();
app.post("/submitjson", function(request, response) {
    fs.writeFile("/tmp/test.json", request, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});
 
//Start the server and make it listen for connections on port 8080

app.listen(3000);