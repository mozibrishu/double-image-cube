let scene = document.getElementById('scene');
let cube = document.getElementById('cube');
let backSide = document.getElementById('backSide');
let imageBox = document.getElementById('imageBox');

let mute=1;
let play=1;

let check = 0;
let originalVideo = document.getElementById('myVideo');
let videoHtml = `<video src="resources/gp.mp4" muted="false" autoplay="autoplay" id="gp-video"
class="gp-video" onended="endOpearation()"></video>
<div class="video-controls">
    <button id="toggle" class="btn toggle"><i class="material-icons">play_arrow</i></button>
    <button id="sound" class="btn sound"><i class="material-icons">volume_off</i></button>
</div>`

function firstOp() {
    cube.classList.remove('cubepic-animation');


    setTimeout(() => {
        cube.classList.add('cubepic-animation');
    }, 100);

    setTimeout(() => {
        backSide.innerHTML = videoHtml;
        setTimeout(() => {
            playMute();
        }, 100);
        setTimeout(() => {
            cube.style.animationPlayState = 'paused';
            if (check) {
                imageBox.src = 'resources/image1.jpg';
                check = 0;
            } else {
                imageBox.src = 'resources/image2.jpg';
                check = 1;
            }
        }, 2500);
    }, 3000);

}

firstOp();
cube.addEventListener('animationend', () => {
    firstOp();
});

function endOpearation() {
    cube.style.animationPlayState = 'running';
    document.getElementById("toggle").disabled = true;
    setTimeout(() => {
        backSide.innerHTML = '';
    }, 3000);
}


function playMute() {
    var player = document.querySelector('#backSide');
    var video = player.querySelector('.gp-video');
    var toggle = player.querySelector('#toggle');
    var sound = player.querySelector('#sound');
    
    var playIcon = `<i class="material-icons">play_arrow</i>`;
    var pauseIcon = `<i class="material-icons">pause</i>`;
    var volumeUp = `<i class="material-icons">volume_up</i>`;
    var volumeOff = `<i class="material-icons">volume_off</i>`;
    var replayIcon = `<i class="material-icons">replay</i>`;
    if(!mute){
        video.muted = false;
        sound.innerHTML = volumeUp;
    }else{
        video.muted = true;
        sound.innerHTML = volumeOff;
    }
    console.log(video.paused);
    toggle.innerHTML = video.paused ? playIcon : pauseIcon; 
    function togglePlay(e) {
        e.stopPropagation();
        var playOrPause = video.paused ? 'play' : 'pause';
        video[playOrPause]();
    }
    
    function updatePlayPause(e) {
        e.stopPropagation();
        var playPauseIcon = this.paused ? playIcon : pauseIcon;    
        toggle.innerHTML = playPauseIcon;
    }
    
    function toggleSound(e) {
        e.stopPropagation();
        if(video.muted){
            video.muted = false;
        sound.innerHTML = volumeUp;
        mute=0;
        }else{
            video.muted = true;
        sound.innerHTML = volumeOff;
        mute=1;
        }
        // var soundIcon = video.muted ? volumeUp : volumeOff;
        // sound.innerHTML = soundIcon;
    
        // if (video.muted) video.muted = false;
        // else video.muted = true;
    }
    
    video.addEventListener('play', updatePlayPause);
    video.addEventListener('pause', updatePlayPause);
    toggle.addEventListener('click', togglePlay);
    sound.addEventListener('click', toggleSound);
        
}