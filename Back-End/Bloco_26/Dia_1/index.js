const readline = require('readline-sync');

const script = readline.questionInt('Digite 1 se quer calcular o IMC e 2 se que calcular a media: ');

if(script === 1) {
  console.log(require('./imc/imc'));
} else {
  console.log(require('./media/media'));
};
