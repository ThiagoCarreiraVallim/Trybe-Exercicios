const button = document.querySelector('#clique');
const p = document.querySelector('.count');
button.addEventListener('click', () => p.innerText = Number(p.innerText) + 1)