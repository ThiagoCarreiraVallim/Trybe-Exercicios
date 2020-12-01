function detectaMaior (number) {
  number = number.sort(function (a, b){return b - a;})
  return number[0]
}
let numeros = [2, 3, 665, 7, 10, 100];
console.log(detectaMaior(numeros));
