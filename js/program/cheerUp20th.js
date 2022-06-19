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
