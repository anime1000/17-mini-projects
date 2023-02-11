const clock = document.querySelector('.h1');
const btns = document.querySelectorAll('button');
let format;



const chasi = document.querySelector('.clock');

setInterval(generateTime, 1000);

function generateTime(){
    format = chasi.getAttribute('data-format');
    const date = new Date();
    const min = date.getMinutes();
    let hour = date.getHours();
    const sec = date.getSeconds();
    
    if (format === "12"){
        hour = (hour > 12) ? hour % 12 : hour;
    }

    clock.innerHTML = `${hour} : ${min} : ${sec} AM`;
}


btns.forEach((item)=>{
    item.addEventListener('click', ()=>{
        format = item.getAttribute('data-format');
        chasi.setAttribute('data-format', format);
        generateTime();
    });
})