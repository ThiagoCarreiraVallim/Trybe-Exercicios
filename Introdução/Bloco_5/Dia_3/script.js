function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

// Escreva seu código abaixo.
function holidays(day) {
  let holiday = [24, 25, 31];
  let friday = [4, 11, 18, 25];
  let classe = 'day';
  for (let index = 0; index < 5; index += 1) {
    switch (true) {
      case (day === holiday[index]):
        classe += ' holiday';
        break;
      case (day === friday[index]):
        classe += ' friday';
    }
  }
  return classe
}

function daysMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  let weekDays = document.querySelector('#days');
  for (let index of dezDaysList) {
    let days = document.createElement('li');
    days.innerText = index
    days.className = holidays(index);
    weekDays.appendChild(days);
  }
}

function createButtonHoliday(str) {
  let buttonCreate = document.createElement('button');
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonCreate.id = 'btn-holiday';
  buttonCreate.innerText = str;
  buttonsContainer.appendChild(buttonCreate);
}

function onClickHoliday() {
  let holidayButton = document.querySelectorAll('.holiday');
  if (holidayButton[0].style.backgroundColor === 'green') {
    for (let index = 0; index < holidayButton.length; index += 1) {
      holidayButton[index].style.backgroundColor = 'rgb(238,238,238)';
      holidayButton[index].style.color = '#777';
    }
  } else{
    for (let index = 0; index < holidayButton.length; index += 1) {
      holidayButton[index].style.backgroundColor = 'green';
      holidayButton[index].style.color = 'white';
    }
  }
}

function changeColor () {
  let button = document.querySelector('#btn-holiday');
  button.addEventListener('click', onClickHoliday);

}

function createButtonFriday(str) {
  let buttonCreateFriday = document.createElement('button');
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonCreateFriday.id = 'btn-friday';
  buttonCreateFriday.innerText = str;
  buttonsContainer.appendChild(buttonCreateFriday);
}

function onClickFriday() {
  let fridayButton = document.querySelectorAll('.friday')
  let backDays = [4, 11, 18, 25];
  for (index = 0; index < fridayButton.length; index += 1) {
    if (fridayButton[index].innerText == 'Sextou!') {
      fridayButton[index].innerText = backDays[index];
    }else {
      backDays.push(fridayButton[index]);
      fridayButton[index].innerText = 'Sextou!'

    }
  }
}

function changeFriday() {
  let buttonFriday = document.querySelector('#btn-friday');
  buttonFriday.addEventListener('click', onClickFriday);
}

function mouseOverZoomIn(event) {
  event.target.style.transform = 'scale(2)'
  event.target.style.background = 'none';
  event.target.style.transition = '0.5s'
  event.target.style.cursor = 'pointer'
}

function mouseOverZoomOut(event) {
  event.target.style.transform = 'scale(1)';
  event.target.style.transition = '0.4s'
  event.target.style.cursor = 'pointer'
  event.target.style.opacity = '1'
}

function mouseOutHoliday(event) {
  event.target.style.backgroundColor = 'green';
}

function zoomList() {
  let listDay = document.querySelectorAll('.day');
  let listHoliday = document.querySelectorAll('.holiday');
  for (let index = 0; index < listDay.length; index += 1){
    listDay[index].addEventListener('mouseover', mouseOverZoomIn);
    listDay[index].addEventListener('mouseout', mouseOverZoomOut);
  }
  for (let index = 0; index < listHoliday.length; index += 1) {
    listHoliday[index].addEventListener('mouseout', mouseOutHoliday)
  }
}

function addTask(task) {
  let addSpanTaks = document.createElement('span');
  let divMyTasks = document.querySelector('.my-tasks');
  addSpanTaks.innerText = task;
  divMyTasks.appendChild(addSpanTaks);
}

function addColorTask(color) {
  let addDivTask = document.createElement('div');
  let divMyTasks = document.querySelector('.my-tasks');
  addDivTask.className = 'task';
  addDivTask.style.backgroundColor = color;
  divMyTasks.appendChild(addDivTask);
}

function isSelected() {
  let taskSelected = document.querySelector('div.my-tasks div');
  let classTask = taskSelected.className;
  if (classTask === 'task selected') {
    taskSelected.className = 'task'
  } else if(classTask === 'task') {
    taskSelected.className = 'task selected';
  }
}

function markColor() {
  let taskSelected = document.querySelector('div.my-tasks div');
  taskSelected.addEventListener('click', isSelected);
}

function markDay(event) {
  if (event.target.style.color === 'blue') {
    event.target.style.color = '#777'
  }else {
    event.target.style.color = 'blue';
  }
}

function colorizeDay() {
  let days = document.querySelectorAll('.day');
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('click', markDay);
  }
}

function pressButton() {
  let input = document.querySelector('#task-input');
  let taskList = document.querySelector('.task-list');
  let listInput = document.createElement('li');
  listInput.innerText = input.value;
  if (input.value == '') {
    alert('Erro ao adicionar um Compromisso. Ausencia de entrada de texto')
  }else {
    taskList.appendChild(listInput)
  }
}

function pressEnter(event) {
  let enter = event.which || event.keyCode;
  let input = document.querySelector('#task-input');
  let taskList = document.querySelector('.task-list');
  let listInput = document.createElement('li');
  listInput.innerText = input.value;
  if (enter == 13){
    taskList.appendChild(listInput)
  }
}

function getCompromisse() {
  let buttonInput = document.querySelector('#btn-add');
  let input = document.querySelector('#task-input');
  buttonInput.addEventListener('click', pressButton);
  input.addEventListener('keyup', pressEnter);
}

createDaysOfTheWeek();
daysMonth();
createButtonHoliday('Feriados');
changeColor();
createButtonFriday('Sexta-Feira');
changeFriday();
zoomList();
addTask('Cozinhar');
addColorTask('blue');
markColor();
colorizeDay();
getCompromisse();
