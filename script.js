const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-container')) {
        nav.classList.remove('active');
    }
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

const likeBtn = document.querySelector('.like-btn');
const deslikeBtn = document.querySelector('.dislike-btn');

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active-like');
    deslikeBtn.classList.remove('active-deslike');
});

deslikeBtn.addEventListener('click', () => {
    deslikeBtn.classList.toggle('active-deslike');
    likeBtn.classList.remove('active-like');
});