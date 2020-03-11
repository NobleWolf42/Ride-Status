const { app, BrowserWindow, Tray, Menu, dialog } = require('electron');
const url = require('url');
const path = require('path');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let trayIcon = null;
let win;
let isQuiting;

var oldObj = {"yeet":"Hi"};

function createWindow() {
   win = new BrowserWindow({width: 1600, height: 900, icon: path.join(__dirname,'icon.ico'), frame: false })
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
                win.show()
            }
        },
        
        {
            label: 'Hide Ride Status',
            click: function() {
                win.hide()
            }
        },

        {
            label: 'Exit',
            click: function () {
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
    var url = "https://www.bencarpenterit.com:3001/getjson";
    var xmlhttp = new XMLHttpRequest();
    myObj = {};
    differences = {};
    
    var titles = new Array();
        titles["cyclone"]="Blue Cyclone";
        titles["chair"]="Chair Swing";
        titles["maze"]="Amaze'N Maze";
        titles["alpine"]="Alpine Slide";
        titles["chute"]="Shoot-the-Chute";
        titles["chairlift"]="Scenic Chairlift";	
        titles["rockwall"]="Rock Wall";
        titles["golf"]="Mini-Golf";
        titles["lightnin"]="Lightnin'";
        titles["carousel"]="Carousel";
        titles["umbrella"]="Umbrella Rides";
        titles["kiddieland"]="Kiddie Land & Train";
        titles["ice"]="Ice Skating";
        titles["bumpercars"]="Ice Bumper Cars";
        titles["wildlife"]="Wildlife Encounter";
        titles["coaster"]="Ski Mountain Coaster";
        titles["stubing"]="Summer Tubing";
        titles["tramway"]="Aerial Tramway";
        titles["wtubing"]="Winter Tubing";
        titles["ski"]="Ski Slopes";

    var opcl = new Array();
        opcl[0]="Open";
        opcl[1]="Closed";
        opcl[2]="Temporaly Closed for Weather";
        opcl[3]="Temporaly Closed for Maintence";
        opcl[4]="Closed for The Season";
      
    xmlhttp.onreadystatechange = function() {
        console.log(xmlhttp.statusText);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myObj = JSON.parse(xmlhttp.responseText);
            if (oldObj.yeet == "Hi") {
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
        var diffs = {"nope":"noo"};
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
                if (diffs.nope == "noo") {
                    delete diffs.nope;
                }
                return;
            }

            // If an object, compare recursively
            if (type1 === '[object Object]') {
                if (JSON.stringify(item1) != JSON.stringify(item2)) {
                    diffs[key] = item2;
                    if (diffs.nope == "noo") {
                        delete diffs.nope;
                    }
                }
                return;
            }

            // If an array, compare
            if (type1 === '[object Array]') {
                if (!arraysMatch(item1, item2)) {
                    diffs[key] = item2;
                    if (diffs.nope == "noo") {
                        delete diffs.nope;
                    }
                }
                return;
            }

            // Else if it's a function, convert to a string and compare
            // Otherwise, just compare
            if (type1 === '[object Function]') {
                if (item1.toString() !== item2.toString()) {
                    diffs[key] = item2;
                    if (diffs.nope == "noo") {
                        delete diffs.nope;
                    }
                }
            } else {
                if (item1 !== item2 ) {
                    diffs[key] = item2;
                    if (diffs.nope == "noo") {
                        delete diffs.nope;
                    }
                }
            }
        };

        // Loop through the second object and find missing items
        for (key in obj2) {
            if (obj2.hasOwnProperty(key)) {
                if (!obj1[key] && obj1[key] !== obj2[key] ) {
                    diffs[key] = obj2[key];
                    if (diffs.nope == "noo") {
                        delete diffs.nope;
                    }
                }
            }
        }
        differences = diffs;
    
    };

    function myProc() {
        diff(oldObj, myObj);
        msg = ''
        for (key in differences) {
            key22 = differences[key]
            msg = msg + titles[key] + ' is now ' + opcl[key22.status] + '. Notes: ' + ocpl[key22.notes] + '\n'
        }
        if (differences.nope != "noo") {
            dialog.showMessageBox(
                new BrowserWindow({
                  show: false,
                  alwaysOnTop: true
                }),
                {
                  type: 'error',
                  message: msg,
                  title: "Ride Status Update",
                  icon: path.join(__dirname,'icon.ico')
                }
            )
            oldObj = myObj
        }
    }
}

setInterval ( newold, 5000 );
app.on('ready', createWindow)
app.on('ready', newold)
app.on('before-quit', function () {
    isQuiting = true;
});