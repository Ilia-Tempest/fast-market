$(document).ready(function() { 

let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});


let bg1 = document.querySelector('.mouse-parallax-bg1');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg1.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});

let bg2 = document.querySelector('.mouse-parallax-bg2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg2.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});

let bg3 = document.querySelector('.mouse-parallax-bg3');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg3.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});

let bg4 = document.querySelector('.mouse-parallax-bg4');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg4.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});

let bg5 = document.querySelector('.mouse-parallax-bg5');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg5.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});
});