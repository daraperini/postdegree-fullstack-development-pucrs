// Criando objeto de classe utilizando atributos privados, getter para acessar informações e setter para alterar informações
// Aplicando exportação de módulos a partir de ECMAScript 6

class Carro {
  #tanque;
  #capacidadeTanque;

  constructor(valor) {
    this.#tanque = 0;
    this.#capacidadeTanque = valor;
  }

  get tanque() {
    return this.#tanque;
  }

  get capacidade() {
    return this.#capacidadeTanque;
  }

  set tanque(quantidade) {
    if (quantidade >= 0) {
      if (quantidade + this.#tanque > this.#capacidadeTanque) {
        this.#tanque = this.#capacidadeTanque;
      } else {
        this.#tanque += quantidade;
      }
    }
  }
}

export default Carro;
