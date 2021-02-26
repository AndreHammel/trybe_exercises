// Exericio 1 - Bloco 4 : Dia 2

let n = 5;
if (n > 1) {
  for (let i = 0; i < 5; i++) {
    let line = "*";
    for (let j = 0; j < 5; j++) {
      line += "*";
    }
    console.log(line);
  }
}else{
  console.log("O valor de n deve ser maior que 1");
}