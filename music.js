
let play = document.getElementById("play");
let pause = document.getElementById("pause");


let audio = new Audio("./jatt.mp3");
function playMusic(){
    audio.play();
}

function pauseMusic(){
    audio.pause();
}

play.addEventListener("click", playMusic);
pause.addEventListener("click", pauseMusic);