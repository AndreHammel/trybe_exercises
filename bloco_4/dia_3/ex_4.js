// Exericio 4 - Bloco 4 : Dia 2

let n = 5;

for (let i = 0; i < n - 2; i++) {
  let line = "";
  for (let k = (n - 3) - i; k > 0; k--) {
    line += " ";
  }
  for (let j = 0; j < (2 * i + 1); j++) {
    line += "*";
  }
  for (let k = (n - 3) - i; k > 0; k--) {
    line += " ";
  }
  console.log(line);
}

// for(let k = (n - 2) - i; k > 0; k--) {
//   line += " ";
// }