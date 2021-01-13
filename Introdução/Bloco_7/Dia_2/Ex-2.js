const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const changeObj = (objeto, chave, valor) => {
  objeto[chave] = valor;
  return objeto;
}

const countKeys = obj => Object.keys(obj);

const lengthObj = obj => Object.keys(obj).length;

const valuesObj = obj => Object.values(obj);

const lessons = function () {
  const arrObj2 = [lesson1, lesson2, lesson3];
  const arrObj = ['lesson1', 'lesson2', 'lesson3'];
  const allLessons = {};
  arrObj.forEach((value, index) => allLessons[value] = Object.assign({}, arrObj2[index]));
  return allLessons
}

console.log(changeObj(lesson2, 'turno', 'manhã'));
console.log(countKeys(lesson2));
console.log(lengthObj(lesson1));
console.log(valuesObj(lesson3));
console.log(lessons());
