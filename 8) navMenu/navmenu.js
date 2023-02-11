const btn = document.querySelector('.icon');
const nav = document.querySelector('.menu');


btn.addEventListener('click', ()=>{
    btn.classList.toggle('close');
    nav.classList.toggle('show');
});