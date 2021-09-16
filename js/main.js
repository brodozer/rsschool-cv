'use strict';

const menu = document.querySelector('.navbar-collapse');
const popup = document.querySelector('.modal');
const menuBtn = document.querySelector('.navbar-menu');
const code = `
function solution(number) {
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += 1;
        }
    }
    return sum;
}   
`;
const html = hljs.highlight(code, {language: 'js'}).value;


const smoothScroll = () => {
    const link = document.querySelectorAll('.nav-link');
    console.log('link ', link) 
    link.forEach((l) => {
        l.addEventListener('click', (e) => {
            const id = l.getAttribute('href');
            if (id.indexOf('#') !== -1) {
                e.preventDefault();
                document.getElementById(id.substring(1)).scrollIntoView({ behavior: 'smooth' });
            }
            if(popup.classList.contains('modal-toggle')) {
                console.log('close modal');
                popup.classList.remove('modal-toggle');
            }
        });
    });
};

const modal = () => {
   
    popup.querySelector('.navbar').appendChild(menu.cloneNode(true));

    const popupOpen = () => {
        popup.classList.add('modal-toggle');
    };

    const popupClose = () => {
        popup.classList.remove('modal-toggle');
    };

    menuBtn.addEventListener('click', () => {
        popupOpen();
    });

    popup.addEventListener('click', (e) => {
        const target = e.target;
        console.log('target ', target);
        if (target.classList.contains('modal') || 
            target.closest('.navbar-menu-close')) {
            popupClose();
        }
    });
};

document.querySelector('.code').innerHTML = '<pre>' + html + '</pre>';

modal();
smoothScroll();
