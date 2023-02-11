const cur = document.querySelector('.cursor');

window.addEventListener('mousemove', (e)=>{
    cur.style.left = `${e.clientX}px`;
    cur.style.top = `${e.clientY}px`
});
