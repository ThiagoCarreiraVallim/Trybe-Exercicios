
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, value) => {
    value.split('').forEach(letter => letter.toLowerCase() === 'a'? acc += 1: acc);
    return acc;
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);