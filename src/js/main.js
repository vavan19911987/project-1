$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		speed: 1600,
		autoplay: true,
		autoplaySpeed: 1000
	});
});


$(document).ready(function () {
	$('.shadow').mouseenter(function () {

		$(this).toggleClass('navbar__menu-shadow');
	});
	$('.shadow').mouseleave(function () {

		$(this).toggleClass('navbar__menu-shadow');
	});

	
});

