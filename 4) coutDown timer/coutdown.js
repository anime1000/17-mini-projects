const timeH = document.querySelector('.title');
let timeSec = 5;

displayTime(timeSec);

const coutDown = setInterval(()=>{
    timeSec--;
    displayTime(timeSec);
    if (timeSec <= 0){
        clearInterval(coutDown);
        timeH.innerHTML = `TIME OUT`
    }
}, 1000);


function displayTime(time){
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    timeH.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`;
}