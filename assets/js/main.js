(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	// Slicknav
		$('#menu').slicknav({
	        closeOnClick:true,
	    });

	    // Add an Class to the <li> if has Submenu
    	$('.header .header-menu ul li:has(ul)').addClass('has-submenu');
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	