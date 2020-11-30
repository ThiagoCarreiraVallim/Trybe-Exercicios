// 1
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
//console.log('Bem-vinda, ' + info.personagem);

//2

info.recorrente = 'Sim';
//console.log(info);

//3

for (let index in info){
  //console.log(index);
}

//4
for (let index in info) {
  //console.log(info[index]);
}

//5

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

for (let index in info){
  if (info[index] === info2[index]){
    console.log('Ambos concorrentes');
  } else {
    console.log(info[index] + ' e ' + info2[index]);
  }
}