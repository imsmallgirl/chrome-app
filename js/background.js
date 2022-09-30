const bgWrap = document.querySelector('.wrap');

const bgImgs = [
    '../imgs/0.jpg',
    '../imgs/1.jpg',
    '../imgs/2.jpg',
    '../imgs/3.jpg',
    '../imgs/4.jpg',
    '../imgs/5.jpg',
    '../imgs/6.jpg',
];

const randomImg = bgImgs[Math.floor(Math.random() * bgImgs.length)];

const bgImg = 'url('+ randomImg +')';

bgWrap.style.backgroundImage = bgImg;