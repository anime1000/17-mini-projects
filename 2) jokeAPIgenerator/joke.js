const btn = document.querySelector('.get');
const text = document.querySelector('.joke');

let url = 'https://icanhazdadjoke.com/';

btn.addEventListener('click', getajoke);


async function getajoke(e){
    const jokeDate = await fetch(url, {
        headers: {
            'accept': 'application/json'
        }
    });
    const jokeObj = await jokeDate.json();
    text.innerHTML = `${jokeObj.joke}`;
}