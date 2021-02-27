// Exericio 3 - Bloco 4 : Dia 2

let n = 5;

for (let i = 1; i < n + 1; i++) {
  let line = "";
  for(let k = n - i; k > 0; k--) {
    line += " ";
  }
  for (let j = 0; j < i; j++) { 
    line += "*";
  }
  console.log(line);
}

