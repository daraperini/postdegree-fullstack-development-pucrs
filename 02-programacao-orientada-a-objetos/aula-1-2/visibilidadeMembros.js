// VISIBILIDADE

// Por padrão atributos e métodos são públicos

// Tornar visibilidade privada de atributos e métodos
// Usando Variáveis Locais:
function Livro(tituloParam, anoPublicacaoParam, autorParam) {
  let titulo = tituloParam;
  let anoPublicacao = anoPublicacaoParam;
  let autor = autorParam;
  this.calculaTempoLancamento = function () {
    return new Date().getUTCFullYear() - anoPublicacao;
  };

  this.getInfos = function () {
    return titulo + anoPublicacao + autor;
  };
}

const livro = new Livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

// Não permite acessar atributos diretamente
console.log(livro.titulo);
console.log(livro.calculaTempoLancamento());
// Acessa atributos passados por uma função que retorna esses valores, sem poder alterá-los
console.log(livro.getInfos());

// Identificadores pré-fixados:
class Autor {
  #nome;
  constructor(nome, idade) {
    this.#nome = nome;
    this.idade = idade;
  }

  getNome() {
    return this.#nome;
  }
  // Método correto para alterar membros: permitir que a alteração seja feita de acordo com os padrões impostos pela CLASSE
  setNome(novoNome) {
    return (this.#nome = novoNome);
  }
}

const autor = new Autor({ nome: "J. K.", sobrenome: "Rowling" }, 58);
// Identificador '#' priva o atributo ou método
console.log(autor.nome);
console.log(autor.idade);

let nomeAutor = autor.getNome();
nomeAutor.sobrenome = "Lovecraft";
// '#' priva apenas a visibilidade do membro, mas ainda permite sua manipulação!
console.log(autor);
