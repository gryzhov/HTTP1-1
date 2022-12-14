

$(function () {
	$('.testimonials__slider').slick({
		fade: true,
		infinite: false,
	}); 
	$('.show-nav').on('click', function () {
		$('.header__list').toggleClass('header__list--open');
	});
})
