const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const h3 = document.createElement('h3');
    h3.innerText = data.joke;
    document.body.appendChild(h3);
  });
};

window.onload = () => fetchJoke();