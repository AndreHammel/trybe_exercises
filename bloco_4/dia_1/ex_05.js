//Exercício 5 - Bloco 4 : Dia 1

//Ex 5
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
console.log("\n");
//
let capturado;
function capturar() {
    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigirado').innerHTML = capturando;
}