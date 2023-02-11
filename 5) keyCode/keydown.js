const pressedKey = document.querySelector('.press');
const result = document.querySelector('.result');
const copy = document.querySelector('.copy');


window.addEventListener('keydown', (e)=>{
    pressedKey.innerHTML = e.key;
    result.innerHTML = e.code;
    p = `${e.code}`;

    copy.addEventListener('click', (e)=>{
        copy.innerHTML = 'copied';
        setTimeout(()=>{
            copy.innerHTML = 'click to copy';
        }, 2000);
        getCopy(p);
    });
});

function getCopy(t){
    return navigator.clipboard.writeText(t);
}