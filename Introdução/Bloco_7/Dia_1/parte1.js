const scope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    elseScope = `${elseScope} ótimo, fui utilizada no escopo !`;
    console.log(elseScope);
  }
}
scope(false);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const organize = oddsAndEvens =>  oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente: ${organize(oddsAndEvens)}`);
