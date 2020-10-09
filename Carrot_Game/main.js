// place imgs randomly
let imgs = document.querySelectorAll("img");

let groundWidth = document.querySelector(".ground").getBoundingClientRect().width;
let groundHeight = document.querySelector(".ground").getBoundingClientRect().height;

for ( i = 0; i < imgs.length; i ++ ) {
    let thisImg = imgs[i]

    randomX = getRandomNumber(0, groundWidth - 80);
    randomY = getRandomNumber(0, groundHeight - 120);

    thisImg.style.transform = `translate(${randomX}px, ${randomY}px)`;
    console.log(`randomX: ${randomX}, randomY: ${randomY}`);
}

function getRandomNumber (min, max) {
    return Math.random() * (max - min) + min;
}

// set timer
let countDownDate = new Date().getTime();
let 1s = setInterval(() => {
    
}, interval);