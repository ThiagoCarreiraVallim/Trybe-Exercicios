let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0, result = 0;

for (let index = 0; index < numbers.length; index += 1){
  result += numbers[index];
}

media = result / numbers.length;

if (media > 20){
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual que 20');
}
