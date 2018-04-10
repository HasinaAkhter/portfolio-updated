$(function(){
$(".main").slideUp(2000).delay(500).slideDown(2000);
)};
$(function(){
const title = "taughannockfalls";
const inBrief = "<em>A single page website with a full-screen landing page<br>Built from scratch with html5,css3,jQuery and php<br> Optimized to different devices</em>";
$(".fall ").mouseenter(function(){
	$(".fall1 ").html(inBrief);
    $(this).css("font-family" ,"Bree serif");
});
$(".fall").mouseleave(function(){
	$(".fall1").text(title);	
});

const title = "agoodlifeguide";
const inBrief = "<em>A multi-page website <br> Built from scratch with html5,css3,jQuery and php<br>Optimized to different devices</em>";
$(".guide ").mouseenter(function(){
	$(".guide1 ").html(inBrief);
    $(this).css("font-family" ,"Bree serif");
});
$(".guide").mouseleave(function(){
	$(".guide1").text(title);	
});


});
 