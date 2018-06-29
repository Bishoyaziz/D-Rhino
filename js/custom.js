
/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function(){
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
});