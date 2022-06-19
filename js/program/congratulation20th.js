$(function(){
	$(".js-finish-motion").each(function(){
		var $this = $(this);

		var n = function() {
			if ($this.offset().top < $(window).scrollTop() + ($(window).height()/1.3) && $this.offset().top > $(window).scrollTop() - $this.height()) {
                $this.addClass('is-active');
			}
		};

		var b = function() {
			if ($this.offset().top < $(window).scrollTop() + ($(window).height()/1.3) && $this.offset().top > $(window).scrollTop() - $this.height()) {
                $this.addClass('is-active');
			}
		};

		// 윈도우 스크롤 이벤트로 함수 n 지속 실행
		$(window).on("scroll", n);
		// $this 위치값 계산
		$(window).on("load", b);
	});

	// dday
	var dday = new Date('March 31, 2020 00:00:00');
	var today = new Date();

	var gap = today.getTime() - dday.getTime();
	var ddayResult = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
	var result1, result2;

	if(ddayResult.toString().length < 2){
		result1 = 0;
		result2 = ddayResult.toString().split('')[0];
	}else{
		result1 = ddayResult.toString().split('')[0];
		result2 = ddayResult.toString().split('')[1];
	}

	$('.cont-box2__num1').text(result1);
	$('.cont-box2__num2').text(result2);
});

$('.js-terms').click(function(e) {
    e.preventDefault();
    $('.popup-t').fadeIn(300);
    scrollStop();
});

$('.popup-t__close').on('click',function(e){
    e.preventDefault();
    $('.popup-t').fadeOut(300);
    scrollStart();
});

// modal
$('.js-modal').on('click', function(e){
    e.preventDefault();

    $('.modal').show();
    scrollStop();
});

$('.js-confirm').on('click', function(e){
    e.preventDefault();

    $('.modal').hide();
    scrollStart();
});


var bodyY;
var isPage;
var isData;

function scrollStop(){
	bodyY = $(window).scrollTop();
	isPage = $('body').attr('page-type');
	isData = $('body').attr('data-mobile');
	if(isPage == 'detail' && isData == 'false'){
		$.scrollify.disable();
		return;
	}
	$('html, body').addClass("no-scroll");
	$('.common').css("top",-bodyY);
}

function scrollStart(){
	if(isPage == 'detail' && isData == 'false'){
		$.scrollify.enable();
		return;
	}
	$('html, body').removeClass("no-scroll");
	$('.common').css('top','auto');
	bodyY = $('html,body').scrollTop(bodyY);
}
