let numberChoice = 7;
let espaco = numberChoice;

for (let contador = 0; contador < numberChoice; contador += 1){
  let linhas = '';
  for (let coluna = 1; coluna <= numberChoice; coluna += 1){
    if (espaco > coluna){
      linhas += ' ';
    } else {
      linhas += '*'
    }
  }
  espaco -= 1;
  console.log(linhas);
}