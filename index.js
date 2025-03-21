function update() {
    var url = "https://ridesapi.bencarpenterit.com/getjson";
    var xmlhttp = new XMLHttpRequest();
    myObj = { not: "working", count: 42 };

    var opcl = new Array();
    opcl[0] = "Open";
    opcl[1] = "Closed";
    opcl[2] = "Temporally Closed for Weather";
    opcl[3] = "Temporally Closed for Maintenance";
    opcl[4] = "Closed for The Season";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myObj = JSON.parse(xmlhttp.responseText);
            myProc(myObj);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myProc(obj1) {
        var key;
        for (key in obj1) {
            document.getElementById(key + "stat").innerHTML =
                opcl[obj1[key].status];
            document.getElementById(key + "note").innerHTML = obj1[key].notes;
            document.getElementById(key + "pic").src =
                obj1[key].status + ".png";
        }
    }
}

window.onload = update;
setInterval(update, 5000);
