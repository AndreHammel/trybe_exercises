let array = [2, 3, 6, 7, 10, 1];

function maiorIndice(array) {
  let valor = array[0]
  let indice = null;
  for (let i in array) {
    if (array[i] > valor) {
      valor = array[i];
      indice = i;
    }
  }
  return indice;
}

console.log(maiorIndice(array));