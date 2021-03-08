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
/*Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

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
      if (holidays[key] === array[i]) {
      li_son.setAttribute('class', "'day holiday");
      li_son.add
      }
    }
    ul_father.appendChild(li_son);
  }
}
adicionaDiasDoMes(dezDaysList)
