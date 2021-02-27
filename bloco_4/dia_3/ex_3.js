// Exericio 3 - Bloco 4 : Dia 2

let n = 5;

for (let i = 1; i < n + 1; i++) {
  let line = "";
  for(let k = 5 - i; k > 0; k--) {
    line += " ";
  }
  for (let j = 0; j < i; j++) { // branco
    line += "*";
  }
  console.log(line);
}

// let line = " " + " " + "*" + " ";
// console.log(line);