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

	// nav doc
	$("#navDoc").onePageNav();

	$("#docNavToggle").click(function(){
		$(this).toggleClass("doc-nav-toggle-active");
		$("#docNavItems").toggleClass("doc-nav-items-active");
		$("#docNav").toggleClass("doc-nav-active");
		$("#docWindow").toggle();
	});
	$("#docWindow").click(function(){
		$(this).hide();
		$("#docNavItems").removeClass("doc-nav-items-active");
		$("#docNav").removeClass("doc-nav-active");
		$("#docNavToggle").removeClass("doc-nav-toggle-active");
	});
	// end nav doc
});
