// Código com exemplo de criação de nodo de uma estrutura de dados em árvore binária.
// Árvores binárias são compostas por nodos com no máximo dois filhos, sendo que todo nodo tem referência para seu nodo filho da esquerda e para o da direita, além da referência para o próprio pai
// Essa distribuição da árvore binária melhora o desempenho do programa

class Node {
  constructor(element) {
    this.element = element;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}
