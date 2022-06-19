$(".js-double").slick({
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    prevArrow: ".js-double-prev",
    nextArrow: ".js-double-next",
    dots: true,
    dotsClass: "cont-box2__dot slide-dot",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        }
    ]
});

$('.cont-box3__link').on('click',function(e){
    e.preventDefault();

    var tabClass = $(this).attr('href');
    $('.cont-box3__item, .cont-box3__content').removeClass('is-active');
    $(this).parents('.cont-box3__item').addClass('is-active');
    $("."+tabClass).addClass('is-active');
});
