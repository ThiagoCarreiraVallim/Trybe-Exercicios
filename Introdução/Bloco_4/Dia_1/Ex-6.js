let nomeXadrez = 'PEAO';

switch (nomeXadrez.toLowerCase()) {
  case 'cavalo':
    console.log('Movimenta em L');
    break;
  case 'peao':
    console.log('Anda uma casa a frente ou na diagonal para comer');
    break;
  case 'torre':
    console.log('Anda sem limites para os quatro lados');
    break;
}
