// Exercicio 5 (Bonus) - Bloco 4 : Dia 3

let base = 9;
let numberLines = base - (base - (base % 2)) / 2;
let counter = 0;

for (let i = 0; i < numberLines; i++) {
  let line = "";
  counter += 1;
  for (let k = (base - numberLines); k > i; k--) {
    line += " ";
  }
  for (let j = 0; j < (2 * i + 1); j++) {
    let first = 0;
    let last = (2 * i + 1) - 1;
    if (counter != numberLines) {
      if (j == first || j == last) {
        line += "*";
      } else {
        line += " ";
      }
    } else {
      line += "*";
    }
  }
  for (let k = (base - numberLines); k > i; k--) {
    line += " ";
  }

  console.log(line);
}