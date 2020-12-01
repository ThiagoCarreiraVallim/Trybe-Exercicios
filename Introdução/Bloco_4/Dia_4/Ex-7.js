function finalWord (word, ending) {
  let final = word.substr(-ending.length);
  if (final === ending){
    return true;
  } else {
    return false;
  }
}

console.log(finalWord('fernando', 'nand'));
