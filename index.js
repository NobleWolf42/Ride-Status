function update() {
    var url = "/RideStatus/data.json";
    var xmlhttp = new XMLHttpRequest();
    myObj = {"not":"working", "count":42};
    
    var opcl = new Array();
        opcl[0]="Open";
        opcl[1]="Closed";
        opcl[2]="Temporaly Closed for Weather";
        opcl[3]="Temporaly Closed for Maintence";
        opcl[4]="Closed for The Season";
    
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
            document.getElementById('"' + key + 'stat"').innerHTML = opcl[myObj.key.status];
            document.getElementById('"' + key + 'note"').innerHTML = myObj.key.notes;
            document.getElementById('"' + key + 'pic"').src = '"' + myObj.key.status + '.png"';
            console.log('"' + myObj.key.status + '.png"');
        }
    }
};

window.onload=update;
setInterval ( update, 60000 );