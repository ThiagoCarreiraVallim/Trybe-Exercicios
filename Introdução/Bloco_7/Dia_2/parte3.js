const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const obj = objeto => {
  const valores = Object.values(objeto);
  Object.keys(objeto).forEach((key, index) => console.log(`${key} ${valores[index]}`));
}
obj(student);
