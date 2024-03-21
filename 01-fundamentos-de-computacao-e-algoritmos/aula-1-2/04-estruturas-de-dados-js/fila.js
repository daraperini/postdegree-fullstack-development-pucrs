// Código desenvolvido com o objetivo de explorar filas no JavaScript.
// Abordagem do conceito de classes JS, suas aplicações e como construí-las.
// Aplicação do conceito Open Closed:
//   Open: Aberto para extensão
//   Closed: Fechado para modificação

// Filas:
//   Podem ser de qualquer tipo de dados
//   Nesta estrutura de dados a ordem importa: funciona baseado em FIFO (First in First Out)

// Objetivos
//  1- Criar uma fila de requisições fictícias
//  2- Incluir outra requisição na fila
//  3- Excluir a primeira requisição na fila

console.log("[Fila/Queue]");

var fila = ["scripts.js", "style.css", "imagem.png"];
console.log(fila);
fila.push("doguinho.jpg");
console.log(fila);
fila.shift();
console.log(fila);

// Objetivos
//  1- Criar um objeto de fila a partir de class components
//  2- Incluir métodos para manipulação da fila
//  3- Criar uma nova fila e manipulá-la utilizando seus métodos

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    this.data.shift();
  }

  print() {
    console.log(this.data);
  }
}

// Design de código First
var requests = new Queue();

requests.enqueue("scripts.js");
requests.print();
requests.dequeue();
requests.enqueue("style.css");
requests.enqueue("imagem.png");
requests.enqueue("doguinho.jpg");
requests.print();
