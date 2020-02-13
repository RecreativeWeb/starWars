$(function() {

	$('.ico-burger-open').on('click', function() {
		$('.translate').removeClass('close');
		$('.translate').addClass('open');
	});

	$('.ico-burger-close').on('click', function() {
		$('.translate').addClass('close');
		$('.translate').removeClass('open');
	});

	$('main-nav a').on('click', function() {
		$('.translate').addClass('close');
		$('.translate').removeClass('open');
	});
	
});