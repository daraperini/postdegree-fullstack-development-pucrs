const objetoVazio = {};

// Até um objeto vazio é um objeto:
console.log(objetoVazio);

const composicaoObjeto = {
  nomeMembro1: "valorMembro1",
  nomeMembro2: "valorMembro2",
};

// Objetos são compostos por membros, que por sua vez são compostos por nome e valor:
console.log(composicaoObjeto);

const pessoa1 = {
  nome: "Dara",
  idade: 26,
  saudar: function () {
    console.log("Olá!");
  },
};

// Um objeto fica salvo dentro de uma variável, e pode ter quantos membros for necessário:
console.log(pessoa1);

// Podemos acessar os atributos de objetos
console.log(pessoa1.idade);

// Métodos são membros dos objetos
console.log(pessoa1.saudar());

// Objetos podem armazenar referências

// Crianção de função a ser referenciada
function saudar() {
  console.log("Olá!");
}

// Atributo saudar armazena referência para a função saudar()
const pessoa2 = {
  nome: "Ana",
  idade: 40,
  saudar: saudar(),
};
