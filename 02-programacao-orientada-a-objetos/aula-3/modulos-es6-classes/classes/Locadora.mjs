// Criando Locadora de Carros
// Aplicando exportação de módulos a partir de ECMAScript 6

class Locadora {
  #carros;

  constructor() {
    this.#carros = [];
  }

  adicionaCarro(carro) {
    this.#carros.push(carro);
  }

  consultaCarros() {
    this.#carros.forEach((carro) =>
      console.log("Carro placa (" + carro.placa + "); tanque:" + carro.tanque)
    );
  }

  abasteceCarro(index, quantidade) {
    if (index >= 0 && index < this.#carros.length) {
      this.#carros[index].tanque = quantidade;
    }
  }
}

export default Locadora;
