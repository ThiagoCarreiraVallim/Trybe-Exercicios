let numberChoice = 9;
let meio = Math.ceil(numberChoice / 2);
let cont = meio;
if (numberChoice % 2 == 1){
  for (let linha = 0; linha < cont; linha += 1){
    let linhas = '';
    for (let coluna = 1; coluna <= numberChoice; coluna += 1){
      if (meio > coluna){
        linhas += ' ';
      } else if(((meio - 1) + coluna) <= numberChoice ) {
        linhas += '*';
      }
    }
    meio -= 1;
    console.log(linhas);
  }
}else {
  console.log('O numero precisa ser Impar');
}
