const readmorebtn = document.querySelector('.read');
const text = document.querySelector('.text');


readmorebtn.addEventListener('click', (e)=>{
    text.classList.toggle('show__more');
    if (text.classList.contains('show__more')){
        readmorebtn.innerHTML = 'read less';
    } else {
        readmorebtn.innerHTML = 'read more';
    }
});