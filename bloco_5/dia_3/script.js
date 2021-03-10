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

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function adicionaDiasDoMes(array) {
  for (let i = 0; i < array.length; i += 1) {
    let ul_father = document.getElementById('days');
    let li_son = document.createElement('li');
    holidays = [24, 25, 31];
    fridays = [4, 11, 18, 25];
    li_son.innerText = array[i];
    li_son.setAttribute('class', 'day')
    for (let keys in fridays) {
      if (fridays[keys] == array[i]) {
        li_son.setAttribute('class', 'day friday')
      }
    }
    for (let key in holidays) {
      if (holidays[key] === array[i] && li_son.className === 'day friday') {
        li_son.setAttribute('class', "'day friday holiday");
      } else if (holidays[key] === array[i]) {
        li_son.setAttribute('class', "'day holiday");
      }
    }
    ul_father.appendChild(li_son);
  }
}
adicionaDiasDoMes(dezDaysList)

// Exercicio 2
let btnHoliday = document.createElement('button');

function buttonFeriado(string) {
  btnHoliday.innerText = string;
  btnHoliday.setAttribute('id', 'btn-holiday');
  let div_father = document.querySelector('.buttons-container');
  div_father.appendChild(btnHoliday);
}

buttonFeriado('Feriados')

// Exercicio 3
btnHoliday.addEventListener('click', function () {
  let holidays = document.querySelectorAll('.holiday');
  for (let i = 0; i < holidays.length; i += 1) {

    console.log(holidays[i].style.backgroundColor);
    if (holidays[i].style.backgroundColor == '') {
      holidays[i].style.backgroundColor = 'green';
      holidays[i].style.color = 'white';
    } else {
      holidays[i].style.backgroundColor = '';
      holidays[i].style.color = 'black';
    }
  }
});

// Exercicio 4
let btnFriday = document.createElement('button');

function buttonFriday(string) {
  btnFriday.innerText = string;
  btnFriday.setAttribute('id', 'btn-friday');
  let div_father = document.querySelector('.buttons-container');
  div_father.appendChild(btnFriday);
}

buttonFriday('Sexta-Feira');

// Exercicio 5
btnFriday.addEventListener('click', function () {
  let fridays = document.querySelectorAll('.friday');
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerText != 'Sextou!') {
      fridays[i].innerText = 'Sextou!';
    } else {
      let friday = [4, 11, 18, 25]
      fridays[i].innerText = friday[i];
    }
  }
});

// Exercício 6

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};
dayMouseOver();
dayMouseOut();

// Exercicio 7

function addTask(string) {
  let task = document.createElement('span');
  let father_tag = document.querySelectorAll('.my-tasks')[0];
  task.innerText = string;
  father_tag.appendChild(task);
}

addTask('cozinhar');

// Exercicio 8

function newTaskDiv(color) {
  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
}

newTaskDiv('green');

// Exercicio 9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected')
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function (event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
setTaskClass();

// Exercicio 10

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task')
  let taskColor = taskDiv.style.backgroundColor;
  // console.log(taskColor);
  days.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.color;
    console.log(eventTargetColor);
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119, 119, 119)'
    }
  });
};

setDayColor();

function addNewTask() {
  let getInputField = 
}
