// initialize jQuery command after all page elements load
	    			
$(function(){

//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

	//hide
	$("#b1").click(function(){
		$("#p1").hide(1000);
	});
		
	//show
	$('#b2').click(function(){
		$('#p1').show(1000);
	});
			
	//toggle
	$('#b3').click(function(){
		$('#p1').toggle(1000);
	});
	//css
	$('#b4').click(function(){
		$('#p2').css("background-color","#ccc");
	});
		
	//css (multiple property changes)
	$('#b5').click(function(){
		$('#p2').css({"background-color":"blue","color":"white","padding":"5px"});
	});
		
	//html
	$('#b6').click(function(){
		$('#p3').text('change html text to this!');
	});
		
	//prepend
	$('#b7').click(function(){
		$('#p3').prepend('<b>Before <b>');
	});
		 
	//append
	$('#b8').click(function(){
		$('#p3').append('<b> After<b>');
	});
		 
	//before
	$('#b9').click(function(){
		$('#p4').before('<b><p>Before E</p><b>');
	});
		 
	//after
	$('#b10').click(function(){
		$('#p4').after('<b><p>After E</p><b>');
	});
		 
	//wrap
	$('#b11').click(function(){
		$('#p5').wrap("<div class='pinky'></div>");
	});
		 
	//addClass
	$('#b12').click(function(){
		$('#p5').wrap("<div class='texty'></div>");
	});
		 
	//clone
	$('#b13').click(function(){
		$('li').clone().appendTo("ul");
	});
		 
	//fadeOut
	$('#b14').click(function(){
		$('#p6').fadeOut("slow");
	});
		 
	//fadeIn
	$('#b15').click(function(){
		$('#p6').fadeIn("slow");
	});
		  
	//fadeToggle
	$('#b16').click(function(){
		$('#p6').fadeToggle("slow");
	});
		  
	//slideUp
	$('#b17').click(function(){
		$('.box-content').slideUp("slow");
	});
		 
	//slideDown
	$('#b18').click(function(){
		$('.box-content').slideDown("slow");
	});

	 //slideToggle
	 $('.box-header').click(function(){
		$('.box-content').slideToggle("slow");
	});
		  
	//animate
	$('#b19').click(function(){
		$('.box-animate').animate({height:"200px"});
		$('.box-animate').animate({height:"100px"});
		$('.box-animate').animate({height:"300px"});
		$('.box-animate').animate({height:"50px"});
	});
		 
});