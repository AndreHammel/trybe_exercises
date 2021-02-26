// Exericio 2 - Bloco 4 : Dia 2

let n = 5;

for (let i = 1; i < n + 1; i++) {
  let line = "";
  for (let k = 5; k < n; k++) { // asteristico
    for (let j = 0; j < i; j++) { // branco
      line += " ";
    }
    console.log(line);
  }
}