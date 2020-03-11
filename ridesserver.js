//Import the necessary libraries/declare the necessary objects
var express = require("express");
var myParser = require("body-parser");
var https = require('https');
var cors = require('cors');
var app = express();
const fs = require('fs');
var jsondata = require('./data.json');
var PORT = process.env.PORT || 3001;

app.use(cors());

app.use(myParser.json());

app.get("/getjson", function (request, response) {
    console.log("Get JSON.");
    response.send(jsondata);
})

app.post("/submitjson", function(request, response) {
    jsondata = JSON.stringify(request.body);
    fs.writeFile("/var/www/html/RideStatus/data.json", JSON.stringify(request.body), function(err) {
        if(err) {
            console.log("Save File Failed.");
            console.log(err);
            response.json({ 
                success: false
            });
        }
        else {
            console.log("File Saved Sucessfully!")
            response.json({ 
                success: true
            });
        }
    });
});
 
//Start the server and make it listen for connections on port 3001
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/bencarpenterit.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/bencarpenterit.com/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(3001);
//app.listen(PORT, function () {
//    console.log('Server running, version 1.0.0, Express is listening... at ' + PORT + " for requests");
//});