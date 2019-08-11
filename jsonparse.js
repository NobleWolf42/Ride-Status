var url = "/RideStatus/data.json";
var xmlhttp = new XMLHttpRequest();
myObj = {"not":"working", "count":42};

var opcl = new Array();
    opcl[0]="Open";
    opcl[1]="Closed";
    opcl[2]="Temporaly Closed for Weather";
    opcl[3]="Temporaly Closed for Maintence";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myObj = JSON.parse(xmlhttp.responseText);
		update();
		}
}

xmlhttp.open("GET", url, true);
xmlhttp.send();

function update() {
    document.getElementById("cyclonestat").innerHTML = opcl[myObj.cyclone.status];
//    document.getElementById("cyclonenote").innerHTML = myObj.cyclone.notes;
    document.getElementById("chairstat").innerHTML = opcl[myObj.chair.status];
//    document.getElementById("chairnote").innerHTML = myObj.chair.notes;
//    document.getElementById("mazestat").innerHTML = opcl[myObj.maze.status];
//    document.getElementById("mazenote").innerHTML = myObj.maze.notes;
//    document.getElementById("alpinestat").innerHTML = opcl[myObj.alpine.status];
//    document.getElementById("alpinenote").innerHTML = myObj.alpine.notes;
//    document.getElementById("chutestat").innerHTML = opcl[myObj.chute.status];
//    document.getElementById("chutenote").innerHTML = myObj.chute.notes;
//    document.getElementById("chairliftstat").innerHTML = opcl[myObj.chairlift.status];
//    document.getElementById("chairliftnote").innerHTML = myObj.chairlift.notes;
//    document.getElementById("rockwallstat").innerHTML = opcl[myObj.rockwall.status];
//    document.getElementById("rockwallnote").innerHTML = myObj.rockwall.notes;
//    document.getElementById("golfstat").innerHTML = opcl[myObj.golf.status];
//    document.getElementById("golfnote").innerHTML = myObj.golf.notes;
//    document.getElementById("lightninstat").innerHTML = opcl[myObj.lightnin.status];
//    document.getElementById("lightninnote").innerHTML = myObj.lightnin.notes;
//    document.getElementById("carouselstat").innerHTML = opcl[myObj.carousel.status];
//    document.getElementById("carouselnote").innerHTML = myObj.carousel.notes;
//    document.getElementById("umbrellastat").innerHTML = opcl[myObj.umbrella.status];
//    document.getElementById("umbrellanote").innerHTML = myObj.umbrella.notes;
//    document.getElementById("kiddielandstat").innerHTML = opcl[myObj.kiddieland.status];
//    document.getElementById("kiddielandnote").innerHTML = myObj.kiddieland.notes;
//    document.getElementById("icestat").innerHTML = opcl[myObj.ice.status];
//    document.getElementById("icenote").innerHTML = myObj.ice.notes;
//    document.getElementById("bumpercarsstat").innerHTML = opcl[myObj.bumpercars.status];
//    document.getElementById("bumpercarsnote").innerHTML = myObj.bumpercars.notes;
//    document.getElementById("wildlifestat").innerHTML = opcl[myObj.wildlife.status];
//    document.getElementById("wildlifenote").innerHTML = myObj.wildlife.notes;
//    document.getElementById("coasterstat").innerHTML = opcl[myObj.coaster.status];
//    document.getElementById("coasternote").innerHTML = myObj.coaster.notes;
//    document.getElementById("stubingstat").innerHTML = opcl[myObj.stubing.status];
//    document.getElementById("stubingnote").innerHTML = myObj.stubing.notes;
//    document.getElementById("tramwaystat").innerHTML = opcl[myObj.tramway.status];
//    document.getElementById("tramwaynote").innerHTML = myObj.tramway.notes;
//    document.getElementById("wtubingstat").innerHTML = opcl[myObj.wtubing.status];
//    document.getElementById("wtubingnote").innerHTML = myObj.wtubing.notes;
//    document.getElementById("skistat").innerHTML = opcl[myObj.ski.status];
//    document.getElementById("skinote").innerHTML = myObj.ski.notes;
}

window.onload=update;
setInterval ( update, 60000 );