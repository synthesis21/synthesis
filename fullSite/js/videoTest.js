const playBtn = document.getElementById('playVid'),
    gif = document.getElementById('gif'),
    video = document.getElementById('video');

playBtn.addEventListener('click', ()=>{
    //gif.style.visibility = 'hidden';
    video.style.visibility = 'visible';
    video.play();
})