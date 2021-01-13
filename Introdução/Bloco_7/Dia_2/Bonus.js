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

const lessons = () => Object.assign({}, { lesson1, lesson2, lesson3 });
const allLessons = lessons();
console.log(lessons());

const mathStudents = obj => obj.lesson1.numeroEstudantes;
//console.log(mathStudents(allLessons));

const teachers = (obj, teacher) => {
  const lessons = Object.values(obj);
  const objeto = {professor: teacher};
  const mat = [];
  let alunos = 0;
  lessons.forEach(obj => {
    if (obj.professor === teacher) {
      mat.push(obj.materia);
      alunos += obj.numeroEstudantes;
    }
  });
  objeto.aulas = mat;
  objeto.estudantes = alunos;
  return objeto;
}

console.log(teachers(allLessons, 'Maria Clara'));
