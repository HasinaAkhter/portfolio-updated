$(function(){
$(".fall").mouseenter(function(){
	$(".fall1 ").html("<b>A single page responsive site with a full-screen landing page<br>Built with html5,css3,jQuery</b>");
    $(".fall1 " ).css("font-family" ,"Bree serif");
});
$(".fall").mouseleave(function(){
	$(".fall1").text("taughannockfalls");	
});
$(".guide").mouseenter(function(){
	$(".guide1 ").html("<b>A multi-page responsive site <br> Built on Bootstrap with a subcription form built in php</b>");
    $(".guide1 ").css("font-family" ,"Bree serif");
});	
$(".guide").mouseleave(function(){
	$(".guide1").text("agoodlifeguide");	
});
$(".app").mouseenter(function(){
	$(".app1 ").html("<b>A todo tracker built on Bootswatch and Javascript <br>Optimized to different devices</b>");
    $(".app1 ").css("font-family" ,"Bree serif");
});	
$(".app").mouseleave(function(){
	$(".app1").text("todo app");	
});
$(".photogallery").mouseenter(function(){
	$(".photo1 ").html("<b>A responsive website of a collection of photos<br> Built with html5,css3 and jQuery</b>");
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
$(".kitchen").mouseenter(function(){
	$(".kitchen1 ").html("<b>A restaurant website <br> Built on WordPress<br>Optimized to different devices</b>");
    $(".kitchen1 ").css("font-family" ,"Bree serif");
});
$(".kitchen").mouseleave(function(){
	$(".kitchen1").text("thekitchen");	
});

$(".main").slideUp(2000).delay(1000).slideDown(2000);


});
