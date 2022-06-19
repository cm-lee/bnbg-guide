// var month = 10;
$(document).ready(function(){
	// $(".plan-calendar__day").on('click',function(){
	// 	var calendarCheck1 = $(this).index()-29;
	// 	$(".plan-calendar__day").removeClass("type-week1-start type-week1-end type-week2-end type-week3-end type-departure type-week1 type-week2 type-week3 type-week4");
	// 	$(this).addClass("type-departure");
	// 	$(".plan-calendar__box.type-left .plan-calendar__day").eq(calendarCheck1+29).addClass("type-departure");
	// 	if($(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1).hasClass("day_holi")){
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+1).addClass("type-week1-start");
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+9).addClass("type-week1-end");
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+16).addClass("type-week2-end");
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+23).addClass("type-week3-end");
	//
	// 	}else{
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1).addClass("type-week1-start");
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+8).addClass("type-week1-end");
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+15).addClass("type-week2-end");
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+22).addClass("type-week3-end");
	// 	}
	//
	// 	if($(".plan-calendar__box.type-left .plan-calendar__day").eq(calendarCheck1).hasClass("day_holi")){
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+1).addClass("type-week1-start");
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+9).addClass("type-week1-end");
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+16).addClass("type-week2-end");
	// 		$(".plan-calendar__box.type-right .plan-calendar__day").eq(calendarCheck1+23).addClass("type-week3-end");
	//
	// 	}else{
	// 		$(".plan-calendar__box.type-left .plan-calendar__day").eq(calendarCheck1+29).addClass("type-departure");
	// 		$(".plan-calendar__box.type-left .plan-calendar__day").eq(calendarCheck1).addClass("type-week1-start");
	// 		$(".plan-calendar__box.type-left .plan-calendar__day").eq(calendarCheck1+8).addClass("type-week1-end");
	// 		$(".plan-calendar__box.type-left .plan-calendar__day").eq(calendarCheck1+15).addClass("type-week2-end");
	// 		$(".plan-calendar__box.type-left .plan-calendar__day").eq(calendarCheck1+22).addClass("type-week3-end");
	// 	}
	// 	$(".plan-calendar__box.type-right .type-week1-end").prevUntil(".type-week1-start").addClass("type-week1");
	// 	$(".plan-calendar__box.type-right .type-week2-end").prevUntil(".type-week1-end").addClass("type-week2");
	// 	$(".plan-calendar__box.type-right .type-week3-end").prevUntil(".type-week2-end").addClass("type-week3");
	// 	$(".plan-calendar__box.type-right .type-departure").prevUntil(".type-week3-end").addClass("type-week4");
	// 	$(".plan-calendar__box.type-left .type-week1-end").prevUntil(".type-week1-start").addClass("type-week1");
	// 	$(".plan-calendar__box.type-left .type-week2-end").prevUntil(".type-week1-end").addClass("type-week2");
	// 	$(".plan-calendar__box.type-left .type-week3-end").prevUntil(".type-week2-end").addClass("type-week3");
	// 	$(".plan-calendar__box.type-left .type-departure").prevUntil(".type-week3-end").addClass("type-week4");
	// })
	// $(window).on('load resize',function(){
	// 	var dayH = $('.plan-calendar__day').outerHeight();
	// 	var calendarH = Number(-dayH*6);
	// 	$('.js-alert').off('click').on('click',function(){
	// 		if ($('body').attr('data-mobile') == 'false'){
	// 			alert('오른쪽 달력을 클릭해주세요');
	// 		}else{
	// 			alert('아래쪽 달력을 클릭해주세요');
	// 		}
	// 	});
	// 	if(month == '7'){
	// 		$('.plan-calendar__box.type-right .plan-calendar__list').css('top',calendarH);
	// 		$('.plan-calendar__box.type-left .plan-calendar__list').css('top','0');
	// 	}else if(month == '8'){
	// 		$('.plan-calendar__box.type-right .plan-calendar__list').css('top',(calendarH*2));
	// 		$('.plan-calendar__box.type-left .plan-calendar__list').css('top',calendarH);
	// 	}else if(month == '9'){
	// 		$('.plan-calendar__box.type-right .plan-calendar__list').css('top',calendarH*3);
	// 		$('.plan-calendar__box.type-left .plan-calendar__list').css('top',calendarH*2);
	// 	}else if(month == '10'){
	// 		$('.plan-calendar__box.type-right .plan-calendar__list').css('top',calendarH*4);
	// 		$('.plan-calendar__box.type-left .plan-calendar__list').css('top',calendarH*3);
	// 	}
	// 	// $('.plan-calendar__box.type-right .plan-calendar__list').css('top',calendarH);
	// 	$('.js-calendar-next').off('click').on('click',function(e){
	// 		e.preventDefault();
	// 		var rightMonthTop = Number($(".plan-calendar__box.type-right .plan-calendar__list").css('top').replace(/[^-\d\.]/g, ''));
	// 		var leftMonthTop = Number($(".plan-calendar__box.type-left .plan-calendar__list").css('top').replace(/[^-\d\.]/g, ''));
	// 		if( 12 > month){
	// 			month++
	// 			$('.plan-calendar__box.type-right .plan-calendar__list').css('top',rightMonthTop + calendarH);
	// 			$('.plan-calendar__box.type-left .plan-calendar__list').css('top',leftMonthTop + calendarH);
	// 			$('.plan-calendar__box.type-left .plan-calendar__month').text("2019년 "+(month-1)+"월")
	// 			$('.plan-calendar__box.type-right .plan-calendar__month').text("2019년 "+month+"월")
	// 		}
	// 	});
	// 	$('.js-calendar-prev').off('click').on('click',function(e){
	// 		e.preventDefault();
	// 		var rightMonthTop = Number($(".plan-calendar__box.type-right .plan-calendar__list").css('top').replace(/[^-\d\.]/g, ''));
	// 		var leftMonthTop = Number($(".plan-calendar__box.type-left .plan-calendar__list").css('top').replace(/[^-\d\.]/g, ''));
	// 		if( 10 < month){
	// 			month--
	// 			$('.plan-calendar__box.type-right .plan-calendar__list').css('top',rightMonthTop - calendarH);
	// 			$('.plan-calendar__box.type-left .plan-calendar__list').css('top',leftMonthTop - calendarH);
	// 			$('.plan-calendar__box.type-left .plan-calendar__month').text("2019년 "+(month-1)+"월")
	// 			$('.plan-calendar__box.type-right .plan-calendar__month').text("2019년 "+month+"월")
	// 		}
	// 	});
	// });

});
