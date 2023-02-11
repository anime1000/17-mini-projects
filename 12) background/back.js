const btn = document.querySelector('.btn');
const text = document.querySelector('.result');
const backG = document.querySelector('section');

btn.addEventListener('click', (e)=>{
    let begin = '1234567890ABCDEF';
    let color = '';

    for (let i = 0; i < 6; i++){
        color += begin[Math.floor(Math.random() * begin.length)];
    }
    text.innerHTML = `#${color}`
    return backG.style.background = `#${color}`;
});
