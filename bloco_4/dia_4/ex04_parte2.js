
let array =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function quantCaracteres (array) {
  let palavra  = array[0];
  for (let i in array) {
    if (array[i].length > palavra.length) {
      palavra = array[i];
    }
  }
  return palavra;
}

console.log(quantCaracteres(array));