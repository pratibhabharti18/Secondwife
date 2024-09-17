const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.navlist');
const navElements = document.querySelector('.navigation_menu');
const order = document.querySelector('.order');
const home = document.querySelector('.home ');
const menu = document.querySelector('.menu ');
const book = document.querySelector('.book ');



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    list.classList.toggle('active');
    navElements.classList.toggle('active');
    order.classList.remove('active');
});

order.addEventListener('click', () => {
    order.classList.add('active');
    setTimeout(() => {
        hamburger.classList.remove('active');
        list.classList.remove('active');
        navElements.classList.remove('active');
    }, 700);
});
const closingfunc = () => {
    setTimeout(() => {
        hamburger.classList.remove('active');
        list.classList.remove('active');
        navElements.classList.remove('active');
    }, 500);
}


home.addEventListener('click', closingfunc);
menu.addEventListener('click', closingfunc);
book.addEventListener('click', closingfunc);

// AOS
AOS.init({
    offset: 100,
    delay: 10,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})