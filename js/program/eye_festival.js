$(".js-scroll-motion").each(function(){
    var $this = $(this);
    var n = function() {

        if ($this.offset().top < $(window).scrollTop() + ($(window).height()/1.3) && $this.offset().top > $(window).scrollTop() - $this.height()) {
            $this.slick("slickGoTo", 1);
        }else{

        }
    };

    var b = function() {
        if ($this.offset().top < $(window).scrollTop() + ($(window).height()/1.3) && $this.offset().top > $(window).scrollTop() - $this.height()) {
            $this.slick("slickGoTo", 1);
        }else{

        }
    };

    // 윈도우 스크롤 이벤트로 함수 n 지속 실행
    $(window).on("scroll", n);
    // $this 위치값 계산
    $(window).on("load", b);
});


$(".js-eye-first").slick({
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    prevArrow: ".js-eye-first-prev",
    nextArrow: ".js-eye-first-next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                arrows: false,
                dotsClass: "cont-box1__dot slide-dot",
            }
        }
    ]
});

$(".js-eye-second").slick({
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    prevArrow: ".js-eye-second-prev",
    nextArrow: ".js-eye-second-next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                arrows: false,
                dotsClass: "cont-box1__dot slide-dot",
            }
        }
    ]
});

$(".js-correct-first").slick({
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    prevArrow: ".js-correct-first-prev",
    nextArrow: ".js-correct-first-next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                arrows: false,
                dotsClass: "cont-box1__dot slide-dot",
            }
        }
    ]
});

$(".js-correct-second").slick({
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    prevArrow: ".js-correct-second-prev",
    nextArrow: ".js-correct-second-next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                arrows: false,
                dotsClass: "cont-box1__dot slide-dot",
            }
        }
    ]
});

$(".js-harmony-first").slick({
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    prevArrow: ".js-harmony-first-prev",
    nextArrow: ".js-harmony-first-next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                arrows: false,
                dotsClass: "cont-box1__dot slide-dot",
            }
        }
    ]
});

$(".js-harmony-second").slick({
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    prevArrow: ".js-harmony-second-prev",
    nextArrow: ".js-harmony-second-next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                arrows: false,
                dotsClass: "cont-box1__dot slide-dot",
            }
        }
    ]
});
