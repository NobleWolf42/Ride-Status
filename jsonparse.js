var url = "/RideStatus/data.json";
var xmlhttp = new XMLHttpRequest();
myObj = {"not":"working", "count":42};

var status = new Array();
    status[0]="Open";
    status[1]="Closed";
    status[2]="Temporaly Closed for Weather";
    status[3]="Temporaly Closed for Maintence";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        
		update();
		}
}

xmlhttp.open("GET", url, true);
xmlhttp.send();

function update() {
    document.getElementById("cyclonestat").innerHTML = myObj;
//    document.getElementById("cyclonenote").innerHTML = jarray[0]["cyclone"]["notes"];
    document.getElementById("chairstat").innerHTML = myObj.cyclone;
//    document.getElementById("chairnote").innerHTML = jarray[0]["chair"]["notes"];
    document.getElementById("mazestat").innerHTML = myObj.cyclone["status"];
//    document.getElementById("mazenote").innerHTML = jarray[0]["maze"]["notes"];
//    document.getElementById("alpinestat").innerHTML = status[jarray[0]["alpine"]["status"]];
//    document.getElementById("alpinenote").innerHTML = jarray[0]["alpine"]["notes"];
//    document.getElementById("chutestat").innerHTML = status[jarray[0]["chute"]["status"]];
//    document.getElementById("chutenote").innerHTML = jarray[0]["chute"]["notes"];
//    document.getElementById("chairliftstat").innerHTML = status[jarray[0]["chairlift"]["status"]];
//    document.getElementById("chairliftnote").innerHTML = jarray[0]["chairlift"]["notes"];
//    document.getElementById("rockwallstat").innerHTML = status[jarray[0]["rockwall"]["status"]];
//    document.getElementById("rockwallnote").innerHTML = jarray[0]["rockwall"]["notes"];
//    document.getElementById("golfstat").innerHTML = status[jarray[0]["golf"]["status"]];
//    document.getElementById("golfnote").innerHTML = jarray[0]["golf"]["notes"];
//    document.getElementById("lightninstat").innerHTML = status[jarray[0]["lightnin"]["status"]];
//    document.getElementById("lightninnote").innerHTML = jarray[0]["lightnin"]["notes"];
//    document.getElementById("carouselstat").innerHTML = status[jarray[0]["carousel"]["status"]];
//    document.getElementById("carouselnote").innerHTML = jarray[0]["carousel"]["notes"];
//    document.getElementById("umbrellastat").innerHTML = status[jarray[0]["umbrella"]["status"]];
//    document.getElementById("umbrellanote").innerHTML = jarray[0]["umbrella"]["notes"];
//    document.getElementById("kiddielandstat").innerHTML = status[jarray[0]["kiddieland"]["status"]];
//    document.getElementById("kiddielandnote").innerHTML = jarray[0]["kiddieland"]["notes"];
//    document.getElementById("icestat").innerHTML = status[jarray[0]["ice"]["status"]];
//    document.getElementById("icenote").innerHTML = jarray[0]["ice"]["notes"];
//    document.getElementById("bumpercarsstat").innerHTML = status[jarray[0]["bumpercars"]["status"]];
//    document.getElementById("bumpercarsnote").innerHTML = jarray[0]["bumpercars"]["notes"];
//    document.getElementById("wildlifestat").innerHTML = status[jarray[0]["wildlife"]["status"]];
//    document.getElementById("wildlifenote").innerHTML = jarray[0]["wildlife"]["notes"];
//    document.getElementById("coasterstat").innerHTML = status[jarray[0]["coaster"]["status"]];
//    document.getElementById("coasternote").innerHTML = jarray[0]["coaster"]["notes"];
//    document.getElementById("tubingstat").innerHTML = status[jarray[0]["tubing"]["status"]];
//    document.getElementById("tubingnote").innerHTML = jarray[0]["tubing"]["notes"];
//    document.getElementById("tramwaystat").innerHTML = status[jarray[0]["tramway"]["status"]];
//    document.getElementById("tramwaynote").innerHTML = jarray[0]["tramway"]["notes"];
}

window.onload=update;
setInterval ( update, 60000 );