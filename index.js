let scene = document.getElementById('scene');
let cube = document.getElementById('cube');
let backSide = document.getElementById('backSide');
let imageBox = document.getElementById('imageBox');


let check = 0;
let originalVideo = document.getElementById('myVideo');
let videoHtml = `<video src="resources/gp.mp4" muted="false" autoplay="autoplay" controls controlslist="nofullscreen " id="gp-video"
class="gp-video" onended="endOpearation()"></video>`

function firstOp() {
    cube.classList.remove('cubepic-animation');


    setTimeout(() => {
        cube.classList.add('cubepic-animation');
    }, 100);

    setTimeout(() => {
        backSide.innerHTML = videoHtml;
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
    setTimeout(() => {
        backSide.innerHTML = '';
    }, 3000);
}