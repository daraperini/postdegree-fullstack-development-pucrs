// Criando carro com placa extendendo a classe pai Carro
// Aplicando exportação e importação de módulos a partir de ECMAScript 6

import Carro from "./Carro.mjs";

class CarroComPlaca extends Carro {
  #placa;

  constructor(placa) {
    super(55);
    this.#placa = placa;
  }

  get placa() {
    return this.#placa;
  }
}

export default CarroComPlaca;
