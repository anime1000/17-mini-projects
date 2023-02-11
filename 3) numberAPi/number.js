const form = document.querySelector('.form');
const btn = document.querySelector('.btn');
const textBelow = document.querySelector('.fact');
const out = document.querySelector('.out');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (e.target){
        const number = out.value;
        const loadtext = 'Wait a little bit⌛';
        textBelow.innerHTML = loadtext;

        const url = 'https://cors-anywhere.herokuapp.com/http://numbersapi.com/';

        fetch(url + number).then(response => response.text())
            .then(text => out.innerHTML = text);
    }
});