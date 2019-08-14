myObj = {"not":"working", "count":42};

function update() {
    var url = "/RideStatus/data.json?nocache=" + new Date()).getTime();
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myObj = JSON.parse(xmlhttp.responseText);
    		myProc(myObj);
    		}
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function myProc(obj1) {
        var key;
        for (key in obj1) {
            document.getElementById(key + "stat").selectedIndex = obj1[key].status;
            document.getElementById(key + "note").value = obj1[key].notes;
        }
    }
};

function sendjsondata() {
    var jsonurl = "http://www.noblewolf42.com:3000/submitjson";
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
    jsonhttp.setRequestHeader('Content-Type', 'application/json');
    console.log(JSON.stringify(dataObj));
    jsonhttp.send(JSON.stringify(dataObj));
};

window.onload=update;