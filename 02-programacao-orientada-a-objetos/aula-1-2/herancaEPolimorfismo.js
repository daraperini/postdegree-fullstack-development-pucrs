// HERANÇA e POLIMORFISMO
 
// Aplicando o conceito de herança utilizando class components

// Componente Pai
class Usuario {
    constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
    }
  
    login() {
      console.log("Fazendo login");
    }
    trocarEmail(novoEmail) {
      console.log("Novo email é" + novoEmail);
    }
    trocarSenha(novaSenha) {
      console.log("Nova senha é " + novaSenha);
    }
  }
  
  // Componente filho que tem acesso a todos os atributos e métodos do Pai e acrescenta novos de acordo com seu objetivo
  class Administrador extends Usuario {
    constructor(nome, email, senha, setor) {
      super(nome, email, senha);
      this.setor = setor;
    }
  
    autorizar() {
      console.log("Autoriza entrada de usuário");
    }
    bloquear() {
      console.log("Bloqueia usuário");
    }
  
  // Polimorfismo = alteração de um comportamento herdado (métodos) de um objeto-pai
    login() {
      console.log("Fazendo login de forma diferente");
    }
  }
  
  // Criando componente a partir da class Administrador
  const administrador = new Administrador(
    "dara",
    "dara@gmail.com",
    "123",
    "admin"
  );
  
  // Acessar novo componente
  console.log(administrador);
  
  // Componente criado a partir de classe filha tem acesso a métodos da classe pai
  console.log(administrador.trocarEmail('novoemail@gmail.com'));
  
  // Mas também tem novos métodos
  console.log(administrador.bloquear());
  
  // E pode sobrescrever métodos da classe pai
  console.log(administrador.login());
  