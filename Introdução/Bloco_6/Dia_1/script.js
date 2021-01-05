const select = document.querySelector('#state');
const cities = document.querySelector('#city');
const dataFinal = document.querySelector('#inputDataF');
const atual = document.querySelector('#atual');
const button = document.querySelector('#buttonSubmit');
const form = document.querySelector('#form');
const results = document.querySelectorAll('.result');
const respostas = document.querySelector('#respostas');
const del = document.querySelector('#del')
let numberState = 0;

function organizeArray(array) {
  let ordered = []
  array.map(function(order) {
    ordered.push([order.nome, order.id]);
    ordered.sort();
  })
  return ordered;
}

function createStates() {
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  .then(res => res.json())
  .then(states => {
    let ordered = organizeArray(states);
    ordered.map((state) => {
      const option = document.createElement('option');
      option.value = state[1];
      option.innerText = state[0];
      select.appendChild(option);
    })
  })
}

function createCities() {
  const citiesNodes = cities.childNodes;
  [...citiesNodes].map(node => node.remove());
  let uf = select.value;
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
  .then(res => res.json())
  .then(chooseCity => {
    let ordered = organizeArray(chooseCity);
    ordered.map(function(city) {
      const option = document.createElement('option');
      option.value = city[1];
      option.innerText = city[0];
      cities.appendChild(option);
    })
  })
}

function finish(event) {
  event.preventDefault();
  for (let index = 0; index < (results.length - 2); index += 1) {
    const p = document.createElement('p');
    p.innerText = `${results[index].alt}: ${results[index].value}`;
    respostas.appendChild(p)
  }
}

function deleteAll() {
  form.reset();
}

function createEvents() {
  select.addEventListener('change', createCities)
  button.addEventListener('click', finish)
  del.addEventListener('click', deleteAll)
}

function checkAtual() {
  atual.addEventListener('change', function() {
    if (atual.checked) {
      dataFinal.disabled = true;
    } else {
      dataFinal.disabled = false;
    }
  })
}

checkAtual();
createEvents();
createStates();
