// CRIAÇÃO DE OBJETOS

// LITERAL
const novoObjeto = {
  atributo1: "valorAtributo1",
  atributo2: "valorAtributo2",
};

// FÁBRICAS
function fabricaCriaNovoObjeto(parametro1, parametro2) {
  return {
    parametro1,
    parametro2,
  };
}

const objetoFabricado1 = fabricaCriaNovoObjeto(
  "valorAtributo1",
  "valorAtributo2"
);
const objetoFabricado2 = fabricaCriaNovoObjeto(
  "valorAtributo1",
  "valorAtributo2"
);

// CONSTRUTORES
function ConstrutorCriaNovoObjeto() {
  (this.atributo1 = "valorAtributo1"), (this.atributo2 = "valorAtributo2");
}

const construtorNovoObjeto = new ConstrutorCriaNovoObjeto();

function Pessoa(nome, anoDeNascimento, profissao) {
  this.nome = nome;
  this.anoDeNascimento = anoDeNascimento;
  this.profissao = profissao;
  this.calculaIdade = function () {
    return new Date().getUTCFullYear() - this.anoDeNascimento;
  };
}

const novaPessoa = new Pessoa("Dara", 1997, "Dev front-end");
console.log(novaPessoa);
console.log(novaPessoa.calculaIdade());
console.log("-------------");

// Criação a partir do construtor Object
const objetoCriadoComObject = new Object();
console.log(objetoCriadoComObject.constructor);
console.log("-------------");

// PROTÓTIPOS
// Permitem criar novos objetos baseados nos constructors de outros objetos
const novaPessoa2 = Object.create(novaPessoa);
console.log(novaPessoa2.constructor);
console.log("-------------");

const objetoCriadoComObject2 = Object.create(objetoCriadoComObject);
console.log(objetoCriadoComObject2.constructor);
console.log("-------------");

// Permite alterar todos os objetos filhos quando altera o protótipo do objeto pai
Pessoa.prototype.saudar = function () {
  console.log("Olá");
};

console.log(novaPessoa.saudar());
console.log("-------------");

// CLASSES
class ClassePessoa {
  constructor(nome, anoDeNascimento, profissao) {
    (this.nome = nome),
      (this.anoDeNascimento = anoDeNascimento),
      (this.profissao = profissao);
  }

  saudar() {
    console.log("Olá, eu sou " + this.nome);
  }
  calculaIdade() {
    return new Date().getUTCFullYear() - this.anoDeNascimento;
  }
}

const pessoaCriadaComClasse = new ClassePessoa("Dara", 1997, "Dev front-end");
console.log(pessoaCriadaComClasse);
console.log(pessoaCriadaComClasse.saudar());
console.log("-------------");

// Herança em Class components = extends
// Polimorfismo em Class components = sobrescrever métodos
class Estudante extends ClassePessoa {
  constructor(nome, anoDeNascimento, matricula) {
    super(nome, anoDeNascimento, "Estudante");
    this.matricula = matricula;
  }

  saudar() {
    super.saudar();
    console.log("É um prazer, colega!");
  }
}

const aluno = new Estudante("José", 1990, 12345);
console.log(aluno);
console.log(aluno.calculaIdade());
// Podemos alterar e deletar membros dos objetos já existentes ou adicionar novos
aluno.anoDeNascimento = 1995;
aluno.curso = "Ciência da computação";
delete aluno.matricula;
console.log(aluno);
console.log(aluno.saudar());
console.log("-------------");

// Para alterar diretamente na Classe:
ClassePessoa.prototype.nacionalidade = "Brasileira";
// Agora sempre que criar um novo objeto baseado na classe ClassePessoa o protótipo Object possuirá nacionalidade

const novaPessoaCriadaComClasse = new ClassePessoa(
  "Alberto",
  2005,
  "Estudante"
);
console.log(novaPessoaCriadaComClasse);

// Classes estáticas => não precisam que crie um objeto para utilizar o método da classe
class ValidadorCPF {
  static tamanhoCpf = 11;
  static validar(tamanho) {
    if (tamanho == this.tamanhoCpf) {
      return true;
    }
    return false;
  }
}

console.log(ValidadorCPF.validar("1111111111".length));
console.log(ValidadorCPF.validar("11111111111".length));

// Relação entre objetos

class Nota {
  #grau;
  constructor(disciplina, grau) {
    this.disciplina = disciplina;
    this.#grau = grau;
  }

  getGrau() {
    return this.#grau;
  }
  setGrau(valor) {
    if (valor < 0 || valor > 10) {
      throw new Error("Grau inválido");
    }
    this.#grau = valor;
  }
}

const estudante = new Estudante("Luiz", 1996, 155524);
// Incluindo atributo utilizando outra classe
estudante.nota = new Nota("POO", 10);
console.log(estudante);

// Utilizando método do atributo nota criado a partir da classe Nota no objeto estudante, que é da classe Estudante
estudante.nota.setGrau(9)
console.log(estudante.nota.getGrau())