const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso ? ex: 50  ');
const altura = readline.questionFloat('Qual a sua altura ? ex: 1.67  ');

const imc = peso / (altura ^ 2)

let situacao = '';

switch (true) {
  case imc < 18.5:
    situacao = 'Abaixo do peso (magreza)';
    break;
  case (imc >= 18.5 && imc < 24.9):
    situacao = 'Peso normal';
    break;
  case (imc >= 25 && imc < 29.9):
    situacao = 'Acima do peso (sobrepeso)';
    break;
  case (imc >= 30 && imc < 34.9):
    situacao = 'Obesidade grau I';
    break;
  case (imc >= 35 && imc < 39.9):
    situacao = 'Obesidade grau II';
    break;  
  default:
    situacao = 'Obesidade graus III e IV';
    break;
}

console.log(`Seu IMC é ${imc}`);
console.log(`Seu situação é: ${situacao}`);
