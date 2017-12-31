/*------------------------------------------------------------------
[Master Script]

Project           : Flamecore Organization
Vendor            : owlCarousel
Code License      : MIT
-------------------------------------------------------------------*/

"use strict"
$(document).ready(function(){
	// owlCarousel
	var owl = $('.owl-carousel');
	  	owl.owlCarousel({
	    items: 1,
	    nav: true,
	    loop: true,
	    smartSpeed: 1500,
	    lazyLoad:true,
	    autoplay: true,
	    autoplayHoverPause: true
	});
});


