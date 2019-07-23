$(document).ready(function(){
	$('.slider-portfolio').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  infinite: true,
	  dots: true,
	  dotsClass: 'custom-dots',
	  prevArrow: '<i class="slider-arrow arrow-left"></i>',
	  nextArrow: '<i class="slider-arrow arrow-right"></i>',
	  centerMode: true,
      centerPadding: "1px",
      responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
	});
	$('.main-slider').slick({
	  	slidesToShow: 1,
        dots: true,
        arrows: false,
        dotsClass: 'custom-dots'
	});

	$(function(){
			$(".user_phone").mask('+7 (000) 000 00 00');
		});

	$(function(){
	    $('.call').click(function () {
		    $('.callShadow').show();
		    $('.callWindow').show();
	    });
	    $('.callShadow').click(function () {
		    $('.callShadow').hide();
		    $('.callWindow').hide();
	    });
	});
	document.getElementsByClassName("send").onclick = sendf();
});

function sendf(){
		sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
		return false; 
	}	
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, 
        type:     "POST",
        dataType: "html", 
        data: $("#"+ajax_form).serialize(), 
        success: function(response) { 
        	result = $.parseJSON(response);
        	console.log('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
        	$('.callShadow').hide();
		    $('.callWindow').hide();
    	},
    	error: function(response) { 
            console.log('Ошибка. Данные не отправлены.');
            $('.callShadow').hide();
		    $('.callWindow').hide();
    	}
 	});
}
