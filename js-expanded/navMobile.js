// Set what happens when the menu is clicked
jQuery(document).ready(function($) {

	$('#mobile-menu-btn').click(function() {
		$(this).toggleClass('return-body');
		$('#whitewrap').toggleClass('no-scroll');
		$('#menu-btn').toggleClass('menu-btn-nocolor');
		//$('#mobile-menu-overlay').toggleClass('expand');
		$('#mobile-menu-overlay').toggleClass('flex-container-row show-menu');
		//$('#mobile-nav').toggleClass('show-menu');
	});

	$('#mobile-menu-btn').click(function() {
		if ($('#mobile-menu-btn').hasClass('return-body')) {
			console.log('Has class');
			$('body').on('touchmove', function (e) {
				if (!$('.show-menu').has($(e.target)).length) e.preventDefault();
			});
		} else {
			console.log('No class');
			$('body').off();
		};
	});
});