$(function () {

	/* Main menu styles */
	if ($(window).scrollTop() >= 50) {

			$("#main-nav").addClass("scroll");

		}

	$(window).scroll(function () {

		if ($(window).scrollTop() >= 50) {

			$("#main-nav").addClass("scroll");

		} else {

			$("#main-nav").removeClass("scroll");
		}
	});


	var root = $("body");

	$("a[href^='#']").click(function (event) {
		event.preventDefault();

		var href = $(this).attr("href");
		root.animate({
			scrollTop: $(href).offset().top - 51
		}, 500);
	});
	
	window.sr = ScrollReveal({ reset: true, duration: 800 }).reveal(".row, #portfolio_images, form");

});