var isStop=true;
var s=0;
var min=0;
var hr=0;
var lapCounter=0;


function start()
{
	console.log("start");
	if(isStop==true){
		isStop=false;
		timer()

	}
}

function timer(){
	console.log("timer");
	if(isStop==false){
		s=parseInt(s);
		min=parseInt(min);
		hr=parseInt(hr)
		s++;
		if(s==60)
		{
			s=0;
			min++;
		}
		if(min==60){
			min=0;
			hr++;
		}

		if(s<10)
		{
			s= "0" + s;
		}

		if(min<10)
		{
			min="0" + min;
		}

		if(hr<10)
		{
			hr="0" + hr;
		}

		stopping.innerHTML=hr + " : " + min + " : " + s;
		setTimeout("timer()",1000);
	}
}

function stop(){
	isStop=true;

}

function reset(){
	isStop=true;
	s=0;
	min=0;
	hr=0;
	lapCounter=0;
	stopping.innerHTML= "00 : 00 : 00";
	document.getElementById("laps").innerHTML="";
}

function lap()
{
	if (!isStop) {
		lapCounter++;
		var lapTime = stopping.innerHTML;
		var lapElement = document.createElement("div");
		lapElement.className = "lap";
		lapElement.innerHTML = "Lap " + lapCounter + ": " + lapTime;
		document.getElementById("laps").appendChild(lapElement);
	}
}