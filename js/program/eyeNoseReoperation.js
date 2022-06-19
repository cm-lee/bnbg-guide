$(document).ready(function(){
    $('.solution-tab__link').on('click',function(e){
		e.preventDefault();
        var tabClass = $(this).attr('href');
        
        $(this).parents('.solution-tab').find('.solution-tab__item, .solution-tab__content').removeClass('is-active');
		$(this).parents('.solution-tab__item').addClass('is-active');
        $("."+tabClass).addClass('is-active');

        if ($('body').attr('data-mobile') == 'true'){
            var currentText = $(this).text();
            var titElem = $(this).parents('.solution-tab').find('.solution-tab__btn');

            // console.log(currentText);

            titElem.find('span').text(currentText);
            titElem.trigger('click');
        }
        
        $('.js-solution-nose').slick('unslick');
        $('.js-solution-nose').slick(sliderSetting);
    });
    
    var sliderSetting = {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000
    }

    $('.js-solution-nose').slick(sliderSetting);

    $('.solution-tab__btn').click(function(e){
        e.preventDefault();

        if($(this).hasClass('is-active')){
            $(this).removeClass('is-active');
            $(this).siblings('.solution-tab__list').slideUp('fast');
		}else{
            $(this).addClass('is-active');
            $(this).siblings('.solution-tab__list').slideDown('fast');
		}
    });
});

$(function(){
	$(".js-event-scroll").each(function(){
		var $this = $(this);
		var n = function() {

			if ($this.offset().top < $(window).scrollTop() + ($(window).height()/1.3) && $this.offset().top > $(window).scrollTop() - $this.height()) {
				$('.cont-box1__box').addClass('is-active');
			}else{

			}
		};

		var b = function() {

			if ($this.offset().top < $(window).scrollTop() + ($(window).height()/1.3) && $this.offset().top > $(window).scrollTop() - $this.height()) {
                $('.cont-box1__box').addClass('is-active');
			}else{

			}
		};
		// 윈도우 스크롤 이벤트로 함수 n 지속 실행
		$(window).on("scroll", n);
		// $this 위치값 계산
		$(window).on("load", b);
	});

});