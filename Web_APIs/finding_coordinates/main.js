"use strict";
const veritical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const coordinates = document.querySelector('.coordinates');


document.addEventListener('mousemove', e => {
    const left = e.clientX;
    const top = e.clientY;
    veritical.style.left = left + 'px';
    horizontal.style.top = top + 'px';
    target.style.left = left + 'px';
    target.style.top = top + 'px';
    coordinates.style.left = left + 'px';
    coordinates.style.top = top + 'px';
    coordinates.innerHTML = `${left}px, ${top}px`;
})