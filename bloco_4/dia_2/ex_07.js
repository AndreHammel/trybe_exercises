// Exercicio 7 - Bloco 4 : Dia 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numero = numbers[0];
for (let i =0; i < numbers.length; i++) {
  if (numbers[i] < numero) 
    numero = numbers[i]; 
}
console.log(`O menor número dentro do array ${numbers} é o ${numero}`);