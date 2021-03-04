let array = [2, 3, 2, 5, 8, 2, 3]; 

function comparacao(array) {
  let newArraySorted = array.sort()
  let j = 0
  for (let i = j ; i < array.length; i++) {
    let numero = newArraySorted[i]; 
    let counter = 0; 
    for (let key in newArraySorted ) {
      if (numero == newArraySorted[key]) {
        counter ++;
      }else{
        j = key;
        break;
      }

    }
  }
}

console.log(array.sort())