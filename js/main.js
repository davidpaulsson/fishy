// @codekit-prepend "vendor/jquery.navobile.js","vendor/jquery.fitvids.js","vendor/jquery.toplink.js";

$(document).ready(function() {

	// Mobile navigation
	$("#site-navigation").navobile({
		// bindSwipe: true,
		cta: "#show-navobile",
		changeDOM: true
	});

	// Fitvids
	$('article').fitVids();

	// Expand widgets
	$('.widget-ul').find('h3').click(function(){
		$(this).toggleClass('active').next().slideToggle(200);
	});

	// Tab widgets
	var tabs = $('.widget-tabs');
	var tabsHeaders = tabs.find('h3');

	tabsHeaders.css('width', (100/tabsHeaders.length) +'%');

	tabsHeaders.click(function(){
		if (!$(this).hasClass('active')){
			var tabNumber = $(this).attr("class");

			tabsHeaders.removeClass('active');
			$(this).addClass('active');

			tabs.find('.widget-body').hide();
			tabs.find('div.'+tabNumber).delay(200).show();
		}
	});

	// Figures
	$('article figure img').each(function(){
		var imageWidth = $(this).width();
		$(this).parent().css('width',imageWidth);
	});

	// Share
	var shareThis = $('.share-this');

	shareThis.click(function(){
		$(this).siblings().animate({ width:'toggle' },200);
	});
	shareThis.siblings().hide();

	// Scroll to top
	$('#top-link').topLink({
		min: 400,
		fadeSpeed: 500
	});
	//smoothscroll
	$('#top-link').click(function(e) {
		e.preventDefault();
		// $.scrollTo(0,300);
		$("html, body").animate({ scrollTop: 0 }, 600);
	});

});