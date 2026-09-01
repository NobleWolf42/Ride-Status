//Import the necessary libraries/declare the necessary objects
let express = require("express");
let myParser = require("body-parser");
let http = require("http");
let cors = require("cors");
let app = express();
const fs = require("fs");
let jsondata = require("./data.json");
const keys = require("./keys.json");
const PORT = 3001;

app.use(cors());

app.use(myParser.json());

app.get("/getjson", function (request, response) {
    console.log("Get JSON.");
    response.send(jsondata);
});

app.post("/submitjson", function (request, response) {
    jsondata = JSON.stringify(request.body);
    fs.writeFile(
        "/let/www/html/bencarpenterit.com/public_html/projects/RideStatus/data.json",
        JSON.stringify(request.body),
        function (err) {
            if (err) {
                console.log("Save File Failed.");
                console.log(err);
                response.json({
                    success: false,
                });
            } else {
                console.log("File Saved Sucessfully!");
                response.json({
                    success: true,
                });
            }
        }
    );
});

//Start the server and make it listen for connections on port 3001
let privateKey = fs.readFileSync(keys.privateKey, "utf8");
let certificate = fs.readFileSync(keys.publicKey, "utf8");
let credentials = { key: privateKey, cert: certificate };
let httpsServer = http.createServer(app);

httpsServer.listen(PORT, function () {
    console.log(
        "Server running, version 1.0.0, Express is listening... at " +
            PORT +
            " for requests"
    );
});
