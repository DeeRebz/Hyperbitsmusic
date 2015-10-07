$(document).ready(function() {

	$("nav .navbar-header a").click(function() {
	    var navId= $(this).attr("href");
	    $("html body").animate({scrollTop: $(navId).offset().top},500);
	    return false;
	});
	$("nav #navbar ul li a").click(function() {
	    var navId= $(this).attr("href");
	    $("html body").animate({scrollTop: $(navId).offset().top},500);
	    return false;
	});
	$("#mixing-buttons ul li #howitworks-button button").click(function() {
		$("#howitworks").toggle("fast");
	});
	$("#mixing-buttons ul li #getintouch-button button").click(function() {
		$("#getintouch").toggle("fast");
	});

	$(".home-text").fadeIn(1000);

	
});