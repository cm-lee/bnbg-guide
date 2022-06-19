$(".cont-box1__link").on('mouseenter',function(){
    $(this).parents(".cont-box1__item").addClass('is-active');
}).on('mouseleave',function(){
    $(this).parents(".cont-box1__item").removeClass('is-active');
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
