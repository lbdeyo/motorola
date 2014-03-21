/* Replace SVG */
if(!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
	return $(this).attr('src').replace('.svg', '.gif');
  });
}

/* Nav Follow Scroll */
$(function() {
	var offset = $("nav#desktop").offset();
	$(window).scroll(function() {
		if ($(window).scrollTop() > offset.top) {
			$("nav#desktop").stop().animate({
				marginTop: $(window).scrollTop() - offset.top
			});
		} else {
			$("nav#desktop").stop().animate({
				marginTop: 0
			});
		};
		if ($(window).scrollTop() == $(document).height() - $(window).height()){
			$("nav#desktop").stop().animate({
    			marginTop: 1300
			});
			$("nav#desktop a#menu").attr("class", "dots3");
  		}
	});
});

/* Nav Change Dots */
$(document).ready(function(){
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		if (top < 450) $("nav#desktop a#menu").attr("class", "dots1");
		if (top > 450) $("nav#desktop a#menu").attr("class", "dots2");
		if (top > 1200) $("nav#desktop a#menu").attr("class", "dots3");
	});
});

/* Nav Menu Appear */
$("nav#desktop a#menu").click(function() {
	$( "nav#desktop ul" ).toggle( "slide" );
	$( "nav#desktop a#menu div#open" ).toggleClass("show");
	$( "nav#desktop a#menu div#close" ).toggleClass("show");
});
$("nav#mobile a#menu").click(function() {
	$( "nav#mobile ul" ).animate({height: "toggle"}, {duration: "fast"});
	$( "nav#mobile div#cover" ).toggleClass("show");
	$(this).toggleClass("close");
});
$("nav#mobile ul li a").click(function() {
	$( "nav#mobile ul" ).hide();
	$( "nav#mobile div#cover" ).toggleClass("show");
	$("nav#mobile a#menu").toggleClass("close");
});

/* Nav Scroll to Section */
$("nav ul li.video a").click(function() {
    $("html, body").animate({scrollTop: $("#videoSection").offset().top}, 500);
});
$("nav ul li.tour a").click(function() {
    $("html, body").animate({scrollTop: $("#tourSection").offset().top}, 500);
});
$("nav ul li.solutions a").click(function() {
    $("html, body").animate({scrollTop: $("#solutionsSection").offset().top}, 500);
});

/* Docking Footer */
$(document).ready(function() {
	if (jQuery.browser.mobile) {} else {
		$("footer div#contact").scrollToFixed( {
			bottom: 0,
			limit: $("footer div#contact").offset().top - $("footer div#contact").height()
		});
	}
});

/* Colorbox */
$(document).ready(function(){
  if (jQuery.browser.mobile) {
	  $(".youtube").colorbox({iframe:true, innerWidth:700, innerHeight:430});
  } else {
	  $(".youtube").colorbox({iframe:true, innerWidth:940, innerHeight:570});
  }
});

/* Mobile Tour Videos */
$("section#tourSection div#phone a#videoOneBTN").click(function() {
	$("section#tourSection div#phone div#videoOne").show();
	$("section#tourSection div#phone div#videoTwo").hide();
	$("section#tourSection div#phone div#videoThree").hide();
});
$("section#tourSection div#phone a#videoTwoBTN").click(function() {
	$("section#tourSection div#phone div#videoOne").hide();
	$("section#tourSection div#phone div#videoTwo").show();
	$("section#tourSection div#phone div#videoThree").hide();
});
$("section#tourSection div#phone a#videoThreeBTN").click(function() {
	$("section#tourSection div#phone div#videoOne").hide();
	$("section#tourSection div#phone div#videoTwo").hide();
	$("section#tourSection div#phone div#videoThree").show();
});