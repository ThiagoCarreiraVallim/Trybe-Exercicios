const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') throw new Error('Parâmetro tem que ser numero');
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(12), 'fizz');
assert.strictEqual(myFizzBuzz(5), 'buzz');
assert.strictEqual(myFizzBuzz(4), 4);
assert.throws(() => {myFizzBuzz('f')}, /^Error: Parâmetro tem que ser numero$/);
