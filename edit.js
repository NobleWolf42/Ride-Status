myObj = {"not":"working", "count":42};

function update() {
    var url = "http://www.noblewolf42.com:3000/getjson";
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
        if (obj1.not != "working"){
            for (let key in obj1) {
                document.getElementById(key + "stat").selectedIndex = obj1[key].status;
                document.getElementById(key + "note").value = obj1[key].notes;
            };
        };
    };
};

function sendjsondata() {
    let rides = ["cyclone", "chair", "maze", "alpine", "chute", "chairlift", "rockwall", "golf", "lightnin", "carousel", "umbrella", "kiddieland", "ice", "bumpercars", "wildlife", "coaster", "stubing", "tramway"];
    let jsonurl = "http://www.noblewolf42.com:3000/submitjson";
    let jsonhttp = new XMLHttpRequest();
    let dataObj = {};
    let saved = {};
    
    jsonhttp.onreadystatechange = function() {
        if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
            saved = JSON.parse(jsonhttp.responseText);
            customalert(saved.success);
        };
    };

    for (let ride of rides) {
        dataObj[ride] = {};
        dataObj[ride].status = document.getElementById(`${ride}stat`).selectedIndex;
        dataObj[ride].notes = document.getElementById(`${ride}note`).value;
    }

    jsonhttp.open("POST", jsonurl, true);
    jsonhttp.setRequestHeader('Content-Type', 'application/json');
    jsonhttp.send(JSON.stringify(dataObj));
};

function customalert(success) {
    if (success == true) {
        document.getElementById("poststatusdiv").hidden = false;
        document.getElementById("poststatus").innerHTML = 'The information has been successfully saved!<p class="poststatus" style="position: absolute; top: 0%; left: 96%" href="#" onclick="hidestatus()"><u><b>X</b></u></p>';
        document.getElementById("poststatusdiv").style.color = "#006e33";
        document.getElementById("poststatusdiv").style.backgroundColor = "#2bd487";
        setTimeout(hidestatus, 10000);
    }
    else {
        document.getElementById("poststatusdiv").hidden = false;
        document.getElementById("poststatus").innerHTML = 'An ERROR has occurred, please try again!!!<p class="poststatus" style="position: absolute; top: 0%; left: 96%" href="#" onclick="hidestatus()"><u><b>X</b></u></p>';
        document.getElementById("poststatusdiv").style.color = "#bb0706";
        document.getElementById("poststatusdiv").style.backgroundColor = "#cb344a";
        setTimeout(hidestatus, 10000);
    }
};

function hidestatus() {
    document.getElementById("poststatusdiv").hidden = true;
};

window.onload=update;
