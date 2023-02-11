const boxs = document.querySelectorAll('.box').forEach((item)=>{
    item.addEventListener('mouseover', itemMouseOver);
    item.addEventListener('mouseout', itemMouseOut);
});

function itemMouseOver(e){
    let text = `name: ${e.target.dataset.type}`;
    let size = e.currentTarget.getBoundingClientRect();
    let tool = document.createElement('div');
    tool.className = 'tooltip';
    tool.innerHTML = text;
    tool.style.left = size.left + 'px';
    tool.style.top = (size.top - size.height) + 'px';
    document.body.appendChild(tool);
}

function itemMouseOut(e){
    document.querySelector('.tooltip').remove();
}