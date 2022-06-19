$(document).ready(function(){
	//bottom-select
	$(".bottom-select__tit").on('click',function(e){
		e.preventDefault();
		if( $(".bottom-select" ).hasClass("is-active") ){
			$(this).closest('.bottom-select').removeClass('is-active');
			$(this).parent().find('.bottom-select2__subject, .bottom-select__list').removeClass('is-active');
		}else{
			$('.bottom-select, .bottom-select2__subject, .bottom-select__list').removeClass('is-active');
			$(this).closest('.bottom-select').addClass('is-active')
			$(this).parent().find('.bottom-select2__subject, .bottom-select__list').addClass('is-active');
		}
	})

	$(".bottom-select__item").click(function() {
		$('.bottom-select__item').removeClass('is-select');
		$(this).addClass('is-select').closest('.bottom-select').removeClass('is-active').find(".bottom-select__tit").addClass('is-active').text($(this).text());
		$(this).closest('.bottom-select').find('.bottom-select__list').removeClass('is-active')
	});
	//팝업
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
	$('.js-bottom-counsel').on('click',function(e){
		e.preventDefault();
		bottomCounselH();
		if($('.bottom-counsel').hasClass('is-active')){
			$('.bottom-counsel').removeClass('is-active');
			$('.bottom-tag__wrap').text('상담신청');
		}else{
			$('.bottom-counsel').addClass('is-active');
			$('.bottom-tag__wrap').text('숨기기');
		}
	})
	$('.program-body__btn').on('click',function(e){
		e.preventDefault();
		var nowPage = $(this).attr('data-tab');
		if($('.bottom-counsel').hasClass('is-active')){
			$('.bottom-counsel').removeClass('is-active');
			$('.bottom-tag__wrap').text('상담신청');
			setTimeout(function(){
				$('.bottom-counsel').addClass('is-active');
				$('.bottom-tag__wrap').text('숨기기');
				$('li[data-tab='+nowPage+']').trigger('click');
				$('.bottom-counsel__btn').removeClass();
				$('.bottom-counsel__item button').addClass('bottom-counsel__btn nth-'+nowPage+'');
			},600)
		}else{
			$('.bottom-counsel').addClass('is-active');
			$('.bottom-tag__wrap').text('숨기기');
			$('li[data-tab='+nowPage+']').trigger('click');
			$('.bottom-counsel__btn').removeClass();
			$('.bottom-counsel__item button').addClass('bottom-counsel__btn nth-'+nowPage+'');
		}
	});
	$('.bottom-select__item').on('mouseenter',function(){
		$(this).addClass('is-hover');
	}).on('mouseleave',function(){
		$(this).removeClass('is-hover');
	});

	$('.program-body__btn').on('mouseenter',function(){
		$(this).addClass('is-hover');
	}).on('mouseleave',function(){
		$(this).removeClass('is-hover');
	});



	//스크롤 모션 (real,location)
	// $(function(){
	// 	$(".footer").each(function(){
	// 		var $this = $(this);
	// 		var n = function() {
	//
	// 			if ($this.offset().top < $(window).scrollTop() + $(window).height() && $this.offset().top > $(window).scrollTop() - $this.height()) {
	//
	// 				$('.bottom-counsel').addClass('is-hide');
	// 				// 윈도우 스크롤 이벤트 함수 n 실행 종료
	// 				// $(window).unbind("scroll", n)
	// 			}else{
	// 				$('.bottom-counsel').removeClass('is-hide');
	// 			}
	// 		};
	//
	//
	// 		var b = function() {
	//
	// 			// $this 위치값 계산
	// 			if ($this.offset().top < $(window).scrollTop() + $(window).height() && $this.offset().top > $(window).scrollTop() - $this.height()) {
	//
	// 				// 원본 이미지 교체
	// 				$('.bottom-counsel').addClass('is-hide');
	//
	// 				// 윈도우 스크롤 이벤트 함수 n 실행 종료
	// 				// $(window).unbind("scroll", n)
	// 			}else{
	// 				$('.bottom-counsel').removeClass('is-hide');
	// 			}
	// 		};
	// 		// 윈도우 스크롤 이벤트로 함수 n 지속 실행
	// 		$(window).on("scroll", n)
	// 		// $this 위치값 계산
	// 		$(window).on("load", b)
	// 	});
	// });

	$('.popup-t__scroll').mCustomScrollbar({
        theme:"dark"
    });
});



function bottomCounselH(){
	var bottomCounsel = $('.bottom-counsel__bottom').outerHeight() + 2;
	$('.bottom-counsel').css('bottom',-bottomCounsel);
}

$(window).on("resize load", function () {
	bottomCounselH();
});
