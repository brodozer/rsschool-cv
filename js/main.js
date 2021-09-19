'use strict';

const menu = document.querySelector('.navbar-collapse');
const popup = document.querySelector('.modal');
const menuBtn = document.querySelector('.navbar-menu');
const card = document.querySelectorAll('.card a');
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

const overlay = () => {
    card.forEach(el => {
        el.addEventListener("mouseout", () => {
            el.closest('.card').classList.remove('hover');
        });
        el.addEventListener("mouseover", () => {
            el.closest('.card').classList.add('hover');
        })
    })
}

document.querySelector('.code').innerHTML = '<pre>' + html + '</pre>';

modal();
smoothScroll();
overlay();

// вывести в консоль оценку задания!!! 

const score = `
    Score: 168 / 190
    - вёрстка валидная (10)
    - вёрстка семантическая (20)
    - в коде страницы присутствуют семантические теги HTML5: figure, figcaption, footer, header, main, nav, h1, h2, h4 (18/20)
    - для оформления СV используются css-стили (10)
    - контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы (10)
    - вёрстка адаптивная (10)
    - есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным (10)
    - на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (10)
    - контакты для связи и перечень навыков оформлены в виде списка ul > li (10)
    - CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (10)
    - CV содержит пример вашего кода с подсветкой (10)
    - CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий (10)
    - CV выполнено на английском языке (10)
    - выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (10)
    - есть видеорезюме автора CV на английском языке (0/10)
    - дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (10)
`
console.log(score);


