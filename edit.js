myObj = {"not":"working", "count":42};

function update() {
    var url = "/RideStatus/data.json";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myObj = JSON.parse(xmlhttp.responseText);
    		myProc(myObj);
    		};
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function myProc(obj1) {
        var key;
        if (obj1.not != "working"){
            for (key in obj1) {
                document.getElementById(key + "stat").selectedIndex = obj1[key].status;
                document.getElementById(key + "note").value = obj1[key].notes;
            };
        };
    };
};

function sendjsondata() {
    var jsonurl = "http://www.noblewolf42.com:3000/submitjson";
    var jsonhttp = new XMLHttpRequest();
    var dataObj = {"cyclone":{"status":0,"notes":"Closes at 5 PM."},"chair":{"status":0,"notes":"Closes at 5 PM."},"maze":{"status":0,"notes":"Closes at 5 PM."},"alpine":{"status":0,"notes":"Closes at 5 PM."},"chute":{"status":0,"notes":"Closes at 5 PM."},"chairlift":{"status":0,"notes":"Closes at 5 PM."},"rockwall":{"status":0,"notes":"Closes at 5 PM."},"golf":{"status":0,"notes":"Closes at 5 PM."},"lightnin":{"status":0,"notes":"Closes at 5 PM."},"carousel":{"status":0,"notes":"Closes at 5 PM."},"umbrella":{"status":0,"notes":"Closes at 5 PM."},"kiddieland":{"status":0,"notes":"Closes at 5 PM."},"ice":{"status":0,"notes":"Closes at 5 PM."},"bumpercars":{"status":0,"notes":"Closes at 5 PM."},"wildlife":{"status":0,"notes":"Closes at 5 PM."},"coaster":{"status":0,"notes":"Closes at 5 PM."},"stubing":{"status":0,"notes":"Closes at 5 PM."},"tramway":{"status":0,"notes":"Closes at 5 PM."}};
    var saved = {};
    
    jsonhttp.onreadystatechange = function() {
        if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
            saved = JSON.parse(jsonhttp.responseText);
            console.log(saved);
            console.log(saved.success);
    		};
    };
    
    console.log(document.getElementById("cyclonestat").selectedIndex);
    console.log(document.getElementById("tramwaystat").selectedIndex);

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
    dataObj.umbrella.notes = document.getElementById("umbrellastat").selectedIndex;
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
    /*dataObj.wtubing.status = document.getElementById("wtubingstat").selectedIndex;
    dataObj.wtubing.notes = document.getElementById("wtubingnote").value;
    dataObj.ski.status = document.getElementById("skistat").selectedIndex;
    dataObj.ski.notes = document.getElementById("skinote").value;*/

    jsonhttp.open("POST", jsonurl, true);
    jsonhttp.setRequestHeader('Content-Type', 'application/json');
    console.log(JSON.stringify(dataObj));
    jsonhttp.send(JSON.stringify(dataObj));

    function customalert() {
        if (saved.success == true) {
            console.log("!TRUE!");
            document.getElementById("poststatusdiv").hidden = false;
            document.getElementById("poststatus").innerHTML = 'The information has been successfully saved!  TEST TEXT<p class="poststatus" style="position: absolute; top: 0%; left: 96%" href="#" onclick="hidestatus()"><u><b>X</b></u></p>';
            document.getElementById("poststatusdiv").style.color = "#006e33";
            document.getElementById("poststatusdiv").style.backgroundColor = "#2bd487";
            setTimeout(hidestatus, 10000);
        }
        if (saved.success == false) {
            console.log("!FALSE!");
            document.getElementById("poststatusdiv").hidden = false;
            document.getElementById("poststatus").innerHTML = 'An ERROR has occurred, please try again!!!  TEST TEXT<p class="poststatus" style="position: absolute; top: 0%; left: 96%" href="#" onclick="hidestatus()"><u><b>X</b></u></p>';
            document.getElementById("poststatusdiv").style.color = "#bb0706";
            document.getElementById("poststatusdiv").style.backgroundColor = "#cb344a";
            setTimeout(hidestatus, 10000);
        }
    };
};

function hidestatus() {
    document.getElementById("poststatusdiv").hidden = true;
};

window.onload=update;