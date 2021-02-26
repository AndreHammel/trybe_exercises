// Exercicio 9 - Bloco 4 : Dia 2


let start = 1;
let finish = 25;
let container = [];

for (let i = start; i < finish + 1; i++) {
  container.push(i);
}

let divisao = [];
for (let i = 0; i < container.length; i++) {
  divisao.push(container[i] / 2);
  console.log(divisao[i]);
}
