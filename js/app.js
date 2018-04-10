$(function(){
$(".fall").mouseenter(function(){
	$(".fall1 ").html("<b>A single page website with a full-screen landing page<br>Built from scratch with html5,css3,jQuery and php<br>Optimized to different devices</b>");
    $(".fall1 " ).css("font-family" ,"Bree serif");
});
$(".fall").mouseleave(function(){
	$(".fall1").text("taughannockfalls");	
});
$(".guide").mouseenter(function(){
	$(".guide1 ").html("<b>A multi-page website <br> Built from scratch with html5,css3,jQuery and php<br>Optimized to different devices</b>");
    $(".guide1 ").css("font-family" ,"Bree serif");
});	
$(".guide").mouseleave(function(){
	$(".guide1").text("agoodlifeguide");	
});
$(".photogallery").mouseenter(function(){
	$(".photo1 ").html("<b>A website with a collection of photos<br> Built from scratch with html5,css3 and jQuery<br>Optimized to different devices</b>");
    $(".photo1 ").css("font-family" ,"Bree serif");
});
$(".photogallery").mouseleave(function(){
	$(".photo1").text("photogallery");	
});
$(".cafe").mouseenter(function(){
	$(".cafe1 ").html("<b>A restaurant website <br> Built on php<br>Optimized to different devices</b>");
    $(".cafe1 ").css("font-family" ,"Bree serif");
});
$(".cafe").mouseleave(function(){
	$(".cafe1").text("cafeblack");	
});
$(".main").slideUp(2000).delay(1000).slideDown(2000);


});
