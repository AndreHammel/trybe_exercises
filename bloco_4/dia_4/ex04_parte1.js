// exercicio 4 (parte 1) - Bloco 4 : dia 4 

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = 'sim';

for (let chave in info) {
  console.log(info[chave]);
}