//Exercício 11 - Bloco 4 : Dia 1

let salarioBruto = 3000.00;
let INSS = null;
let IR = null;

if (salarioBruto <= 1556.94) {
  INSS = salarioBruto * 0.08;
}else if ((salarioBruto >= 1556.95) && (salarioBruto <= 2594.92)) {
  INSS = salarioBruto * 0.09;
}else if ((salarioBruto >= 2594.93) && (salarioBruto <= 5189.82)) {
  INSS = salarioBruto * 0.11;
}else if (salarioBruto > 5189.82) {
  INSS = 570.88;
}

let salarioReduzido = salarioBruto - INSS;

if (salarioReduzido <= 1903.98){
  IR = 0;
}else if (salarioReduzido >= 1903.99 && salarioReduzido <= 2826.65) {
  IR = (salarioReduzido * 0.075) - 142.80;
}else if (salarioReduzido >= 2826.66 && salarioReduzido <= 3751.05) {
  IR = (salarioReduzido * 0.15) - 354.80;
}else if (salarioReduzido >= 3751.06 && salarioReduzido <= 4664.68) {
  IR = (salarioReduzido * 0.225) - 636.13;
}else{
  IR = (salarioReduzido * 0.275) - 869.36;
}

let salarioLiquido = salarioBruto - INSS - IR;

console.log(`Valor do INSS: ${INSS.toFixed(2)}`);
console.log(`Valor do IR: ${IR.toFixed(2)}`);
console.log(`Salário Líquido: ${salarioLiquido}`);