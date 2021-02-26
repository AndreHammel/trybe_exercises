// Exercicio 6 - Bloco 4 : Dia 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let counter = null;
for (let i =0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      counter++;
    }
}
if (counter != 0) {
  console.log(`A quantidade de número impares é ${counter}`)
}else{
  console.log(`Não há números ímpares nesse array!`)
}
