const Starter = document.getElementById("js-icon2");
const MyLM = document.querySelector(".My-L h1 ");
const backgroundMusic = new Audio();
backgroundMusic.src = "./musics/background_music.mp3";
backgroundMusic.loop = true;

var Startaudio = function () {
    if (newMusic.paused) {
        backgroundMusic.play();
    }
}

document.body.addEventListener("click", Startaudio)

const newMusic = new Audio();
newMusic.src = "./musics/new_music.mp3";
newMusic.loop = true;

Starter.addEventListener("click", e => {
    e.stopPropagation();
    backgroundMusic.pause();
    Startaudio = 0;
    setTimeout(() => {
        newMusic.play();
    }, 500)
    setTimeout(() => {
        MyLM.classList.add("active");
    }, 4000)
});