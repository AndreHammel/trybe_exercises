//Exercício 10 - Bloco 4 : Dia 1

let valorCusto = 100;
let valorVenda = 140;
let impostoSobreCusto = 20;


let valorCustoTotal = valorCusto + (valorCusto * (impostoSobreCusto / 100));
let lucro = (valorVenda - valorCustoTotal) * 1000;

console.log(`Custo por unidade de produto: ${valorCustoTotal}`);
console.log(`Lucro sob a venda de 1000 unidades : ${lucro}`);
