const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const hour = document.querySelector('.hour');


setInterval(()=>{
    const date = new Date();
    const secEl =  date.getSeconds() / 60 * 360 - 90;
    const minEl =  date.getMinutes() / 60 * 360 - 90;
    const hourEl = date.getHours() / 12 * 360 - 90;
    sec.style.transform = `rotate(${secEl}deg)`;
    min.style.transform = `rotate(${minEl}deg)`;
    hour.style.transform = `rotate(${hourEl}deg)`;
}, 1000);




