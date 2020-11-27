let numbers = [5, 8, 4, 19, 70, 8, 100, 2, 35, 27];
let impares = null;

for (let index = 0; index < numbers.length; index += 1){
  if (numbers[index] % 2 == 1){
    impares += 1;
  }
}
if (impares > 0) {
  console.log(impares);
} else {
  console.log('Nenhum valor impar encontrado');
}
