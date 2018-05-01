$(document).ready(function(){
	
	

	$("#startCoding").click(function(){
		pleaceHolder = "timer-Coding";
		if(timerRunsCoding==false){
			$("#alert-Coding").toggle();
			timerRunsCoding = true;
			document.getElementById('timer-Coding').innerHTML =
			60 + ":" + 00;
			startTimer();
			$("#startCoding").html("STOP Coding");
		}else{
			//alert("Stopped");
			timerRunsCoding = false;
			$("#startCoding").html("Start Coding. You've got 60min");
			$("#alert-Coding").toggle();
			return;
			
		}
	});
	$("#startLearning").click(function(){
		pleaceHolder = "timer-Learning";
		if(timerRunsLearning==false){
			$("#alert-Learning").toggle();
			timerRunsLearning = true;
			document.getElementById('timer-Learning').innerHTML =
			60 + ":" + 00;
			startTimer();
			
			$("#startLearning").html("STOP Learning");
		}else{
			//alert("Stopped");
			timerRunsLearning = false;
			$("#startLearning").html("Start Learning. You've got 60min");
			$("#alert-Learning").toggle();
			break;
		}
	});
	$("#startEntertaiment").click(function(){
		pleaceHolder = "timer-Entertaiment";
		if(timerRunsEntertaiment==false){
			$("#alert-Entertaiment").toggle();
			timerRunsEntertaiment = true;
			document.getElementById('timer-Entertaiment').innerHTML =
			60 + ":" + 00;
			startTimer();
			$("#startEntertaiment").html("STOP Entertaiment");
		}else{
			//alert("Stopped");
			timerRunsEntertaiment = false;
			$("#startEntertaiment").html("Time for Entertaiment. You've got 60min");
			$("#alert-Entertaiment").toggle();
			return;
		}
	});
});
var timerRunsCoding = false;
var timerRunsLearning = false;
var timerRunsEntertaiment = false;
var pleaceHolder = "";

function startTimer() {
	var presentTime = document.getElementById(pleaceHolder).innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond((timeArray[1] - 1));
	if(s==59){m=m-1}
	if(m<0){
		alert('Time out');
		return;
		};
	
	document.getElementById(pleaceHolder).innerHTML =
		m + ":" + s;
	setTimeout(startTimer, 1000);
}
	function checkSecond(sec) {
	if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
	if (sec < 0) {sec = "59"};
	return sec;
	}	