$(document).ready(function() {
	
	$('.drop1').hide();

	$('.wrapper').mouseover(function() {
        $('.drop1').slideDown('medium');
	});
	
	$('.wrapper').mouseleave(function() {
        $('.drop1').slideUp('medium');
	});

	$('.drop2').hide();

	$('.wrapper2').mouseover(function() {
        $('.drop2').slideDown('medium');
	});
	
	$('.wrapper2').mouseleave(function() {
        $('.drop2').slideUp('medium');
	});

	$('.drop3').hide();

	$('.wrapper3').mouseover(function() {
        $('.drop3').slideDown('medium');
	});
	
	$('.wrapper3').mouseleave(function() {
        $('.drop3').slideUp('medium');
	});

	



	$("#beer1").mouseenter(function() {
		$("#beer1").fadeTo("fast", 0.75);

	});

	$("#beer1").mouseleave(function() {
		$("#beer1").fadeTo("fast", 1);
	});

	$("#beer1").click(function() {
		$("#yellow").fadeToggle(200);

	});




	$("#beer2").mouseenter(function() {
		$("#beer2").fadeTo("fast", 0.75);

	});

	$("#beer2").mouseleave(function() {
		$("#beer2").fadeTo("fast", 1);
	});

	$("#beer2").click(function() {
		$("#orange").fadeToggle(200);

	});




	$("#beer3").mouseenter(function() {
		$("#beer3").fadeTo("fast", 0.75);

	});

	$("#beer3").mouseleave(function() {
		$("#beer3").fadeTo("fast", 1);
	});

	$("#beer3").click(function() {
		$("#brown").fadeToggle(200);

	});

});


