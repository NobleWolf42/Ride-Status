var url = "/RideStatus/data.json";
var xmlhttp = new XMLHttpRequest();

var status = new Array();
    status[0]="Open";
    status[1]="Closed";
    status[2]="Temporaly Closed for Weather";
    status[3]="Temporaly Closed for Maintence";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse("[" + xmlhttp.responseText + "]");
		update(myArr);
		}
}

function update(jarray) {
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    document.getElementById("cyclonestat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("cyclonenote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("chairstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("chairnote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("mazestat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("mazenote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("alpinestat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("alpinenote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("chutestat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("chutenote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("chairliftstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("chairliftnote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("rockwallstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("rockwallnote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("golfstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("golfnote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("lightninstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("lightninnote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("carouselstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("carouselnote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("umbrellastat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("umbrellanote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("kiddielandstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("kiddielandnote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("icestat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("icenote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("bumperstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("bumpernote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("wildlifestat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("wildlifenote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("coasterstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("coasternote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("tubingstat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("tubingnote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("tramwaystat").innerHTML = status[jarray[0]["cyclone"]["status"]];
    document.getElementById("tramwaynote").innerHTML = jarray[0]["cyclone"]["notes"];
}

window.onload=update;
setInterval ( update, 60000 );