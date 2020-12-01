function detectaMenor (number){
  number = number.sort(function(a, b){return a -b});
  return number[0]; 
}

let numbers = [2, 3, 6, 7, 10, 10];
console.log(detectaMenor(numbers));
