/*------------------------------------------------------------------

[Master Script]

Organization : Flamecore
Project      : core.js
License      : MIT

-------------------------------------------------------------------*/

"use strict";
$(document).ready(function(){

	// toggle
	
	$("#navToggle").click(function(){
		$("#navItems").slideToggle(200);
		$("#navToggle").toggleClass("nav-toggle-active");
	});

	// end toggle

	// dropdown

	$("[data-toggle1]").click(function(){
		$("[data-dropdown1]").slideToggle(200);
		$("[data-toggle1]").toggleClass("dropdown-active");
	});

	$("[data-toggle2]").click(function(){
		$("[data-dropdown2]").slideToggle(200);
		$("[data-toggle2]").toggleClass("dropdown-active");
	});

	$("[data-toggle3]").click(function(){
		$("[data-dropdown3]").slideToggle(200);
		$("[data-toggle3]").toggleClass("dropdown-active");
	});

	$("[data-toggle4]").click(function(){
		$("[data-dropdown4]").slideToggle(200);
		$("[data-toggle4]").toggleClass("dropdown-active");
	});

	$("[data-toggle5]").click(function(){
		$("[data-dropdown5]").slideToggle(200);
		$("[data-toggle5]").toggleClass("dropdown-active");
	});

	$("[data-toggle6]").click(function(){
		$("[data-dropdown6]").slideToggle(200);
		$("[data-toggle6]").toggleClass("dropdown-active");
	});

	$("[data-toggle7]").click(function(){
		$("[data-dropdown7]").slideToggle(200);
		$("[data-toggle7]").toggleClass("dropdown-active");
	});

	$("[data-toggle8]").click(function(){
		$("[data-dropdown8]").slideToggle(200);
		$("[data-toggle8]").toggleClass("dropdown-active");
	});

	$("[data-toggle9]").click(function(){
		$("[data-dropdown9]").slideToggle(200);
		$("[data-toggle9]").toggleClass("dropdown-active");
	});

	$("[data-toggle10]").click(function(){
		$("[data-dropdown10]").slideToggle(200);
		$("[data-toggle10]").toggleClass("dropdown-active");
	});

	$(document).on("click", function(event){
		var dataToggle1  = $("[data-toggle1]"),
		    dataToggle2  = $("[data-toggle2]"),
		    dataToggle3  = $("[data-toggle3]"),
		    dataToggle4  = $("[data-toggle4]"),
		    dataToggle5  = $("[data-toggle5]"),
		    dataToggle6  = $("[data-toggle6]"),
		    dataToggle7  = $("[data-toggle7]"),
		    dataToggle8  = $("[data-toggle8]"),
		    dataToggle9  = $("[data-toggle9]"),
		    dataToggle10 = $("[data-toggle10]");

		if(dataToggle1 !== event.target && !dataToggle1.has(event.target).length){
	        $("[data-dropdown1]").slideUp(200);
			$("[data-toggle1]").removeClass("dropdown-active");
	    }
	    if(dataToggle2 !== event.target && !dataToggle2.has(event.target).length){
	        $("[data-dropdown2]").slideUp(200);
			$("[data-toggle2]").removeClass("dropdown-active");
	    }
	    if(dataToggle3 !== event.target && !dataToggle3.has(event.target).length){
	        $("[data-dropdown3]").slideUp(200);
			$("[data-toggle3]").removeClass("dropdown-active");
	    }
	    if(dataToggle4 !== event.target && !dataToggle4.has(event.target).length){
	        $("[data-dropdown4]").slideUp(200);
			$("[data-toggle4]").removeClass("dropdown-active");
	    }
	    if(dataToggle5 !== event.target && !dataToggle5.has(event.target).length){
	        $("[data-dropdown5]").slideUp(200);
			$("[data-toggle5]").removeClass("dropdown-active");
	    }
	    if(dataToggle6 !== event.target && !dataToggle6.has(event.target).length){
	        $("[data-dropdown6]").slideUp(200);
			$("[data-toggle6]").removeClass("dropdown-active");
	    }
	    if(dataToggle7 !== event.target && !dataToggle7.has(event.target).length){
	        $("[data-dropdown7]").slideUp(200);
			$("[data-toggle7]").removeClass("dropdown-active");
	    }
	    if(dataToggle8 !== event.target && !dataToggle8.has(event.target).length){
	        $("[data-dropdown8]").slideUp(200);
			$("[data-toggle8]").removeClass("dropdown-active");
	    }
	    if(dataToggle9 !== event.target && !dataToggle9.has(event.target).length){
	        $("[data-dropdown9]").slideUp(200);
			$("[data-toggle9]").removeClass("dropdown-active");
	    }
	    if(dataToggle10 !== event.target && !dataToggle10.has(event.target).length){
	        $("[data-dropdown10]").slideUp(200);
			$("[data-toggle10]").removeClass("dropdown-active");
	    }        
	});

	// end dropdown

	// mega dropdown

	$("[data-megatoggle1]").click(function(){
		$("[data-megadropdown1]").slideToggle(200);
		$("[data-megatoggle1]").toggleClass("megadropdown-active");
	});
	$("[data-megatoggle2]").click(function(){
		$("[data-megadropdown2]").slideToggle(200);
		$("[data-megatoggle2]").toggleClass("megadropdown-active");
	});
	$("[data-megatoggle3]").click(function(){
		$("[data-megadropdown3]").slideToggle(200);
		$("[data-megatoggle3]").toggleClass("megadropdown-active");
	});
	$("[data-megatoggle4]").click(function(){
		$("[data-megadropdown4]").slideToggle(200);
		$("[data-megatoggle4]").toggleClass("megadropdown-active");
	});
	$("[data-megatoggle5]").click(function(){
		$("[data-megadropdown5]").slideToggle(200);
		$("[data-megatoggle5]").toggleClass("megadropdown-active");
	});
	
	$(document).on("click", function(event){
		var dataMegaToggle1 = $("[data-megatoggle1]"),
			dataMegaToggle2 = $("[data-megatoggle2]"),
			dataMegaToggle3 = $("[data-megatoggle3]"),
			dataMegaToggle4 = $("[data-megatoggle4]"),
			dataMegaToggle5 = $("[data-megatoggle5]");

   		if(dataMegaToggle1 !== event.target && !dataMegaToggle1.has(event.target).length){
	        $("[data-megadropdown1]").slideUp(200);
			$("[data-megatoggle1]").removeClass("megadropdown-active");
	    }
	    if(dataMegaToggle2 !== event.target && !dataMegaToggle2.has(event.target).length){
	        $("[data-megadropdown2]").slideUp(200);
			$("[data-megatoggle2]").removeClass("megadropdown-active");
	    }
	    if(dataMegaToggle3 !== event.target && !dataMegaToggle3.has(event.target).length){
	        $("[data-megadropdown3]").slideUp(200);
			$("[data-megatoggle3]").removeClass("megadropdown-active");
	    }
	    if(dataMegaToggle4 !== event.target && !dataMegaToggle4.has(event.target).length){
	        $("[data-megadropdown4]").slideUp(200);
			$("[data-megatoggle4]").removeClass("megadropdown-active");
	    }
	    if(dataMegaToggle5 !== event.target && !dataMegaToggle5.has(event.target).length){
	        $("[data-megadropdown5]").slideUp(200);
			$("[data-megatoggle5]").removeClass("megadropdown-active");
	    }

	});

	// end mega dropdown
	
	// load animation

	$(".load-animation-top").addClass("load-animation-active");
	$(".load-animation-right").addClass("load-animation-active");
	$(".load-animation-bottom").addClass("load-animation-active");
	$(".load-animation-left").addClass("load-animation-active");

	// end load animation

	// side

	$(".side-items ul li a:not(:only-child)").click(function(e) {
     	$(this).siblings(".side-dropdown").slideToggle(200);
      	$(this).find(".side-arrow").toggleClass("side-arrow-active");
      	$(this).toggleClass("side-dropdown-active");
      	e.stopPropagation();
    });

    $(".side-toggle").click(function(){
    	$(".side").toggleClass("side-active");
    	$(".side-window").fadeIn(200);
    });

    $(".side-toggle-close").click(function(){
    	$(".side").removeClass("side-active");
    	$(".side-window").fadeOut(200);
    });

    $(".side-window").click(function(){
    	$(this).fadeOut(200);
    	$(".side").removeClass("side-active");
    });
   
	// end side

	// filter

	$(".filter-btn").click(function(){
		var	filter = $(this).attr("data-filter");

		if (filter == "all"){
			$(".filter-items").show();
		}else{
			$(".filter-items").not("."+filter).hide();
			$(".filter-items").filter("."+filter).show();
		}
		
		$(this).addClass("filter-active").siblings().removeClass("filter-active");
	});

	// end filter

	// modal

	$(".modal-toggle").click(function(){
		$(".modal").fadeIn(200);
		$(".modal-window").fadeIn(200);
	});
	$(".modal-window").click(function(){
		$(this).fadeOut(200);
		$(".modal").fadeOut(200);
	});
	$(".modal-close").click(function(){
		$(".modal").fadeOut(200);
		$(".modal-window").fadeOut(200);
	});

	// end modal

	// popup

	$("#popupTop").click(function(){
		$(".popup-top").toggle();
	});
	$("#popupBottom").click(function(){
		$(".popup-bottom").toggle();
	});
	$("#popupLeft").click(function(){
		$(".popup-left").toggle();
	});
	$("#popupRight").click(function(){
		$(".popup-right").toggle();
	});

	// end popup

	// accordion

  	$(".acc .acc-list li a:not(:only-child)").click(function(e) {
      	$(this).siblings(".acc-dropdown").slideToggle(300);
      	$(this).find(".acc-arrow").toggleClass("acc-arrow-active");
      	$(this).toggleClass("acc-active");
      	e.stopPropagation();
    });

	// end accordion

	// tab

	$(".tab-btn").click(function(){
	    var tab = $(this).attr("data-tab");
	    	$(this).addClass("tab-active").siblings().removeClass("tab-active");
	    
	    	$(".tab-items").not("."+tab).hide();
	    	$(".tab-items").filter("."+tab).show();
	});

	$(".tabv-btn").click(function(){
      	var tabv = $(this).attr("data-tabv");
        	$(this).addClass("tabv-active").siblings().removeClass("tabv-active");
      
        	$(".tabv-items").not("."+tabv).hide();
        	$(".tabv-items").filter("."+tabv).show();
  	});

	// end tab

	// dropdown
	$("#dropboxToggle").click(function(){
        $(this).toggleClass("dropbox-active");
        $(this).find(".dropbox-arrow").toggleClass("dropbox-arrow-active");
        $("#dropboxMenu").slideToggle(300);
    });

    $(document).on("click", function(event){
        var dropboxToggle = $("#dropboxToggle");

        if(dropboxToggle !== event.target && !dropboxToggle.has(event.target).length){
            $("#dropboxMenu").slideUp(300);
            $("#dropboxToggle").removeClass("dropbox-active");
            $("#dropboxToggle").removeClass("dropbox-arrow-active");
            $(this).find(".dropbox-arrow").removeClass("dropbox-arrow-active");
        }        

    });
	// end dropdown

	// scrolltop

	$("#toTopToggle").on('click', function(event) {

        if (this.hash !== "") {

	        var hash = this.hash;
	    
	        $('html, body').animate({
	            	scrollTop: $(hash).offset().top - 70
	        	}, 1000, function(){
	    	});
    	}
  	});

	// end scrolltop

	// core 5.1 *****


	// nav middle click

	$(".nav-middle li:nth-child(1)").click(function(){
		$(".nav-middle-line").css("margin-left","0px");
	});

	$(".nav-middle li:nth-child(2)").click(function(){
		$(".nav-middle-line").css("margin-left","100px");
	});

	$(".nav-middle li:nth-child(3)").click(function(){
		$(".nav-middle-line").css("margin-left","200px");
	});

	$(".nav-middle li:nth-child(4)").click(function(){
		$(".nav-middle-line").css("margin-left","300px");
	});

	$(".nav-middle li:nth-child(5)").click(function(){
		$(".nav-middle-line").css("margin-left","400px");
	});

	$(".nav-middle li:nth-child(6)").click(function(){
		$(".nav-middle-line").css("margin-left","500px");
	});

	$(".nav-middle li:nth-child(7)").click(function(){
		$(".nav-middle-line").css("margin-left","600px");
	});

	$(".nav-middle li:nth-child(8)").click(function(){
		$(".nav-middle-line").css("margin-left","700px");
	});

	$(".nav-middle li:nth-child(9)").click(function(){
		$(".nav-middle-line").css("margin-left","800px");
	});

	// end nav middle click

	// nav middle hover

	$(".nav-middle-h li:nth-child(1)").hover(function(){
		$(".nav-middle-h-line").css("margin-left","0px");
	});

	$(".nav-middle-h li:nth-child(2)").hover(function(){
		$(".nav-middle-h-line").css("margin-left","100px");
	});

	$(".nav-middle-h li:nth-child(3)").hover(function(){
		$(".nav-middle-h-line").css("margin-left","200px");
	});

	$(".nav-middle-h li:nth-child(4)").hover(function(){
		$(".nav-middle-h-line").css("margin-left","300px");
	});

	$(".nav-middle-h li:nth-child(5)").hover(function(){
		$(".nav-middle-h-line").css("margin-left","400px");
	});

	$(".nav-middle-h li:nth-child(6)").hover(function(){
		$(".nav-middle-h-line").css("margin-left","500px");
	});

	$(".nav-middle-h li:nth-child(7)").hover(function(){
		$(".nav-middle-h-line").css("margin-left","600px");
	});

	$(".nav-middle-h li:nth-child(8)").hover(function(){
		$(".nav-middle-h-line").css("margin-left","700px");
	});

	$(".nav-middle-h li:nth-child(9)").hover(function(){
		$(".nav-middle-h-line").css("margin-left","800px");
	});

	// end nav middle hover

	// nav icon

	$(".nav-icon li:nth-child(1)").hover(function(){
		$(".nav-icon-line").css("margin-left","0px");
	});

	$(".nav-icon li:nth-child(2)").hover(function(){
		$(".nav-icon-line").css("margin-left","100px");
	});

	$(".nav-icon li:nth-child(3)").hover(function(){
		$(".nav-icon-line").css("margin-left","200px");
	});

	$(".nav-icon li:nth-child(4)").hover(function(){
		$(".nav-icon-line").css("margin-left","300px");
	});

	$(".nav-icon li:nth-child(5)").hover(function(){
		$(".nav-icon-line").css("margin-left","400px");
	});

	$(".nav-icon li:nth-child(6)").hover(function(){
		$(".nav-icon-line").css("margin-left","500px");
	});

	$(".nav-icon li:nth-child(7)").hover(function(){
		$(".nav-icon-line").css("margin-left","600px");
	});

	$(".nav-icon li:nth-child(8)").hover(function(){
		$(".nav-icon-line").css("margin-left","700px");
	});

	$(".nav-icon li:nth-child(9)").hover(function(){
		$(".nav-icon-line").css("margin-left","800px");
	});

	// end nav icon

	// nav ultimate

	// nav5top
	$(".nav5top-toggle").click(function(){
	    $(this).toggleClass("nav5top-toggle-active");
	    $(".nav5top").toggleClass("nav5top-active");
	    $(".nav5top-items").toggleClass("nav5top-items-active");
	    $(".nav5top-window").toggle();
	    $("body").toggleClass("overflow-hidden");
	});
	$(".nav5top-window").click(function(){
	    $(this).hide();
	    $(".nav5top-toggle").removeClass("nav5top-toggle-active");
	    $(".nav5top").removeClass("nav5top-active");
	    $(".nav5top-items").removeClass("nav5top-items-active");
	    $("body").removeClass("overflow-hidden");
	});
	$(".nav5top-back").click(function(){
	    $(".nav5top-window").hide();
	    $(".nav5top-toggle").removeClass("nav5top-toggle-active");
	    $(".nav5top").removeClass("nav5top-active");
	    $(".nav5top-items").removeClass("nav5top-items-active");
	    $("body").removeClass("overflow-hidden");
	});
	// end nav5top

	$(".nav5-toggle").click(function(){
		$(this).toggleClass("nav5-toggle-active");
		$(".nav5").toggleClass("nav5-active");
		$(".nav5-items").toggleClass("nav5-items-active");
		$(".nav5-window").toggle();
		$("body").toggleClass("overflow-hidden");
	});
	$(".nav5-search").click(function(){
		$(this).toggleClass("nav5-search-active");
		$(".nav5-search-input").slideToggle(200);
	});
	$(".nav5-search-remove").click(function(){
		$(".nav5-search").removeClass("nav5-search-active");
		$(".nav5-search-input").slideUp(200);
	});
	$(".nav5-window").click(function(){
		$(this).hide();
		$(".nav5-toggle").removeClass("nav5-toggle-active");
		$(".nav5").removeClass("nav5-active");
		$(".nav5-items").removeClass("nav5-items-active");
		$("body").removeClass("overflow-hidden");
	});
	$(".nav5-back").click(function(){
		$(".nav5-window").hide();
		$(".nav5-toggle").removeClass("nav5-toggle-active");
		$(".nav5").removeClass("nav5-active");
		$(".nav5-items").removeClass("nav5-items-active");
		$("body").removeClass("overflow-hidden");
	});
	// end nav ultimate

	// preview device
	$("#previewMobile").click(function(){
		$(this).toggleClass("preview-active");
		$("#previewDevice").toggleClass("preview-smartphone");
	});
	$("#previewTablet").click(function(){
		$(this).toggleClass("preview-active");
		$("#previewDevice").toggleClass("preview-tablet");
	});
	$("#previewLaptop").click(function(){
		$(this).toggleClass("preview-active");
		$("#previewDevice").toggleClass("preview-laptop");
	});
	$("#previewDesktop").click(function(){
		$(this).toggleClass("preview-active");
		$("#previewDevice").toggleClass("preview-desktop");
	});

	$(document).on("click", function(event){
		var previewMobile  = $("#previewMobile"),
			previewTablet  = $("#previewTablet"),
			previewLaptop  = $("#previewLaptop"),
			previewDesktop = $("#previewDesktop");

	    if(previewMobile !== event.target && !previewMobile.has(event.target).length){
	        $("#previewDevice").removeClass("preview-smartphone");
	        $("#previewMobile").removeClass("preview-active");
	    }
	    if(previewTablet !== event.target && !previewTablet.has(event.target).length){
	        $("#previewDevice").removeClass("preview-tablet");
	         $("#previewTablet").removeClass("preview-active");
	    }
	    if(previewLaptop !== event.target && !previewLaptop.has(event.target).length){
	        $("#previewDevice").removeClass("preview-laptop");
	         $("#previewLaptop").removeClass("preview-active");
	    }
	    if(previewDesktop !== event.target && !previewDesktop.has(event.target).length){
	        $("#previewDevice").removeClass("preview-desktop");
	         $("#previewDesktop").removeClass("preview-active");
	    }          
	});
	// end preview device
	
	// end core 5.1 *****

});