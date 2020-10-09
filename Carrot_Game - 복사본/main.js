const imgs = document.querySelectorAll("img");
const groundWidth = document.querySelector(".ground").getBoundingClientRect().width;
const groundHeight = document.querySelector(".ground").getBoundingClientRect().height;
const button = document.querySelector(".button");
const won = document.querySelector(".won");
const lost = document.querySelector(".lost");


const bgm = new Audio("sound/bg.mp3");
const alert = new Audio("sound/alert.mp3")
const bug = new Audio("sound/bug_pull.mp3")
const carrot = new Audio("sound/carrot_pull.mp3")
const win = new Audio("sound/game_win.mp3")
let isPlaying = false;

for (i = 0; i < imgs.length; i++) {
    let thisImg = imgs[i]

    randomX = getRandomNumber(0, groundWidth - 80);
    randomY = getRandomNumber(0, groundHeight - 120);

    thisImg.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

button.addEventListener("click", () => {
    changeIcon();
    togglePlay(bgm);
    timer();
    setTimeout(() => {
        changeIcon();
        togglePlay(bgm);
        lost.style.display = "block"
    }, 10000);
});

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


function changeIcon() {
    let icon = document.querySelector("i");
    if (icon.className === "fas fa-play") {
        icon.className = "fas fa-square"
    } else {
        icon.className = "fas fa-play"
    }
}

function togglePlay(audioElement) {
    isPlaying ? audioElement.pause() : audioElement.play();
    isPlaying = !isPlaying;
}

function timer() {
    let seconds = 10;
    document.querySelector(".count").textContent = `00:${seconds}`;
    let countdown = setInterval(() => {
        seconds--;
        document.querySelector(".count").textContent = `00:${seconds}`;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);
}