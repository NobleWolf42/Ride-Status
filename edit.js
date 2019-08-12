myObj = {"not":"working", "count":42};

function update() {
    var url = "/RideStatus/data.json";
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myObj = JSON.parse(xmlhttp.responseText);
    		myProc();
    		}
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function myProc() {
        document.getElementById("cyclonestat").selectedIndex = myObj.cyclone.status;
        document.getElementById("cyclonenote").value = myObj.cyclone.notes;
        document.getElementById("chairstat").selectedIndex = myObj.chair.status;
        document.getElementById("chairnote").value = myObj.chair.notes;
        document.getElementById("mazestat").selectedIndex = myObj.maze.status;
        document.getElementById("mazenote").value = myObj.maze.notes;
        document.getElementById("alpinestat").selectedIndex = myObj.alpine.status;
        document.getElementById("alpinenote").value = myObj.alpine.notes;
        document.getElementById("chutestat").selectedIndex = myObj.chute.status;
        document.getElementById("chutenote").value = myObj.chute.notes;
        document.getElementById("chairliftstat").selectedIndex = myObj.chairlift.status;
        document.getElementById("chairliftnote").value = myObj.chairlift.notes;
        document.getElementById("rockwallstat").selectedIndex = myObj.rockwall.status;
        document.getElementById("rockwallnote").value = myObj.rockwall.notes;
        document.getElementById("golfstat").selectedIndex = myObj.golf.status;
        document.getElementById("golfnote").value = myObj.golf.notes;
        document.getElementById("lightninstat").selectedIndex = myObj.lightnin.status;
        document.getElementById("lightninnote").value = myObj.lightnin.notes;
        document.getElementById("carouselstat").selectedIndex = myObj.carousel.status;
        document.getElementById("carouselnote").value = myObj.carousel.notes;
        document.getElementById("umbrellastat").selectedIndex = myObj.umbrella.status;
        document.getElementById("umbrellanote").value = myObj.umbrella.notes;
        document.getElementById("kiddielandstat").selectedIndex = myObj.kiddieland.status;
        document.getElementById("kiddielandnote").value = myObj.kiddieland.notes;
        document.getElementById("icestat").selectedIndex = myObj.ice.status;
        document.getElementById("icenote").value = myObj.ice.notes;
        document.getElementById("bumpercarsstat").selectedIndex = myObj.bumpercars.status;
        document.getElementById("bumpercarsnote").value = myObj.bumpercars.notes;
        document.getElementById("wildlifestat").selectedIndex = myObj.wildlife.status;
        document.getElementById("wildlifenote").value = myObj.wildlife.notes;
        document.getElementById("coasterstat").selectedIndex = myObj.coaster.status;
        document.getElementById("coasternote").value = myObj.coaster.notes;
        document.getElementById("stubingstat").selectedIndex = myObj.stubing.status;
        document.getElementById("stubingnote").value = myObj.stubing.notes;
        document.getElementById("tramwaystat").selectedIndex = myObj.tramway.status;
        document.getElementById("tramwaynote").value = myObj.tramway.notes;
        document.getElementById("wtubingstat").selectedIndex = myObj.wtubing.status;
        document.getElementById("wtubingnote").value = myObj.wtubing.notes;
        document.getElementById("skistat").selectedIndex = myObj.ski.status;
        document.getElementById("skinote").value = myObj.ski.notes;
    }
};

function sendjsondata() {
    var jsonurl = ":3000/submitjson";
    var jsonhttp = new XMLHttpRequest();
    var dataObj = myObj;
    
    jsonhttp.onreadystatechange = function() {
        if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
            alert(jsonhttp.responseText);
    		}
    }
    
    dataObj.cyclone.status = document.getElementById("cyclonestat").selectedIndex;
    dataObj.cyclone.notes = document.getElementById("cyclonenote").value;
    dataObj.chair.status = document.getElementById("chairstat").selectedIndex;
    dataObj.chair.notes = document.getElementById("chairnote").value;
    dataObj.maze.status = document.getElementById("mazestat").selectedIndex;
    dataObj.maze.notes = document.getElementById("mazenote").value;
    dataObj.alpine.status = document.getElementById("alpinestat").selectedIndex;
    dataObj.alpine.notes = document.getElementById("alpinenote").value;
    dataObj.chute.status = document.getElementById("chutestat").selectedIndex;
    dataObj.chute.notes = document.getElementById("chutenote").value;
    dataObj.chairlift.status = document.getElementById("chairliftstat").selectedIndex;
    dataObj.chairlift.notes = document.getElementById("chairliftnote").value;
    dataObj.rockwall.status = document.getElementById("rockwallstat").selectedIndex;
    dataObj.rockwall.notes = document.getElementById("rockwallnote").value;
    dataObj.golf.status = document.getElementById("golfstat").selectedIndex;
    dataObj.golf.notes = document.getElementById("golfnote").value;
    dataObj.lightnin.status = document.getElementById("lightninstat").selectedIndex;
    dataObj.lightnin.notes = document.getElementById("lightninnote").value;
    dataObj.carousel.status = document.getElementById("carouselstat").selectedIndex;
    dataObj.carousel.notes = document.getElementById("carouselnote").value;
    document.getElementById("umbrellastat").selectedIndex;
    dataObj.umbrella.notes = document.getElementById("umbrellanote").value;
    dataObj.kiddieland.status = document.getElementById("kiddielandstat").selectedIndex;
    dataObj.kiddieland.notes = document.getElementById("kiddielandnote").value;
    dataObj.ice.status = document.getElementById("icestat").selectedIndex;
    dataObj.ice.notes = document.getElementById("icenote").value;
    dataObj.bumpercars.status = document.getElementById("bumpercarsstat").selectedIndex;
    dataObj.bumpercars.notes = document.getElementById("bumpercarsnote").value;
    dataObj.wildlife.status = document.getElementById("wildlifestat").selectedIndex;
    dataObj.wildlife.notes = document.getElementById("wildlifenote").value;
    dataObj.coaster.status = document.getElementById("coasterstat").selectedIndex;
    dataObj.coaster.notes = document.getElementById("coasternote").value;
    dataObj.stubing.status = document.getElementById("stubingstat").selectedIndex;
    dataObj.stubing.notes = document.getElementById("stubingnote").value;
    dataObj.tramway.status = document.getElementById("tramwaystat").selectedIndex;
    dataObj.tramway.notes = document.getElementById("tramwaynote").value;
    dataObj.wtubing.status = document.getElementById("wtubingstat").selectedIndex;
    dataObj.wtubing.notes = document.getElementById("wtubingnote").value;
    dataObj.ski.status = document.getElementById("skistat").selectedIndex;
    dataObj.ski.notes = document.getElementById("skinote").value;

    jsonhttp.open("POST", jsonurl, true);
    jsonhttp.send(dataObj);
};

window.onload=update;