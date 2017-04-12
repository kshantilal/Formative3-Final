// FOOTER

$(document).ready(function(){
	$( ".hamburger" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".arrow-up" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
			$( ".arrow-up" ).show();
		});
	});
})

$(document).ready(function(){
	$(".arrow-up").click(function(){
		$("html,body").animate({'scrollTop':6});
	});
})






