

function showTimeAMPM(){
	var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 12){
        session = "PM"
      }

    if(h == 0){
        h = 12; // nighttime
    }
    
    if(h > 12){ // applying to noon this is only for h == 13
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
//     document.body.style.backgroundColor = document.body.style.backgroundColor == "skyBlue" ? "pink" : "skyBlue";
	document.getElementById("clock").style.color = document.getElementById("clock").style.color == "pink" ? "yellow" : "pink";
   
    setTimeout(showTimeAMPM, 1000);

	var y= date.getFullYear();
	var mt = date.getMonth() + 1;
	var d = date.getDate();

	var datetime = y + "/" + mt + "/" + d;
	document.getElementById("d1").innerText = datetime;
    
};

showTimeAMPM();


setInterval(function(){

	var randomNumber = Math.random() * 300 + "px";
	$('#clock').css('margin-left', randomNumber);

	var randomNumberDeg = "rotate(" +Math.random() * 100 + "deg)";
	$('#clock').css('transform', randomNumberDeg);

},1000)



