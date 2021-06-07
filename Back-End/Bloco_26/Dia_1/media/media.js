const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distacia em metros ? ');
const tempo = readline.questionInt('Qual o tempo em segundos ? ');

const media = distancia / tempo;

console.log(`A media foi ${ media * 3.6 } km/h`);
