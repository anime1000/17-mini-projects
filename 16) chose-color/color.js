const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.code.toLowerCase() === 'space'){
        setRandomColor();
    }   
});

document.addEventListener('click', (event) =>{
    const type = event.target.dataset.type;
    if (type === 'lock'){
        const node = event.target.tagName.toLowerCase() === 'i' ? event.target : event.target.children[0];
        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');
    } else if (type === 'copy'){
        getCopy(event.target.textContent);
    }
});

function getRandomColor(){

    const hex = '1234567890ABCDEF';
    let color = '';
    for (let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * hex.length)];
    }
    return `#${color}`;
}

function setRandomColor(){
    let colors = [];
    cols.forEach((items)=>{
        const isLocked = items.querySelector('i').classList.contains('fa-lock');
        const text = items.querySelector('h2');
        const btns = items.querySelector('button');

        if (isLocked){
            colors.push(text.textContent);
            return;
        }
        let color = getRandomColor();
        colors.push(color);
        text.textContent = color;
        items.style.background = color;
        setTextColor(btns, color);
        setTextColor(text, color);
        getCopy(colors);
    });

}

function getCopy(t){
    return navigator.clipboard.writeText(t);
}

function updateLocation(colors = []){
    document.location.hash = colors.toString();
}

function setTextColor(text, color){
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
}

setRandomColor();