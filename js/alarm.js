//Count Down Clock
function countdown(a){
	var digits = parseInt( a, 10)*1000
		function end (){
			alert(`Time's up`); 
		} 
	var time = setTimeout(end, digits);
}

function clock(){
	const fullDate = new Date();
	let hours = fullDate.getHours();
	let mins = fullDate.getMinutes();
	let secs = fullDate.getSeconds();

	if (hours < 10 ){
		hours = "0"+hours;
	}
	if (mins < 10){
		mins = "0"+mins;
	}
	if (secs < 10){
		secs = "0"+secs;
	}
	document.getElementById('hour').innerHTML= hours;
	document.getElementById('min').innerHTML=":"+mins;
	document.getElementById('second').innerHTML= ":" +secs;
}

setInterval(clock,100);