// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let array = [2, 3, 6, 7, 10, 1];

function maiorIndice(array) {
  let valor = array[0]
  let indice = null;
  for (let i in array) {
    if (array[i] < valor) {
      valor = array[i];
      indice = i;
    }
  }
  return indice;
}

console.log(maiorIndice(array));