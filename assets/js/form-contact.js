/*
* ----------------------------------------------------------------------------------------
Author       : dhiraj sharma
Template Name: Personal Pro - Personal Portfolio Template
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
// JavaScript contact form Document
$(document).ready(function() {
	$('form#contact-form').submit(function() {
	$('form#contact-form .error').remove();
	var hasError = false;
	$('.requiredField').each(function() {
	if(jQuery.trim($(this).val()) == '') {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="error">You forgot to enter your '+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    } else if($(this).hasClass('email')) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(jQuery.trim($(this).val()))) {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="error">You entered an invalid '+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    }
    }
    });
    if(!hasError) {
    $('form#contact-form input.submit').fadeOut('normal', function() {
    $(this).parent().append('');
    });


var other_data = $('form#contact-form').serialize();  

 

     $("#loader").show();
        $.ajax({
            url: "assets/php/contact.php?submit=5&"+ other_data,
            type: "POST",
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            success: function(data){
            alert(data);
			  $('form#contact-form').slideUp("fast", function() {
			  $(this).before('<div class="success">Thank you. Your Email was sent successfully.</div>');
			  $("#loader").hide();
			  })
            }           
       });
	   
	   return false;
    }
 
   });
});