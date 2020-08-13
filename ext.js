function go(url){ 
}

function go2(url){
	window.location.href = url;
}

function chLang(t,f) {
	$.ajax({
			type: "POST",
			url: "/template/home/ch_lang/"+t+"",
			data: {t:t}
		}).done(function(){
			var currentStr = window.location.href;
			currentStr = currentStr.replace("/" + t + "/", "/" + f + "/");
			window.location.href = currentStr;
		});
}
 
$(function() { 
 
	$(window).on('load resize', function(){
		mobileMenu();
		windowResize();
		getMobileOperatingSystem();
		classActive('signUp');
		$("nav#lang li."+lang+"").css('display','none');
		$("header #wrapper #mainN.mobile").css('display','none');
		$("header #mobilemainNav #btnNavM").removeClass("is-active");		
		leftMenu = false;
		
	
		
	});
	
	$(window).scroll(function () {
		
		var ControlDivTop = $('header');
		
		if ($(this).scrollTop() > 0) {
		  ControlDivTop.stop().css({ 'position': 'fixed', 'top':0, 'left':0 });
		} else {
		  ControlDivTop.stop().css({ 'position': 'fixed', 'top':0, 'left':0 });
		}

		var x = $(this).scrollTop();
		$('section#signUp, section#cloud, section#price, section#contact').css('background-position', '50%  ' + parseInt(-x / 30) + 'px');
		
		scrollactive();
		windowResize();
		
		if ($(this).scrollTop() > 1000) {
			$("section#signUp #homeBtnIndex").hide();
		}

		if ($(this).scrollTop() < 1000) {
			$("section#signUp #homeBtnIndex").show();
		}
		
		
		
	});
	
	
	/*$(".ui-slider-handle").draggable({ 
		axis: "x",
		containment: "parent"
	});*/
	
	$("#orderSummary_CCwrapper #crossBtn,#orderSummary_CCwrapper").click(function(){
		
		$('#loading').css({display: "block"});
		
		$("#orderSummary_CCwrapper").hide();
		//$('#OrderSummaryinner').load(''+basePath+''+lang+'/dedicatedserver/getcart #loadSettingItem'); 
		//$('#orderSummary_CCinner').load(''+basePath+''+lang+'/dedicatedserver/getcart');
		
		setTimeout(function () {
			$('#loading').fadeOut(500);
		}, 200);
	});


});

 
$(function() {
	$('#logo').click(function(){
		window.location.href = ""+basePath+""+lang+"/home";	
	});
	
	$(window).load(function() {
		//$('header #wrapper #dropLang').removeClass('show');
		
		
	});

	//dropdown menu
	var arr = [ "product"];
	jQuery.each( arr, function( i, val ) {
		$('header #mainNav li.'+ val +' ,ul#drop.'+ val +' li').on({
			mouseenter: function(){		
				var dropping = $(this).attr("class");
				//alert(dropping);
				$('ul#drop.'+ val +'').css('display','block');
				$('ul#mainNav li.'+ val +'').addClass('active');

			},mouseleave: function(){
				
				$('ul#drop.'+ val +'').css('display','none');
				$('ul#mainNav li.'+ val +'').removeClass('active');	
				
			}
		});
	});
	
});

function gettoindex(urls){
	//alert('ok');
	window.location.href = ""+basePath+""+lang+"/home#"+urls+"";	
}

function mobileMenu(){
		
	var leftMenu = true;
	var bgheight = $("body").height();

	$("header #mobilemainNav #btnNavM, header #wrapper #mainN.mobile").bind( "click", function() {
		
		if (leftMenu == true){

			$("header #mobilemainNav #btnNavM").addClass("is-active");
			$("header #mainNav.mobile ").css('display','block');	
			$("header #mainNav.mobile ").css({
				"height":  ""+bgheight+"px"
			});
			
			//var leftMenu = false;
		
			
		} else {
		
			$("header #mobilemainNav #btnNavM").removeClass("is-active");
			$("header #mainNav.mobile ").css('display','none');	
			$("header #mainNav.mobile ").css({
				"height":  ""+bgheight+"px"
			});
			
		
		}
		
		leftMenu =! leftMenu;
		//$('html, body').scrollTop(0);
		
		
		
	});	
	
	$("header #mobilemainNav #btnNavM").removeClass("is-active");	
	$("header #mainNav.mobile").css('display','none');

}

function windowResize(){
	var winW = $(window).width();
	//$("#form_error").css('left', winW/2-$("#form_error").width()/2);
	//$("div#errormessageBg #crossBtn").css('left', winW/2 -$("div#errormessageBg #crossBtn").width()/2);
	//$("div#errormessageBg div#errormessage").css('left', winW/2 -$("div#errormessageBg div#errormessage").width()/2);
} 

(function() {

   // "use strict";

	var toggles = document.querySelectorAll(".c-hamburger");

	for (var i = toggles.length - 1; i >= 0; i--) {
	  var toggle = toggles[i];
	  toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
	  toggle.addEventListener( "click", function(e) {
		e.preventDefault();
		(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	  });
	}

})();

$(function() {
	$('section p ,section article div ,section article p ').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 10
	});   
}); 

$(function(){
	
	$("section#support ul#menu").find("li").each(function(){
			
		$(this).click(function(){
			$('section#support #faqList').hide(); //reset the field
			var pageid2 = $(this).attr("link");
			$('section#support #faqList.'+pageid2+'').show();
		});
		
	});	
	
	$("section#support #mobilemenu").find("option").each(function(){
		
		$(this).click(function(){
			
			$('section#support #faqList').hide(); //reset the field
			
			var pageid2 = $(this).val();
			
			//alert(pageid2);
			$('section#support #faqList.'+pageid2+'').show();
		});
		
	});	
	
	//Url hash change
	$(window).bind( 'hashchange', function(e) {
		hashname = window.location.hash;

		if (hashname == '#signUp') { 
			classActive('signUp');
			bodyAnimate('signUp');
		}
		
		if (hashname == '#cloud') { 
			classActive('cloud');
			bodyAnimate('cloud');
		}
		
		if (hashname == '#payment') {
			
			classActive('payment');
			bodyAnimate('payment');
			//$("section#signUp #homeBtnIndex").hide();
		}
		
		if (hashname == '#contact') { 
			classActive('contact');
			bodyAnimate('contact');
			//$("section#signUp #homeBtnIndex").hide();
			
		}
	});
	//$(window).trigger('hashchange');
	
	
	
});


function classActive(id){
	
	
	
	$("#mainN #mainNav").find("li").each(function(){
		$(this).removeClass('active');
	});		
	$("#btn_"+id+"").addClass('active');
	
}

function bodyAnimate(section){
	
	$('html, body').animate({
			scrollTop: $("#"+section+"").offset().top - 91
	}, 1000);	
}


var winHeight = $(window).height();

var obj = { 
	signUp:0, 
	cloud: winHeight, 
	payment: winHeight * 2,
	contact: winHeight * 3 
	//contact: winHeight * 3 
};		


function scrollactive(){
	var file;
	var file = document.location.hash;  
	var scrolled = $(window).scrollTop();
	$.each(obj, function(i, val){
		if(scrolled >= val){ 
			   history.pushState(file, "#", "#"+ i +"");    
			   var $nav = $('#mainNav li');
			   $nav.siblings().removeClass('active');
			   $("#btn_"+ i +"").addClass('active');

				
			   
		}
		
		
		
	});	
	

	
	
	
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        navON();
    } else {
		navOFF();
	}

    if (/android/i.test(userAgent)) {
        navON();
    } else {
		navOFF();
	}

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        navON();
    } else {
		navOFF();
	}
	
	
	function navON(){
		$("#switchLang,nav#lang ul,nav#lang ul li,#switchLang i,#switchLang span").mouseover(function() {
			$("nav#lang").css('visibility','visible');
		}).mouseout(function(){
			$("nav#lang").css('visibility','visible');
		});
	}
	
	function navOFF(){
		$("#switchLang,nav#lang ul,nav#lang ul li,#switchLang i,#switchLang span").mouseover(function() {
			$("nav#lang").css('visibility','visible');
		}).mouseout(function(){
			$("nav#lang").css('visibility','hidden');
		});
	}
    return "unknown";
}


$(function() {
	var moveLeft = 2;
	var moveDown = 10;

	$('body').find("i#trigger").hover(function() {
		
	$('div#pop-up').show();
	//.css('top', e.pageY + moveDown)
	//.css('left', e.pageX + moveLeft)
	//.appendTo('body');
	}, function() {
		$('div#pop-up').hide();
	});

	//var top = $scrollTop();
	//alert (top);

	$('i#trigger').mousemove(function(e) {
		$("div#pop-up").css('left', e.pageX + moveLeft);
	});


	$('div#pop-up').hover(function(){
		$('div#pop-up').show();
	}, function() {
		$('div#pop-up').hide();
	});

});



