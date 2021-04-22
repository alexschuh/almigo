$(document).ready(function() {
    var klicker = 0;
    $('.menu-toggle-button').click(function(){
    	if(klicker == 0){
    		$('.menu ul').fadeIn();
    		klicker = 1;
    	}else if(klicker == 1){
    		$('.menu ul').fadeOut();
    		klicker = 0;
    	}
    });
    $(window).resize(function() { 
    	if($('.menu-toggle-button').css('display') == 'none' ){
	    	$('.menu ul').css({
	    		'display':'block'
	    	});
    	}else{
    		$('.menu ul').css({
	    		'display':'none'
	    	});
    	}
    });
    $('.pricing-option-2').click(function(){
    	if($('.pricing-option-1').hasClass('pricing-option-selected')){
	    	$(this).toggleClass('pricing-option-selected');
	    	$('.pricing-option-1').toggleClass('pricing-option-selected');
	    	$('.pricing-big-1').text('99€');
	    	$('.pricing-big-2').text('69€');
	    	$('.pricing-big-3').text('49€');
	    	$('.pricing-big-signup').text('99€');
    	}
    });
    $('.pricing-option-1').click(function(){
    	if($('.pricing-option-2').hasClass('pricing-option-selected')){
	    	$(this).toggleClass('pricing-option-selected');
	    	$('.pricing-option-2').toggleClass('pricing-option-selected');
	    	$('.pricing-big-1').text('89€');
	    	$('.pricing-big-2').text('59€');
	    	$('.pricing-big-3').text('39€');
	    	$('.pricing-big-signup').text('89€');
    	}
    });
});