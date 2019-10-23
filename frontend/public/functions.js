$(function(){
  
	$("#nav-icon").on("click", function(e){
			$(this).toggleClass("open");

			$("nav ul:last-of-type").toggleClass("show", "fast");
});



});
