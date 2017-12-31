"use strict";
$(document).ready(function(){
	$("#nav").onePageNav();

	$("#c4NavToggle").click(function(){
		$(this).toggleClass("c4-nav-toggle-active");
		$("#c4NavItems").toggleClass("c4-nav-items-active");
		$("#c4Nav").toggleClass("c4-nav-active");
		$("#c4Window").toggle();
		$("body").toggleClass("c4-body-active");
	});
	$("#c4Window").click(function(){
		$(this).hide();
		$("#c4NavItems").removeClass("c4-nav-items-active");
		$("#c4Nav").removeClass("c4-nav-active");
		$("#c4NavToggle").removeClass("c4-nav-toggle-active");
		$("body").removeClass("c4-body-active");
	});
});