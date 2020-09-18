$(function(){
	$(window).on('load resize', function(){
			var screenSize = $(window).width();	
			if (screenSize > 1317){
				
		
				
				$("section#details,section#skill,section#profile").show();
				
			} else if (screenSize >= 220 || screenSize <= 1316 ) {
				
				$("section#details,section#skill,section#profile").show();
			} 
	});
});

//Mobile Menu
$(function() {
	var toggles = document.querySelectorAll(".c-hamburger");
	for (var i = toggles.length - 1; i >= 0; i--) {
	  var toggle = toggles[i];
	  toggleHandler(toggle);
	};
	function toggleHandler(toggle) {
	  toggle.addEventListener( "click", function(e) {
		e.preventDefault();
		if(this.classList.contains("is-active") === true){
			 this.classList.remove("is-active") ;
			 $("header #mainNav.mobile,header #mainN").css({"display":"none"});
		}else{
			 this.classList.add("is-active");
			  $("header #mainNav.mobile,header #mainN").css({"display":"block"});
		}

	  });
	}
});

//scrollto
function scrollto(section){
	$('html, body').animate({
			scrollTop: $("h1#"+section+"").offset().top
	}, 500);	
	$("header #mainNav.mobile,header #mainN").css({"display":"none"});
	$(".c-hamburger").removeClass("is-active");	
}