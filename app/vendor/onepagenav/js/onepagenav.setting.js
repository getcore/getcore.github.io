"use strict";
$(document).ready(function(){
	$("#nav").onePageNav();

	$("#opnToggle").click(function(){
		$("#opnNavItems").toggleClass("opn-nav-items-active");
		$(this).toggleClass("opn-nav-toggle-active");
		$("#opnBodyActive").toggleClass("opn-body-active");
	});

	// click document close
	$(document).on("click", function(event){
		var opnNavBasicToggle = $("#opnToggle");

	    if(opnNavBasicToggle !== event.target && !opnNavBasicToggle.has(event.target).length){
	        $("#opnNavItems").removeClass("opn-nav-items-active");
	        $("#opnToggle").removeClass("opn-nav-toggle-active");
	        $("#opnBodyActive").removeClass("opn-body-active");
	    }       
	});
});