// Código desenvolvido com o objetivo de explorar pilhas no JavaScript.
// Abordagem do conceito de classes JS, suas aplicações e como construí-las.
// Aplicação do conceito Open Closed:
//   Open: Aberto para extensão
//   Closed: Fechado para modificação

// Pilhas:
//   Nesta estrutura de dados a ordem importa: funciona baseado em LIFO (Last in First Out)

// Objetivos:
//  1- Criar um objeto de pilha a partir de class components que faça referência ao histórico de um navegador
//  2- Incluir métodos para manipulação da pilha baseados nos métodos utilizados em navegação de histórico de navegadores reais
//  3- Criar uma nova pilha e manipulá-la utilizando seus métodos
console.log("pilha/stack");

class BrowserHistoryStack {
  constructor() {
    this.cursor = 0;
    this.data = [];
  }

  push(item) {
    this.cursor = this.cursor + 1;
    this.data.push(item);
  }

  back() {
    this.cursor = this.cursor - 1;
    //   this.data.pop();
  }

  clear() {
    this.data = [];
  }

  print() {
    console.log("Cursor", this.cursor);
    console.log("Itens atuais", this.data);
  }
}

const history = new BrowserHistoryStack();

history.push("https://google.com");
history.push("https://youtube.com");
history.push("https://facebook.com");
history.print();
history.back();
history.print();
