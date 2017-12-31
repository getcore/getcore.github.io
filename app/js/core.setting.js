"use strict";
$(document).ready(function(){

	// scroll

	$(window).scroll(function(){

		var scroll = $(this).scrollTop();

		// sticky

		if(scroll > $("#navSticky").offset().top - 0){
			$(".nav-sticky").addClass("sticky");
		}else{
			$(".nav-sticky").removeClass("sticky");
		}

		// end sticky

		// content grid parallax landing page

		if(scroll > $(".content-group").offset().top - 400){
			$(".content-group .content-items").each(function(i){
				setTimeout(function(){
					$(".content-group .content-items").eq(i).addClass("content-items-active");
				}, 250 * i);
			});
		}else{
			$(".content-group .content-items").each(function(i){
				setTimeout(function(){
					$(".content-group .content-items").eq(i).removeClass("content-items-active");
				}, 250 * i);
			});
		}

		// end content grid parallax landing page

		// landing element

	   	if(scroll > $("#landingElementTop").offset().top - 300){
			$(".element-top").addClass("landing-element-active");
		}else{
			$(".element-top").removeClass("landing-element-active");
		}

		if(scroll > $("#landingElementBottom").offset().top - 300){
			$(".element-bottom").addClass("landing-element-active");
		}else{
			$(".element-bottom").removeClass("landing-element-active");
		}

		if(scroll > $("#landingElementRight").offset().top - 300){
			$(".element-right").addClass("landing-element-active");
		}else{
			$(".element-right").removeClass("landing-element-active");
		}

		if(scroll > $("#landingElementLeft").offset().top - 300){
			$(".element-left").addClass("landing-element-active");
		}else{
			$(".element-left").removeClass("landing-element-active");
		}

		// end landing element

		
		// to top

		if(scroll > $("#toTopActive").offset().top - 0){
			$(".totop").addClass("totop-active");
		}else{
			$(".totop").removeClass("totop-active");
		}		   

		// end to top

	});
	// end scroll

});