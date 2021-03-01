let palavra = "arara";

function ehPalidromo(palavra) {
  let listaLetras = palavra.split("");
  let reversaoLetras = listaLetras.reverse();
  let palavraInvertida = reversaoLetras.join("");
  if (palavraInvertida === palavra) {
    return true;
  }else{
    return false;
  }
}

console.log(ehPalidromo(palavra));




