const {app, BrowserWindow, Tray, Menu} = require('electron')
const url = require('url')
const path = require('path')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

let trayIcon = null
let win
let isQuiting

var oldObj = {"yeet":"Hi"};

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600, icon: path.join(__dirname,'icon.ico') }) //frame: false
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
   
   win.on('minimize',function(event){
        event.preventDefault();
        win.hide();
    });

    win.on('close', function (event) {
        if(!isQuiting){
            event.preventDefault();
            win.hide();
        }
        return false;
    });

    // Tray Icon Starts Here
    trayIcon = new Tray(path.join(__dirname,'icon.ico'))

    const trayMenuTemplate = [
        {
            label: 'Show Ride Status',
                click: function() {
                    console.log("Clicked on Show")
                    win.show()
                }
        },
            
        {
            label: 'Help',
                click: function () {
                console.log("Clicked on Help")
            }
        },

        {
            label: 'Exit',
                click: function () {
                console.log("Clicked on Exit")
                app.isQuiting = true
                app.quit()
            }
        }
    ]
         
    let trayMenu = Menu.buildFromTemplate(trayMenuTemplate)
    trayIcon.setContextMenu(trayMenu)
    trayIcon.setToolTip("Ride Alert System")
}

function newold() {
    var url = "http://www.noblewolf42.com/RideStatus/data.json";
    var xmlhttp = new XMLHttpRequest();
    myObj = {};
    differences = {};
    
    var opcl = new Array();
        opcl[0]="Open";
        opcl[1]="Closed";
        opcl[2]="Temporaly Closed for Weather";
        opcl[3]="Temporaly Closed for Maintence";
      
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myObj = JSON.parse(xmlhttp.responseText);
            if (oldObj.yeet == "Hi") {
                console.log("On Startup")
                oldObj = myObj
            }
            myProc()
    		}
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function diff (obj1, obj2) {
        // Make sure an object to compare is provided
        if (!obj2 || Object.prototype.toString.call(obj2) !== '[object Object]') {
            return obj1;
        }
        // Variables
        var diffs = {};
        var key;
        // Compare our objects
        // Loop through the first object
        for (key in obj1) {
            if (obj1.hasOwnProperty(key)) {
                compare(obj1[key], obj2[key], key);
            }
        }

        /**
        * Compare two items and push non-matches to object
        * @param  {*}      item1 The first item
        * @param  {*}      item2 The second item
        * @param  {String} key   The key in our object
        */
        function compare (item1, item2, key) {
            // Get the object type
            var type1 = Object.prototype.toString.call(item1);
            var type2 = Object.prototype.toString.call(item2);

            // If type2 is undefined it has been removed
            if (type2 === '[object Undefined]') {
                diffs[key] = null;
                return;
            }

            // If items are different types
            if (type1 !== type2) {
                diffs[key] = item2;
                return;
            }

            // If an object, compare recursively
            if (type1 === '[object Object]') {
                if (JSON.stringify(item1) != JSON.stringify(item2)) {
                    diffs[key] = item2;
                }
                return;
            }

            // If an array, compare
            if (type1 === '[object Array]') {
                if (!arraysMatch(item1, item2)) {
                 diffs[key] = item2;
                }
                return;
            }

            // Else if it's a function, convert to a string and compare
            // Otherwise, just compare
            if (type1 === '[object Function]') {
                if (item1.toString() !== item2.toString()) {
                    diffs[key] = item2;
                }
            } else {
                if (item1 !== item2 ) {
                    diffs[key] = item2;
                }
            }
        };

        // Loop through the second object and find missing items
        for (key in obj2) {
            if (obj2.hasOwnProperty(key)) {
                if (!obj1[key] && obj1[key] !== obj2[key] ) {
                    diffs[key] = obj2[key];
                }
            }
        }
        differences = diffs;
    
    };

    function myProc() {
        diff(oldObj, myObj);
        console.log("Differences:");
        console.log(differences);
        for (key in differences) {
            console.log(differences[key])
            key22 = differences[key]
            for (key in key22) {
                console.log(key22[key])
            }
        }
    }
}

setInterval ( newold, 60000 );
app.on('ready', createWindow)
app.on('ready', newold)
app.on('before-quit', function () {
    isQuiting = true;
});