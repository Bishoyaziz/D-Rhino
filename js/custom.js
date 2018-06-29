
/*jslint browser: true*/
/*global $, jQuery, alert*/
	$('.carousel').carousel({
		interval: 5000
	})
        
    $(".nav li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
	$(function() {
		'use strict';
		$('html').niceScroll();   
	});



var scrollButton = $(".scroll");

$(window).scroll(function () {
    'use strict';
	
    if ($(this).scrollTop() >= 600) {
            
        scrollButton.show();
            
    } else {
            
        scrollButton.hide();
    }
});

// Click On Button To Scroll Top
    
scrollButton.click(function () {
    'use strict';

    $("html,body").animate({ scrollTop : 0 }, 600);
        
});