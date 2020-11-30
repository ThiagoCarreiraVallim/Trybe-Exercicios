function palindromo (str) {
  let palin = str.split('').reverse('').join('');
  if (palin == str ){
    return true;
  } else {
    return false;
  }
}

console.log(palindromo('arara'));
