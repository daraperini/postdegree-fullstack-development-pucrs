// Importando objeto de classe utilizando ECMAScript 6
// Criando novo objeto Carro

import Carro from "../classes/Carro.mjs";

const carro = new Carro(55);
console.log(carro.capacidade);
console.log(carro.tanque);

// Manipula setter da classe
carro.tanque = 30;
console.log(carro.tanque);

// Passa da capacidade do tanque, entra no if e retorna capacidade máxima do tanque
carro.tanque = 30;
console.log(carro.tanque);

// Ignora atribuição e mantém capacidade máxima do tanque
carro.tanque = 30;
console.log(carro.tanque);
