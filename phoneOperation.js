 // function callBtn(){
// 	calls.innerHTML = 'hello';
// 	var phoneCall = document.getElementByClassName('callBtn');
// 	phoneCall.remove;
// }
function bringClock(){
				 h = new Date();
	       	 a = h.getHours();
	      	 b = h.getMinutes();
	        
     document.getElementById('clock').innerHTML=a+':'+b;
}





$(document).ready(function(){
	$(".callBtn").click(function(){
		$("#calls").show();
		$(".callBtn").hide();
	});

	$("#homeBtn").click(function(){
		// $(".callBtn").toggle("slide");
		$("#calls").hide();
		$(".callBtn").show();
	})
})
setInterval(bringClock, 1000)
