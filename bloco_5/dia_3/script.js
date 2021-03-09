window.onload = function () {
  let button = document.getElementById('start-race-btn');
  let car1 = document.getElementsByClassName('car1');
  let car2 = document.querySelector('.car2');

  reserCars(car1, car2)

  //1. qual o tipo de evento devo escutar?
  //2. o que faço quando esse evento acontecer?
  // site: DOM Event types
  button.addEventListener('click', function () {
    car1[0].style.marginLeft = parseInt(car1[0].style.marginLeft) + (Math.random() * 100) + 'px';
    car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 100) + 'px';

    if (parseInt(car1[0].style.marginLeft) > window.innerWidth) {
      alert('O carro vermelho ganhou!');
      reserCars(car1, car2);
    }
    if (parseInt(car2.style.marginLeft) > window.innerWidth) {
      alert('O carro verde ganhou!');
      reserCars(car1, car2);
    }
  });
};
function reserCars(car1, car2) {
  car1[0].style.marginLeft = 0;
  car2.style.marginLeft = 0;
}
