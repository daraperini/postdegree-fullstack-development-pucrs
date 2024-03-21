// Código desenvolvido com o objetivo de explorar Sets no JavaScript.
// Utilização do Set de forma a demonstrar que esta estrutura de dados não aceita valores repetidos

var novoSet = new Set();

novoSet.add("backend");
novoSet.add("frontend");
novoSet.add("mobile");
novoSet.add("mobile");
novoSet.add("mobile");

var resultado = novoSet;
console.log(resultado);
