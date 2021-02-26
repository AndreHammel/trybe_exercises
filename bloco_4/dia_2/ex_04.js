// Exercicio 4 - Bloco 4 : Dia 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media = 0;
for (let i =0; i < numbers.length; i++) {
  soma += numbers[i];
  media = soma / numbers.length;
}

if (media > 20) {
  console.log(`O valor da média é ${media} e é maior que 20`);
}else{
  console.log(`O valor da média é ${media} e menor que 20`);
}

console.log(soma);
console.log(media);