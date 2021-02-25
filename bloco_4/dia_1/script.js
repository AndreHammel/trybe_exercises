let var1 = 10;
let var2 = 20;
console.log("As variaveis são :", var1, " e ", var2);

//item 1
soma = var1 + var2;
subtracao = var1 - var2;
multiplicacao = var1 * var2;
divisao = var1 / var2;
modulo = var1 % var2;

console.log("Soma das variaveis é:", soma);
console.log("Subtração das variaveis é:", subtracao);
console.log("Multiplicação das variaveis é:", multiplicacao);    
console.log("Divisão das variaveis é:",divisao);
console.log("Modulo das variaveis é:", modulo);
console.log("\n");

//item 2
if (var1 > var2) {
    console.log("A variavel var1 é maior que a var2");
}else {
    console.log("A variavel var2 é maior que a var1");
}

//item 3
let numero1 = 100;
let numero2 = 200;
let numero3 = 300;

if (numero1 > numero2 && numero1 > numero3) {
    console.log("O numero 1 é o maior número");
}else if (numero2 > numero1 && numero2 > numero3) {
    console.log("O numero 2 é o maior número");
}else {
    console.log("O numero 3 é o maior número")
}

//item 4

let variavel_1 = -10;


if (variavel_1 > 0) {
    console.log("O numero é POSITIVO");
}else if (variavel_1 < 0) {
    console.log("O numero NEGATIVO");
}else {
    console.log("O numero 3 é ZERO")
}

//item 5
let angulo1 = 45;
let angulo2 = 45;
let angulo3 = 90;
let condicao_angulo;
if (angulo1 + angulo2 + angulo3 == 180) {
    condicao_angulo = true;
}else{
    condicao_angulo = false;
}
console.log(condicao_angulo);
