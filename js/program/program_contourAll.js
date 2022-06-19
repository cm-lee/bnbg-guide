$(document).ready(function(){
	$(window).on('load',function(){
		navH = $('.header').height();
		$(".contour-all-tab a").click(function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top-navH}, 500);
	    });
	});
	$('.contour-slider__list').slick({
	    prevArrow: '.js-slider1-prev',
	    nextArrow: '.js-slider1-next'
	});

	$('.contour-slider__list').off('afterChange').on('afterChange', function(event, slick, currentSlide, nextSlide){
		videoStop();
	});


	//영상 일시정지
	function videoStop() {
	    f1 = $(".contour-slider__video1");
	    if (!f1 || !f1.attr("src")) return;

	    url = f1.attr("src").split("?")[0];

	    var data = {
	        "method" : "pause",
	        "value" : 1
	    }
	    f1[0].contentWindow.postMessage(JSON.stringify(data), url);

		f2 = $(".contour-slider__video2");
	    if (!f2 || !f2.attr("src")) return;

	    url = f2.attr("src").split("?")[0];

	    var data = {
	        "method" : "pause",
	        "value" : 1
	    }
	    f2[0].contentWindow.postMessage(JSON.stringify(data), url);

		f3 = $(".contour-slider__video3");
	    if (!f3 || !f3.attr("src")) return;

	    url = f3.attr("src").split("?")[0];

	    var data = {
	        "method" : "pause",
	        "value" : 1
	    }
	    f3[0].contentWindow.postMessage(JSON.stringify(data), url);


		f4 = $(".contour-slider__video4");
	    if (!f4 || !f4.attr("src")) return;

	    url = f4.attr("src").split("?")[0];

	    var data = {
	        "method" : "pause",
	        "value" : 1
	    }
	    f4[0].contentWindow.postMessage(JSON.stringify(data), url);

		f5 = $(".contour-slider__video5");
	    if (!f5 || !f5.attr("src")) return;

	    url = f5.attr("src").split("?")[0];

	    var data = {
	        "method" : "pause",
	        "value" : 1
	    }
	    f5[0].contentWindow.postMessage(JSON.stringify(data), url);

		f6 = $(".contour-slider__video6");
	    if (!f6 || !f6.attr("src")) return;

	    url = f6.attr("src").split("?")[0];

	    var data = {
	        "method" : "pause",
	        "value" : 1
	    }
	    f6[0].contentWindow.postMessage(JSON.stringify(data), url);
	}

	$(".contour-all__inner2 a").click(function(e){
		e.preventDefault();
		if ( $(this).attr("class") != "is-active" ){
			var video_src = $(this).find("img").attr("alt");

			$(".contour-all__inner2 a").removeClass("is-active");
			$(this).addClass("is-active");
			$(".contour-all__big iframe").attr("src", video_src);
		}
	});


});
