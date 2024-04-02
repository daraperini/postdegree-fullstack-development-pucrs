// Criação de uma locadora e adição de carros com placa na locadora
// Aplicando importação de módulos a partir de ECMAScript 6 

import CarroComPlaca from "../classes/CarroComPlaca.mjs";
import Locadora from "../classes/Locadora.mjs";

// Cria locadora e adiciona novos carros com placa
const locadora = new Locadora();
locadora.adicionaCarro(new CarroComPlaca("ABC-1234"));
locadora.adicionaCarro(new CarroComPlaca("CBA-4321"));
locadora.consultaCarros();

// Abastece carro placa "ABC-1234"
locadora.abasteceCarro(0, 30);
locadora.consultaCarros();

// Abastece 30 no carro "CBA-4321" e tenta abastecer mais 30 no carro "ABC-1234", que só aceita até 55 de capacidade, portanto mantém em 55 o abastecimento
locadora.abasteceCarro(1, 30);
locadora.abasteceCarro(0, 30);
locadora.consultaCarros();
