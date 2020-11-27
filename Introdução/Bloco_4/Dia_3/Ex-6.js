let number = 8, cont = 0;

for (let index = 0; index <= number; index += 1){
  if (number % index == 0) {
    cont += 1;
  }
}
if (cont > 2) {
  console.log('O numero '+ number + ' não é primo');
} else {
  console.log('O numero '+ number + ' é primo');
}
