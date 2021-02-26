// Exercício da série Vamos Fazer Juntos - Bloco 4 : Dia 2

let megaSenaNumber = [];
let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let forthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);


megaSenaNumber = [fifthNumber, secondNumber, thirdNumber, forthNumber, fifthNumber, sixthNumber];

let turma10Play1 = [20, 40, 35, 9, 17, 52];
let turma10Play2 = [2, 4, 3, 19, 7, 22];
let turma10Play3 = [24, 41, 38, 13, 32, 59];

let games = [turma10Play1, turma10Play2, turma10Play3];


console.log("==================================");
console.log(megaSenaNumber);
console.log("==================================");
for (let k = 0; k < games.length; k++) {
  let acerto = [];
  let counter = 0;
  for (let i = 0; i < games[k].length; i++) {
    for (let j = 0; j < megaSenaNumber.length; j++) {
      if (games[k][i] === megaSenaNumber[j]) {
        counter++;
        acerto.push(megaSenaNumber[j]);
      }

    }
  }
  console.log( `Jogo ${k +1}`) ;
  console.log(`Número de acertos: ${counter}`);
  if ( acerto.length == 0) {
    console.log("Não ouve acertos.");
  }else{
    console.log(`Os numeros acertados foram: ${acerto}`);
  }
  console.log("---------------------------------"); 

}

