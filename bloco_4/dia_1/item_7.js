console.clear();

let nota = -1;
let conceito = "nota";

if (nota >= 90 && nota <= 100) {
    conceito = "A";
} else if (nota >= 80 && nota < 90) {
    conceito = "B";
} else if (nota >= 70 && nota < 80) {
    conceito = "C";
} else if (nota >= 60 && nota < 70) {
    conceito = "D";
} else if (nota >= 50 && nota < 60) {
    conceito = "E";
} else if (nota < 50 && nota >= 0) {
    conceito = "F";
} else if(nota < 0 || nota > 100) {
    conceito = " \nERROR : Nota fora da faixa.";
}



console.log("Conceito atribuido:", conceito);