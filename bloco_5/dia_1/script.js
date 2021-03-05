/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

//1
function changeP(texto) {
  document.getElementsByTagName("p")[0].innerText = texto;
}
changeP('Descrição qualquer para ser trocada pelo javascript por meio de uma função');

//2 
function changeColor(color) {
  document.getElementsByClassName("main-content")[0].style.backgroundColor = color;
}
changeColor('green')
//3
function changeMiddle(color) {
  document.getElementsByClassName("center-content")[0].style.backgroundColor = color;
}
changeMiddle('#ffffff');

//4
function changeH1(texto) {
  document.getElementsByTagName("h1")[0].innerText = texto;
}

changeH1('Exercício 5.1 - JavaScript');

//5
function paraMaiuscula() {
  for (let i = 0; i < document.getElementsByTagName("p").length; i += 1) {
    let texto_min = document.getElementsByTagName("p")[i].innerText;
    document.getElementsByTagName("p")[i].innerText = texto_min.toUpperCase();
  }
}

paraMaiuscula();

//6
function tagsPconsole() {
  for (let i = 0; i < document.getElementsByTagName("p").length; i += 1) {
    console.log(document.getElementsByTagName("p")[i].innerText);
  }
}
tagsPconsole();