let numberChoice = 7;
let meio = Math.ceil(numberChoice / 2);
let cont = meio;
let buraco = meio;
if (numberChoice % 2 == 1){
  for (let linha = 0; linha < cont; linha += 1){
    let linhas = '';
    if (linha < (cont - 1)) {
      for (let coluna = 1; coluna <= numberChoice; coluna += 1){
        if (meio > coluna){
          linhas += ' ';
        }else if ((coluna > meio) && (coluna < buraco)) {
          linhas += ' ';
        }else if(((meio - 1) + coluna) <= numberChoice ) {
          linhas += '*';
        }
      }
    } else {
      for (let index = 0; index < numberChoice; index += 1){
        linhas += '*';
      }
    }
    buraco += 1;
    meio -= 1;
    console.log(linhas);
  }
}else {
  console.log('O numero precisa ser Impar');
}
