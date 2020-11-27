let numberChoice = 7;
let espaco = numberChoice;

for (let linha = 0; linha < numberChoice; linha += 1){
  let linha = '';
  for (let coluna = 1; coluna <= numberChoice; coluna += 1){
    if (espaco > coluna){
      linha += ' ';
    } else {
      linha += '*'
    }
  }
  espaco -= 1;
  console.log(linha);
}