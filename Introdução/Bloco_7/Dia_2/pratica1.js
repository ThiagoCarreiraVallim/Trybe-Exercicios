const obj = (objeto, chave, valor) => {
  objeto[chave] = valor;
  return objeto;
}
console.log(obj({}, 'nome', 'Thiago'));