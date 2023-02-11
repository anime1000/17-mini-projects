const items = document.querySelectorAll('.item');
items.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        items.forEach((item)=> item.classList.remove('show'));
        item.classList.add('show');
    });
});