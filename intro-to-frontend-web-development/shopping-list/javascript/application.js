$(document).ready(function(){

	alert("Hello World");

	$('.list').on('click','li',function(){
		$(this).toggleClass('completed');
	});

});