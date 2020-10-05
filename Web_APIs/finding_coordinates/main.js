const veritical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const coordinates = document.querySelector(".coordinates");
const targetRect = target.getBoundingClientRect();
const targetHalfSize = targetRect.width / 2;

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  veritical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x - targetHalfSize}px, ${
    y - targetHalfSize
  }px)`;
  coordinates.style.transform = `translate(${x}px, ${y}px)`;
  coordinates.innerHTML = `${x}px, ${y}px`;
});
