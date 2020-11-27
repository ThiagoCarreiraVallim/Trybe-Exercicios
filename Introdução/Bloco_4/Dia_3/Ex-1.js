let numberChoice = 10;

for (let linhas = 0; linhas < numberChoice; linhas += 1){
  let show = '';
  for (let coluna = 0; coluna < numberChoice; coluna += 1){
    show += '*';
  }
  console.log(show);
}
