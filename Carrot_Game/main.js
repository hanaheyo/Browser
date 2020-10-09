const ground = document.querySelector(".ground");
const groundWidth = ground.getBoundingClientRect().width;
const groundHeight = ground.getBoundingClientRect().height;
const items = document.querySelectorAll(".item");
const button = document.querySelector(".button");
const lost = document.querySelector(".lost");
const won = document.querySelector(".won");


const bgm = new Audio("sound/bg.mp3");
const lostSound = new Audio("sound/alert.mp3");
const bug = new Audio("sound/bug_pull.mp3");
const carrot = new Audio("sound/carrot_pull.mp3");
const wonSound = new Audio("sound/game_win.mp3");
let isPlaying = false;

button.addEventListener("click", () => {
    gameStart();
    setTimeout(() => {
        gameOver();
    }, 10000);
});

for (i = 0; i < items.length; i++) {
    let thisImg = items[i]

    randomX = getRandomNumber(0, groundWidth - 80);
    randomY = getRandomNumber(0, groundHeight - 120);

    thisImg.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

for (let item of items) {
    item.addEventListener("click", () => {
        item.style.display = "none";
    })
}

function gameStart() {
    changeIcon();
    togglePlay(bgm);
    timer();
    ground.style.opacity = "1";
    button.style.opacity = "1"
    lost.style.display = "none";
    won.style.display = "none";
}

function gameOver() {
    togglePlay(bgm);
    togglePlay(lostSound);
    button.style.opacity = "0";
    lost.style.display = "block";
}

function wonGame() {
    togglePlay(bgm);
    togglePlay(wonSound);
    button.style.opacity = "0"
    won.style.display = "block";
}

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

