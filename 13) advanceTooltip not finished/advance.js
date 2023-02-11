const tooltips =document.querySelectorAll('.all__tool');
const sect = document.querySelector('section');
const container = document.querySelector('.container');

function contentPosition(){
    tooltips.forEach((item)=>{
        const pin = item.querySelector('.pin');
        const tooltipContent = item.querySelector('.tooltip__content');
        const arrow = item.querySelector('.arrow');
        tooltipContent.style.left = pin.offsetLeft + 'px';
        tooltipContent.style.top = pin.offsetTop + 'px';
        
    });
}

contentPosition();