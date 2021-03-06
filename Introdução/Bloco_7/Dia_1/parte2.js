// Ex.1

const fatorial = n => n <= 1 ? 1 : n * fatorial(n - 1);
console.log(fatorial(5));

// Ex.2

const longestWord = phrase => {
  let big = '';
  phrase.split(' ').forEach(word => word.length > big.length ? big = word : big = big);
  return big;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

// Ex.4
let str = 'Trybers x aqui!'
const switchX = word => str.replace('x', word);
let arr = ['HTML', 'CSS', 'JS', 'GIT', 'Soft Skills'];
let texto = switchX('benabe');
console.log(arr.forEach(palavra => texto += palavra));
console.log(texto);
