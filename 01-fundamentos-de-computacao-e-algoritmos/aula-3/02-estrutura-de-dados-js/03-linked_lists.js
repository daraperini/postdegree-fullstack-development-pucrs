// Código com exemplo de criação e aplicação de listas encadeadas
// Listas encadeadas são compostas por nodos que possuem referência para o próximo nodo da lista
// Cada elemento de uma lista encadeada se encontra em diferentes partes da memória, e as referências permitem que esses elementos se encadeiem

class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.count = 0;
      this.header = null;
      this.tail = null;
    }
  
    add(element) {
      if (this.count == 0) {
        this.header = this.tail = element;
      } else {
        this.tail.next = element;
        this.tail = element;
      }
      this.count++;
    }
  
    print() {
      var aux = this.header;
      while (aux != null) {
        console.log(aux.element);
        aux = aux.next;
      }
    }
  }
  
  var myLL = new LinkedList();
  
  myLL.add(new Node(1));
  myLL.print();
  console.log("-----");
  myLL.add(new Node(2));
  myLL.print();
  console.log("-----");
  myLL.add(new Node(4));
  myLL.print();
  console.log("-----");
  myLL.add(new Node(3));
  myLL.print();
  console.log("-----");
  