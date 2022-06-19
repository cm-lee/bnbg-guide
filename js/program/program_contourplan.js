/**
* Youtube API 로드
*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('program-iframe', {
        height: '360',
		width: '640',
		videoId: 'N3sfGJOlk_s',
        events: {
            'onReady': onPlayerReady,               // 플레이어 로드가 완료되고 API 호출을 받을 준비가 될 때마다 실행
            'onStateChange': onPlayerStateChange    // 플레이어의 상태가 변경될 때마다 실행
        }
    });
}
function onPlayerReady(event) {
    // 플레이어 자동실행 (주의: 모바일에서는 자동실행되지 않음)
    //            event.target.playVideo();
}
var playerState;
function onPlayerStateChange(event) {
    if (event.data === 0) {
        // 종료 후 작업을 여기에 코딩
        $(".program-video").show();
    }
}

function playYoutube() {
    // 플레이어 자동실행 (주의: 모바일에서는 자동실행되지 않음)
    player.playVideo();
}
function pauseYoutube() {
    player.pauseVideo();
}
function stopYoutube() {
    player.seekTo(0, true);     // 영상의 시간을 0초로 이동시킨다.
    player.stopVideo();
}
var played = false;
function collectPlayCount(data) {
    if (data == YT.PlayerState.PLAYING && played == false) {
        // todo statistics
        played = true;
        console.log('statistics');
    }
}

$('.program-video__btn').on('click',function(e){
    e.preventDefault();
    playYoutube();
    $('.program-video').hide();
})
