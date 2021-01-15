 const assert = require('assert')
const greetPeople = (people) => {
  let greeting = 'Hello ';
  const arr = people.map(person => `${greeting}${person}`);
  return arr;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

//Ex.2

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let cont = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      cont += 1
      results += cont;
    } else {
      results += characters[i]
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameter), result);

//Ex.3

const greaterThanTen = (array) => {
  let results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
assert.deepStrictEqual(greaterThanTen(parameter), result);


//Ex.4

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
